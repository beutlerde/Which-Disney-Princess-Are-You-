/* ═══════════════════════════════════════════════
   QUESTIONS — Loader
   Assembles all 10 category arrays into ALL_QUESTIONS
   Must be loaded AFTER all questions-*.js files
   ═══════════════════════════════════════════════ */

const ALL_QUESTIONS = {
  personality: Q_PERSONALITY,
  style:       Q_STYLE,
  kingdom:     Q_KINGDOM,
  romance:     Q_ROMANCE,
  animals:     Q_ANIMALS,
  values:      Q_VALUES,
  food:        Q_FOOD,
  magic:       Q_MAGIC,
  friendship:  Q_FRIENDSHIP,
  fun:         Q_FUN
};

const totalQ = Object.values(ALL_QUESTIONS).reduce((s, a) => s + a.length, 0);
console.log(`✨ ${totalQ} questions loaded across ${Object.keys(ALL_QUESTIONS).length} categories`);
