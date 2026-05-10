/**
 * engine.js
 * Disney Princess Quiz — Core Gameplay Engine
 * 
 * Responsibilities:
 *  - Session building (draw 10 of 20 categories, 3 of 25 questions each)
 *  - Rotation/bench system (exclude last winner + 3 random princesses from winning)
 *  - Scoring across all 16 princesses
 *  - State management (current question, answers, progress)
 *  - Result calculation
 *  - LocalStorage persistence
 * 
 * This file does NO rendering. quiz.html owns all DOM operations.
 * Engine communicates state changes via callbacks registered with engine.onStateChange().
 * 
 * Usage:
 *   engine.init(questionsData);   // call once after questions.js is loaded
 *   engine.startSession();         // builds a fresh 30-question session
 *   engine.answer(answerIndex);    // player picks an answer (0-3)
 *   engine.back();                 // go back one question
 *   engine.getState();             // returns full current state
 *   engine.getResult();            // returns winner after session complete
 */

const engine = (() => {

  // ─────────────────────────────────────────────
  // Constants
  // ─────────────────────────────────────────────

  const STORAGE_KEY_LAST_RESULT = 'pq_last_result';
  const STORAGE_KEY_SESSION     = 'pq_session';
  const STORAGE_KEY_ANSWERS     = 'pq_answers';

  const CATEGORIES_PER_SESSION  = 10;   // how many categories to draw
  const QUESTIONS_PER_CATEGORY  = 3;    // how many questions to draw per category
  const BENCH_SIZE               = 4;   // how many princesses to bench (1 last winner + 3 random)

  // ─────────────────────────────────────────────
  // Private state
  // ─────────────────────────────────────────────

  let _questions        = null;   // the full questions dataset, set by init()
  let _session          = null;   // array of 30 question objects for this session
  let _answers          = [];     // array of {questionId, answerIndex, scores} for each answered q
  let _currentIndex     = 0;      // which question we're on (0-29)
  let _benchedPrincesses = [];    // princess ids excluded from winning this session
  let _stateChangeCallbacks = [];

  // ─────────────────────────────────────────────
  // Utility helpers
  // ─────────────────────────────────────────────

  /** Fisher-Yates shuffle — returns a new shuffled array */
  function _shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /** Pick n random items from array, without replacement */
  function _sample(arr, n) {
    return _shuffle(arr).slice(0, n);
  }

  /** Deep clone a plain object/array (questions are plain objects) */
  function _clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  // ─────────────────────────────────────────────
  // Bench system
  // ─────────────────────────────────────────────

  /**
   * Determine which princesses are benched for this session.
   * Bench = last winner (from localStorage) + 3 random others.
   * If no last winner exists, bench 4 random princesses.
   * Benched princesses can still appear in questions and score points —
   * they just cannot WIN the session (their final score is ignored).
   */
  function _buildBench(allPrincessIds) {
    const lastResult = localStorage.getItem(STORAGE_KEY_LAST_RESULT);
    const bench = [];

    if (lastResult && allPrincessIds.includes(lastResult)) {
      bench.push(lastResult);
      // Pick 3 random others from the remaining pool
      const others = allPrincessIds.filter(id => id !== lastResult);
      bench.push(..._sample(others, 3));
    } else {
      // No last result — bench 4 random
      bench.push(..._sample(allPrincessIds, BENCH_SIZE));
    }

    return bench;
  }

  // ─────────────────────────────────────────────
  // Session builder
  // ─────────────────────────────────────────────

  /**
   * Build a 30-question session:
   *  1. Draw CATEGORIES_PER_SESSION random categories from all available
   *  2. For each drawn category, draw QUESTIONS_PER_CATEGORY random questions
   *  3. Shuffle the 30 questions so categories aren't all grouped
   *     (keeps the experience feeling varied)
   */
  function _buildSession(questionsData) {
    const allCategoryIds = Object.keys(questionsData);

    if (allCategoryIds.length < CATEGORIES_PER_SESSION) {
      console.warn(`engine: only ${allCategoryIds.length} categories available, using all`);
    }

    // Draw categories
    const drawnCategoryIds = _sample(
      allCategoryIds,
      Math.min(CATEGORIES_PER_SESSION, allCategoryIds.length)
    );

    const sessionQuestions = [];

    for (const catId of drawnCategoryIds) {
      const categoryQuestions = questionsData[catId];

      if (!categoryQuestions || categoryQuestions.length === 0) {
        console.warn(`engine: category "${catId}" has no questions`);
        continue;
      }

      // Draw questions from this category
      const drawn = _sample(
        categoryQuestions,
        Math.min(QUESTIONS_PER_CATEGORY, categoryQuestions.length)
      );

      // Tag each question with its category (in case it's not already tagged)
      for (const q of drawn) {
        sessionQuestions.push({ ...q, _category: catId });
      }
    }

    // Shuffle so questions from the same category aren't bunched
    return _shuffle(sessionQuestions);
  }

  // ─────────────────────────────────────────────
  // Scoring engine
  // ─────────────────────────────────────────────

  /**
   * Calculate cumulative scores for all princesses from answered questions.
   * Returns {princessId: totalScore} for all princesses.
   * Benched princesses are scored normally but flagged separately —
   * the result function ignores them when determining the winner.
   */
  function _calculateScores() {
    const totals = {};

    // Initialise all known princess ids at 0
    const allIds = window.PRINCESS_IDS || Object.keys(window.PRINCESSES || {});
    for (const id of allIds) {
      totals[id] = 0;
    }

    for (const answer of _answers) {
      const weight = answer.weight || 1.0;
      for (const [princessId, score] of Object.entries(answer.scores || {})) {
        if (totals[princessId] === undefined) totals[princessId] = 0;
        totals[princessId] += score * weight;
      }
    }

    return totals;
  }

  /**
   * Determine the winner from calculated scores.
   * Benched princesses are excluded from winning.
   * In a tie, the winner is the one who appeared first in the session
   * (slight bias toward earlier questions, which is fine).
   */
  function _determineWinner(scores) {
    const eligibleIds = Object.keys(scores).filter(
      id => !_benchedPrincesses.includes(id)
    );

    if (eligibleIds.length === 0) {
      // Fallback — bench was too aggressive somehow, use all
      console.warn('engine: all princesses were benched, falling back to full pool');
      return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    }

    const winner = eligibleIds.reduce((best, id) => {
      return scores[id] > scores[best] ? id : best;
    }, eligibleIds[0]);

    return winner;
  }

  // ─────────────────────────────────────────────
  // State notification
  // ─────────────────────────────────────────────

  function _notify() {
    const state = _buildStateSnapshot();
    for (const cb of _stateChangeCallbacks) {
      try { cb(state); } catch (e) { console.error('engine: state callback error', e); }
    }
  }

  function _buildStateSnapshot() {
    const isComplete = _session && _currentIndex >= _session.length;

    return {
      // Session info
      sessionLength:    _session ? _session.length : 0,
      currentIndex:     _currentIndex,
      progress:         _session ? _currentIndex / _session.length : 0,
      isComplete,

      // Current question (null if complete)
      currentQuestion:  (!isComplete && _session)
                          ? _session[_currentIndex]
                          : null,

      // Previous answers (for back-navigation display)
      answers:          [..._answers],

      // Benched princesses (for debugging / transparency)
      benched:          [..._benchedPrincesses],

      // Running scores (useful for progress bar, can be hidden in UI)
      scores:           _calculateScores(),

      // Result — only populated when complete
      result:           isComplete ? _determineWinner(_calculateScores()) : null,
    };
  }

  // ─────────────────────────────────────────────
  // Session persistence
  // ─────────────────────────────────────────────

  function _saveSessionToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify({
        session:  _session,
        answers:  _answers,
        index:    _currentIndex,
        benched:  _benchedPrincesses,
      }));
    } catch (e) {
      // LocalStorage might be full or unavailable — fail gracefully
      console.warn('engine: could not save session to localStorage', e);
    }
  }

  function _loadSessionFromStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_SESSION);
      if (!raw) return false;
      const data = JSON.parse(raw);
      if (!data.session || !Array.isArray(data.session)) return false;
      _session            = data.session;
      _answers            = data.answers || [];
      _currentIndex       = data.index   || 0;
      _benchedPrincesses  = data.benched || [];
      return true;
    } catch (e) {
      return false;
    }
  }

  function _clearSessionFromStorage() {
    localStorage.removeItem(STORAGE_KEY_SESSION);
  }

  // ─────────────────────────────────────────────
  // Public API
  // ─────────────────────────────────────────────

  /**
   * init(questionsData)
   * Must be called once after both questions.js and princesses.js are loaded.
   * questionsData: the QUESTIONS object from questions.js
   *   { categoryId: [questionObject, ...], ... }
   */
  function init(questionsData) {
    _questions = questionsData;
    console.log(`engine: initialised with ${Object.keys(questionsData).length} categories`);
  }

  /**
   * startSession(options)
   * Builds a fresh 30-question session.
   * options.resume: if true, try to resume an in-progress session from localStorage
   * options.fresh:  if true, always start fresh (ignores any saved session)
   */
  function startSession(options = {}) {
    if (!_questions) {
      console.error('engine: call engine.init(questionsData) before startSession()');
      return;
    }

    const shouldResume = options.resume && !options.fresh;

    if (shouldResume) {
      const resumed = _loadSessionFromStorage();
      if (resumed && _currentIndex < _session.length) {
        console.log(`engine: resumed session at question ${_currentIndex + 1}/${_session.length}`);
        _notify();
        return;
      }
    }

    // Fresh session
    const allPrincessIds = window.PRINCESS_IDS || Object.keys(window.PRINCESSES || {});
    _benchedPrincesses = _buildBench(allPrincessIds);
    _session = _buildSession(_questions);
    _answers = [];
    _currentIndex = 0;

    console.log(`engine: started fresh session — ${_session.length} questions across drawn categories`);
    console.log(`engine: benched princesses — ${_benchedPrincesses.join(', ')}`);

    _saveSessionToStorage();
    _notify();
  }

  /**
   * answer(answerIndex)
   * Record an answer for the current question and advance.
   * answerIndex: 0-3 (index into currentQuestion.answers[])
   */
  function answer(answerIndex) {
    if (!_session) {
      console.error('engine: no active session');
      return;
    }
    if (_currentIndex >= _session.length) {
      console.warn('engine: session already complete');
      return;
    }

    const question = _session[_currentIndex];
    const chosen   = question.answers[answerIndex];

    if (!chosen) {
      console.error(`engine: invalid answerIndex ${answerIndex}`);
      return;
    }

    _answers.push({
      questionId:  question.id,
      answerIndex,
      answerText:  chosen.text,
      scores:      chosen.scores || {},
      weight:      question.weight || 1.0,
      category:    question._category || question.category,
      // Freetext questions store their open-ended response here
      freetextResponse: chosen._freetextResponse || null,
    });

    _currentIndex++;
    _saveSessionToStorage();
    _notify();

    // If session is now complete, save the winner to localStorage
    if (_currentIndex >= _session.length) {
      const finalScores = _calculateScores();
      const winner = _determineWinner(finalScores);
      localStorage.setItem(STORAGE_KEY_LAST_RESULT, winner);
      _clearSessionFromStorage();
      console.log(`engine: session complete — winner: ${winner}`);
    }
  }

  /**
   * answerFreetext(text)
   * Special handler for freetext questions.
   * Records the typed response and advances.
   * The text is stored with the answer record; scoring is neutral (no points scored).
   */
  function answerFreetext(text) {
    if (!_session) return;
    const question = _session[_currentIndex];

    // Freetext questions don't score directly — they just record
    _answers.push({
      questionId:       question.id,
      answerIndex:      -1,
      answerText:       '[freetext]',
      scores:           {},
      weight:           1.0,
      category:         question._category || question.category,
      freetextResponse: text,
      freetextTag:      question.freetextTag || 'response',
    });

    _currentIndex++;
    _saveSessionToStorage();
    _notify();

    if (_currentIndex >= _session.length) {
      const finalScores = _calculateScores();
      const winner = _determineWinner(finalScores);
      localStorage.setItem(STORAGE_KEY_LAST_RESULT, winner);
      _clearSessionFromStorage();
    }
  }

  /**
   * back()
   * Go back one question. Removes the last answer.
   */
  function back() {
    if (_currentIndex === 0) return;
    _answers.pop();
    _currentIndex--;
    _saveSessionToStorage();
    _notify();
  }

  /**
   * getState()
   * Returns a snapshot of current engine state.
   * Safe to call at any time.
   */
  function getState() {
    return _buildStateSnapshot();
  }

  /**
   * getResult()
   * Returns the winner princess id after a complete session.
   * Returns null if session is not complete.
   */
  function getResult() {
    if (!_session || _currentIndex < _session.length) return null;
    return _determineWinner(_calculateScores());
  }

  /**
   * getScores()
   * Returns current cumulative scores for all princesses.
   * Useful for debugging or showing a progress state.
   */
  function getScores() {
    return _calculateScores();
  }

  /**
   * getFreetextResponses()
   * Returns all freetext answers from this session.
   * Returns array of {tag, text, questionId}
   */
  function getFreetextResponses() {
    return _answers
      .filter(a => a.freetextResponse !== null && a.freetextResponse !== undefined)
      .map(a => ({
        tag:        a.freetextTag || 'response',
        text:       a.freetextResponse,
        questionId: a.questionId,
      }));
  }

  /**
   * onStateChange(callback)
   * Register a callback that fires whenever state changes.
   * Callback receives the full state snapshot.
   * Returns an unsubscribe function.
   */
  function onStateChange(callback) {
    _stateChangeCallbacks.push(callback);
    return () => {
      _stateChangeCallbacks = _stateChangeCallbacks.filter(cb => cb !== callback);
    };
  }

  /**
   * reset()
   * Clears all session state from memory and localStorage.
   * Also clears the last-result bench record.
   * Useful for testing or manual reset.
   */
  function reset() {
    _session           = null;
    _answers           = [];
    _currentIndex      = 0;
    _benchedPrincesses = [];
    localStorage.removeItem(STORAGE_KEY_LAST_RESULT);
    localStorage.removeItem(STORAGE_KEY_SESSION);
    console.log('engine: full reset complete');
    _notify();
  }

  /**
   * resetBench()
   * Clears only the bench (last-result record).
   * Session continues normally; next session will have no bench.
   */
  function resetBench() {
    localStorage.removeItem(STORAGE_KEY_LAST_RESULT);
    console.log('engine: bench cleared');
  }

  /**
   * getDebugInfo()
   * Returns verbose internal state for debugging.
   */
  function getDebugInfo() {
    return {
      questionsLoaded:   _questions ? Object.keys(_questions).length : 0,
      sessionLength:     _session ? _session.length : 0,
      currentIndex:      _currentIndex,
      answersGiven:      _answers.length,
      benched:           _benchedPrincesses,
      lastResult:        localStorage.getItem(STORAGE_KEY_LAST_RESULT),
      scores:            _calculateScores(),
    };
  }

  // ─────────────────────────────────────────────
  // Expose public API
  // ─────────────────────────────────────────────

  return {
    init,
    startSession,
    answer,
    answerFreetext,
    back,
    getState,
    getResult,
    getScores,
    getFreetextResponses,
    onStateChange,
    reset,
    resetBench,
    getDebugInfo,
  };

})();

// Make available globally
if (typeof window !== 'undefined') {
  window.engine = engine;
}
