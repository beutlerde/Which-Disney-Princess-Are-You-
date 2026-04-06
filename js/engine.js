/* ═══════════════════════════════════════════════
   DISNEY PRINCESS QUIZ — engine.js
   Core quiz logic: selection, rendering, scoring
   ═══════════════════════════════════════════════ */

// ── STATE ────────────────────────────────────────
let scores        = {};
let selectedQ     = [];
let currentQIndex = 0;
let selectedOpt   = null;
let answers       = [];   // {qIndex, optIndex, q, opt} for crest building

// ── CATEGORY SCENE THEMES ─────────────────────────
const CAT_THEMES = {
  personality: { bg:"#1a0a2e", accent:"#c084fc", emoji:"✨", particles:["✨","💫","⭐"] },
  style:       { bg:"#1e0a20", accent:"#f9a8d4", emoji:"👗", particles:["💎","✨","🌸"] },
  kingdom:     { bg:"#0a1a2e", accent:"#67e8f9", emoji:"🏰", particles:["⭐","✨","🌟"] },
  romance:     { bg:"#2e0a1a", accent:"#fb7185", emoji:"💕", particles:["💕","🌹","💫"] },
  animals:     { bg:"#0a2e1a", accent:"#6ee7b7", emoji:"🐾", particles:["🌿","🦋","🌸"] },
  values:      { bg:"#1a1a0a", accent:"#fde68a", emoji:"🌟", particles:["⭐","✨","💫"] },
  food:        { bg:"#2e1a0a", accent:"#fb923c", emoji:"🍽️", particles:["✨","⭐","🌟"] },
  magic:       { bg:"#0a0a2e", accent:"#a78bfa", emoji:"🔮", particles:["✨","💫","⭐","🌟"] },
  friendship:  { bg:"#1a0a2e", accent:"#86efac", emoji:"👯", particles:["💕","✨","🌸"] },
  fun:         { bg:"#2e0a2e", accent:"#f5c842", emoji:"🎉", particles:["🎉","✨","⭐","💫"] }
};

// Which questions to track for the Royal Crest
const CREST_CATEGORIES = {
  style:    { label:"Royal Color",    icon:"🎨", qKeyword:"color palette" },
  animals:  { label:"Royal Companion",icon:"🐾", qKeyword:"ideal animal companion" },
  kingdom:  { label:"Royal Home",     icon:"🏰", qKeyword:"dream home" },
  magic:    { label:"Royal Power",    icon:"✨", qKeyword:"one magical power" },
  romance:  { label:"Royal Style",    icon:"💕", qKeyword:"relationship style" }
};

// ── INIT ─────────────────────────────────────────
function initStars() {
  const el = document.getElementById("stars");
  for (let i = 0; i < 130; i++) {
    const s = document.createElement("div");
    s.className = "star";
    const sz = Math.random() * 3 + 0.5;
    s.style.cssText = `width:${sz}px;height:${sz}px;top:${Math.random()*100}%;left:${Math.random()*100}%;--d:${2+Math.random()*4}s;--dl:${Math.random()*4}s`;
    el.appendChild(s);
  }
}

function initSparkles() {
  const el = document.getElementById("sparkles");
  ["✨","⭐","🌟","💫","✦"].forEach(e => {
    for (let j = 0; j < 5; j++) {
      const s = document.createElement("div");
      s.className = "sparkle";
      s.textContent = e;
      s.style.cssText = `left:${Math.random()*100}%;font-size:${0.7+Math.random()*0.8}rem;--d:${4+Math.random()*5}s;--dl:${Math.random()*6}s`;
      el.appendChild(s);
    }
  });
}

// ── QUESTION SELECTION ────────────────────────────
function selectQuestions() {
  const PER_CAT = { personality:4, style:3, kingdom:3, romance:4, animals:3, values:4, food:3, magic:4, friendship:4, fun:3 };
  // total = 35
  let selected = [];
  Object.entries(ALL_QUESTIONS).forEach(([cat, qs]) => {
    const count = PER_CAT[cat] || 3;
    const shuffled = [...qs].sort(() => Math.random() - 0.5);
    shuffled.slice(0, count).forEach(q => selected.push({ ...q, _cat: cat }));
  });
  // Shuffle the final deck
  return selected.sort(() => Math.random() - 0.5);
}

// ── START QUIZ ────────────────────────────────────
function startQuiz() {
  scores = {};
  Object.keys(PRINCESSES).forEach(k => scores[k] = 0);
  answers = [];
  selectedQ = selectQuestions();
  currentQIndex = 0;
  selectedOpt = null;

  document.getElementById("title-screen").classList.add("hidden");
  document.getElementById("quiz-area").classList.remove("hidden");
  document.getElementById("progress-area").style.display = "block";

  renderQuestion();
}

// ── RENDER QUESTION ───────────────────────────────
function renderQuestion() {
  const q = selectedQ[currentQIndex];
  const catKey = q._cat;
  const theme = CAT_THEMES[catKey] || CAT_THEMES.personality;

  // Update scene background
  updateSceneBg(theme);

  // Progress
  const pct = Math.round((currentQIndex / selectedQ.length) * 100);
  document.getElementById("prog-fill").style.width = Math.max(2, pct) + "%";
  document.getElementById("q-counter").textContent = `Question ${currentQIndex + 1} of ${selectedQ.length}`;
  document.getElementById("q-cat-label").textContent = q.cat;

  // Card
  const card = document.getElementById("question-card");
  card.style.animation = "none";
  card.offsetHeight; // reflow
  card.style.animation = "slideIn 0.45s cubic-bezier(0.34,1.56,0.64,1)";

  // Apply category color to card top border
  card.style.setProperty("--cat-color", theme.accent);

  document.getElementById("cat-badge").textContent = q.cat;
  document.getElementById("cat-badge").style.borderColor = theme.accent + "66";
  document.getElementById("cat-badge").style.color = theme.accent;
  document.getElementById("q-emoji").textContent = q.emoji;
  document.getElementById("q-text").textContent = q.q;

  // Render options
  const container = document.getElementById("options-container");
  container.innerHTML = "";
  selectedOpt = null;

  const layout = q.layout || "1col";

  if (layout === "swatch") {
    renderSwatch(q, container);
  } else if (layout === "flip") {
    renderFlip(q, container, theme);
  } else {
    renderGrid(q, container, layout);
  }

  // Hide next button
  const btn = document.getElementById("btn-next");
  btn.classList.add("hidden");
}

function updateSceneBg(theme) {
  const bg = document.getElementById("scene-bg");
  bg.style.background = `radial-gradient(ellipse at 50% 100%, ${theme.accent}15 0%, ${theme.bg} 60%)`;
  // Spawn category particles briefly
  spawnCatParticles(theme.particles);
}

function spawnCatParticles(emojis) {
  const bg = document.getElementById("bg-particles");
  // Clear old
  bg.innerHTML = "";
  for (let i = 0; i < 8; i++) {
    const p = document.createElement("div");
    p.className = "bg-p";
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    const dur = 4 + Math.random() * 4;
    p.style.cssText = `left:${Math.random()*100}%;font-size:${0.8+Math.random()*1}rem;animation-duration:${dur}s;animation-delay:${Math.random()*2}s`;
    bg.appendChild(p);
  }
}

// ── OPTION RENDERERS ─────────────────────────────

function renderGrid(q, container, layout) {
  const grid = document.createElement("div");
  grid.className = "opts-grid" + (layout === "2col" ? " two-col" : layout === "visual" ? " visual" : "");

  q.opts.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "opt-btn" + (layout === "visual" ? " visual-card" : layout === "2col" ? " two-col-btn" : "");
    btn.onclick = () => selectOpt(i, btn, q);

    const iconEl = document.createElement("span");
    iconEl.className = "opt-icon" + (layout === "visual" ? " big" : "");
    iconEl.textContent = opt.icon;

    const textWrap = document.createElement("div");
    const labelEl = document.createElement("div");
    labelEl.className = "opt-label";
    labelEl.textContent = opt.label;
    textWrap.appendChild(labelEl);

    if (opt.desc) {
      const descEl = document.createElement("div");
      descEl.className = "opt-desc";
      descEl.textContent = opt.desc;
      textWrap.appendChild(descEl);
    }

    btn.appendChild(iconEl);
    btn.appendChild(textWrap);
    grid.appendChild(btn);
  });

  container.appendChild(grid);
}

function renderSwatch(q, container) {
  const grid = document.createElement("div");
  grid.className = "swatch-grid";

  q.opts.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "swatch-btn";
    btn.onclick = () => selectOpt(i, btn, q);

    const colors = opt.icon.split("|");
    const swatchColors = document.createElement("div");
    swatchColors.className = "swatch-colors";
    colors.forEach(c => {
      const seg = document.createElement("div");
      seg.className = "swatch-seg";
      seg.style.background = c;
      swatchColors.appendChild(seg);
    });

    const name = document.createElement("div");
    name.className = "swatch-name";
    name.textContent = opt.label;

    const desc = document.createElement("div");
    desc.className = "swatch-desc";
    desc.textContent = opt.desc || "";

    btn.appendChild(swatchColors);
    btn.appendChild(name);
    btn.appendChild(desc);
    grid.appendChild(btn);
  });

  container.appendChild(grid);
}

function renderFlip(q, container, theme) {
  const grid = document.createElement("div");
  grid.className = "flip-grid";

  q.opts.forEach((opt, i) => {
    const card = document.createElement("div");
    card.className = "flip-card";

    const inner = document.createElement("div");
    inner.className = "flip-inner";

    const front = document.createElement("div");
    front.className = "flip-front";
    front.innerHTML = `<span style="font-size:2rem">❓</span><div class="flip-front-hint">Tap to reveal</div>`;

    const back = document.createElement("div");
    back.className = "flip-back";
    back.innerHTML = `<span style="font-size:1.8rem">${opt.icon}</span><div class="flip-back-label">${opt.label}</div>${opt.desc ? `<div class="flip-back-desc">${opt.desc}</div>` : ""}`;

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    card.onclick = () => {
      if (!card.classList.contains("flipped")) {
        card.classList.add("flipped");
        setTimeout(() => selectOpt(i, card, q), 300);
      } else {
        selectOpt(i, card, q);
      }
    };

    grid.appendChild(card);
  });

  container.appendChild(grid);
}

// ── SELECT OPTION ─────────────────────────────────
function selectOpt(optIndex, el, q) {
  // Deselect previous
  const allBtns = document.querySelectorAll(".opt-btn, .swatch-btn, .flip-card");
  allBtns.forEach(b => b.classList.remove("selected"));

  el.classList.add("selected");
  selectedOpt = { optIndex, q };

  // Save for crest
  trackCrestAnswer(q, q.opts[optIndex]);

  document.getElementById("btn-next").classList.remove("hidden");
}

function trackCrestAnswer(q, opt) {
  Object.entries(CREST_CATEGORIES).forEach(([cat, info]) => {
    if (q._cat === cat && q.q.toLowerCase().includes(info.qKeyword.toLowerCase())) {
      // Store this answer for the crest
      const existing = answers.findIndex(a => a.crestCat === cat);
      const entry = { crestCat: cat, icon: opt.icon.split("|")[0], label: opt.label, catLabel: info.label, catIcon: info.icon };
      if (existing >= 0) answers[existing] = entry;
      else answers.push(entry);
    }
  });
}

// ── NEXT QUESTION ─────────────────────────────────
function nextQuestion() {
  if (selectedOpt === null) return;

  // Accumulate scores
  const opt = selectedOpt.q.opts[selectedOpt.optIndex];
  if (opt.p) {
    Object.entries(opt.p).forEach(([princess, pts]) => {
      if (scores[princess] !== undefined) scores[princess] += pts;
    });
  }

  currentQIndex++;

  if (currentQIndex >= selectedQ.length) {
    showLoading();
  } else {
    renderQuestion();
    selectedOpt = null;
  }
}

// ── LOADING / MAGIC MIRROR ────────────────────────
function showLoading() {
  document.getElementById("quiz-area").classList.add("hidden");
  document.getElementById("loading-screen").classList.remove("hidden");

  const mirrorEmojis = ["🔮","✨","🌟","💫","👑","🪄"];
  let i = 0;
  const mirrorIcon = document.getElementById("mirror-icon");
  const interval = setInterval(() => {
    mirrorIcon.textContent = mirrorEmojis[i++ % mirrorEmojis.length];
  }, 400);

  setTimeout(() => {
    clearInterval(interval);
    document.getElementById("loading-screen").classList.add("hidden");
    showResult();
  }, 3500);
}

// ── SHOW RESULT ───────────────────────────────────
function showResult() {
  const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const p = PRINCESSES[winner];

  document.getElementById("result-screen").classList.remove("hidden");

  // Per-princess card background
  const card = document.getElementById("result-card");
  card.style.background = p.cardBg;

  // Header
  document.getElementById("result-name").textContent = p.name;
  document.getElementById("result-emoji").textContent = p.emoji;
  document.getElementById("result-desc").textContent = p.desc;

  // Royal Title
  document.getElementById("royal-title").textContent = p.titles[Math.floor(Math.random() * p.titles.length)];

  // Traits grid
  const traitsGrid = document.getElementById("traits-grid");
  traitsGrid.innerHTML = "";
  Object.entries(p.traits).forEach(([trait, val]) => {
    const pill = document.createElement("div");
    pill.className = "trait-pill";
    pill.innerHTML = `<div class="trait-label">${trait}</div><div>${val}</div>`;
    traitsGrid.appendChild(pill);
  });

  // Royal Story
  document.getElementById("story-text").textContent = p.stories[Math.floor(Math.random() * p.stories.length)];

  // Royal Crest (assembled from her answers)
  buildCrest(winner);

  // SVG Constellation (spider chart)
  buildConstellation(winner);

  // Top match bars
  buildMatchBars(winner);

  // Style picks
  buildPicks();

  // Particles + confetti
  launchResultParticles(p);
  launchConfetti(p.color);

  // Wire share button
  const shareBtn = document.getElementById("btn-share");
  if (shareBtn) {
    shareBtn.onclick = () => openShareCard(winner);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ── RESET ─────────────────────────────────────────
function resetQuiz() {
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("result-particles").innerHTML = "";
  document.getElementById("bg-particles").innerHTML = "";
  document.getElementById("scene-bg").style.background = "";

  // Remove all confetti
  document.querySelectorAll(".confetti-piece").forEach(el => el.remove());

  startQuiz();
}

// ── STARS + SPARKLES ─────────────────────────────
window.addEventListener("DOMContentLoaded", () => {
  // Explicitly enforce correct screen visibility on load
  document.getElementById("title-screen").classList.remove("hidden");
  document.getElementById("quiz-area").classList.add("hidden");
  document.getElementById("loading-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("btn-next").classList.add("hidden");

  initStars();
  initSparkles();
});
