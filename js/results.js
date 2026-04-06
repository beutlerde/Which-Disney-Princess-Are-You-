/* ═══════════════════════════════════════════════
   DISNEY PRINCESS QUIZ — results.js
   Full Royal Profile: SVG constellation, crest,
   picks, particles, confetti, share card
   ═══════════════════════════════════════════════ */

// ── INJECT ALL RESULT STYLES ─────────────────────
document.addEventListener("DOMContentLoaded", function injectResultStyles() {
  const style = document.createElement("style");
  style.textContent = `
    /* Constellation */
    .constellation-section {
      margin-top:22px;
      background:rgba(5,2,20,0.75);
      border:1px solid rgba(192,132,252,0.25);
      border-radius:20px;padding:18px 10px 14px;
      text-align:center;
    }
    .constellation-title {
      font-family:'Cinzel Decorative',cursive;
      font-size:.8rem;color:#c084fc;
      letter-spacing:1px;margin-bottom:12px;
    }
    .constellation-subtitle {
      font-size:.72rem;color:rgba(255,248,240,.45);
      font-style:italic;margin-top:6px;
    }

    /* Crest */
    .crest-section {
      margin-top:22px;
      background:rgba(245,200,66,0.06);
      border:1px solid rgba(245,200,66,0.25);
      border-radius:18px;padding:18px;
    }
    .crest-title {
      font-family:'Cinzel Decorative',cursive;
      font-size:.8rem;color:var(--gold);
      letter-spacing:1px;margin-bottom:14px;text-align:center;
    }
    .crest-grid {
      display:grid;grid-template-columns:repeat(5,1fr);gap:8px;
    }
    .crest-item {
      background:rgba(255,255,255,0.05);
      border:1px solid rgba(245,200,66,0.2);
      border-radius:12px;padding:10px 6px;
      text-align:center;
      transition:transform .2s,box-shadow .2s;
    }
    .crest-item:hover {
      transform:scale(1.06);
      box-shadow:0 4px 15px rgba(245,200,66,0.2);
    }
    .crest-cat-icon    {font-size:1rem;margin-bottom:3px;}
    .crest-choice-icon {font-size:1.6rem;margin:4px 0;}
    .crest-cat-label   {font-family:'Cinzel Decorative',cursive;font-size:.55rem;color:var(--gold);text-transform:uppercase;letter-spacing:.5px;}
    .crest-choice-label{font-size:.65rem;color:rgba(255,248,240,.75);margin-top:3px;line-height:1.2;}

    /* Share */
    .share-section {text-align:center;margin-top:22px;}
    .btn-share {
      display:inline-flex;align-items:center;gap:8px;
      background:linear-gradient(135deg,#1a0a2e,#2d1b4e);
      border:1.5px solid rgba(245,200,66,0.5);
      color:var(--gold-light);
      font-family:'Cinzel Decorative',cursive;
      font-size:.82rem;padding:12px 28px;
      border-radius:50px;cursor:pointer;
      transition:all .3s;letter-spacing:.5px;
    }
    .btn-share:hover {
      background:linear-gradient(135deg,#2d1b4e,#3d2b5e);
      border-color:var(--gold);transform:scale(1.04);
      box-shadow:0 6px 20px rgba(245,200,66,.3);
    }
    .share-hint {font-size:.7rem;color:rgba(255,248,240,.4);margin-top:7px;font-style:italic;}

    /* Share overlay */
    .share-overlay {
      position:fixed;inset:0;background:rgba(0,0,0,0.85);
      z-index:1000;display:flex;align-items:center;
      justify-content:center;padding:20px;
      animation:fadeUp .3s ease-out;
    }
    .share-modal {
      background:linear-gradient(145deg,#1a0a2e,#0d0520);
      border:1px solid rgba(245,200,66,0.4);
      border-radius:24px;padding:28px 22px;
      max-width:400px;width:100%;
      text-align:center;position:relative;
    }
    .share-modal-close {
      position:absolute;top:14px;right:18px;
      background:none;border:none;
      color:rgba(255,248,240,.5);font-size:1.3rem;
      cursor:pointer;transition:color .2s;
    }
    .share-modal-close:hover{color:#fff;}
    .share-card-inner {
      border-radius:16px;padding:22px 16px;margin:16px 0;
      position:relative;overflow:hidden;
      border:1px solid rgba(245,200,66,0.3);
    }
    .share-card-inner::before {
      content:'';position:absolute;top:0;left:0;right:0;height:3px;
      background:linear-gradient(90deg,var(--gold),var(--rose),var(--lav),var(--mint));
    }
    .share-princess-name {
      font-family:'Cinzel Decorative',cursive;font-size:1.4rem;margin-bottom:4px;
      background:linear-gradient(135deg,var(--gold),var(--rose),var(--lav));
      -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
    }
    .share-royal-title {
      font-family:'Dancing Script',cursive;font-size:1rem;
      color:var(--gold-light);margin:4px 0 12px;
    }
    .share-traits-row {
      display:flex;flex-wrap:wrap;gap:5px;justify-content:center;margin:10px 0;
    }
    .share-trait-tag {
      background:rgba(245,200,66,.12);
      border:1px solid rgba(245,200,66,.3);
      border-radius:20px;padding:3px 10px;
      font-size:.72rem;color:var(--gold-light);
    }
    .share-story-snippet {
      font-size:.76rem;color:rgba(255,248,240,.7);
      line-height:1.5;margin-top:10px;font-style:italic;
    }
    .share-watermark {
      font-size:.63rem;color:rgba(255,248,240,.25);
      margin-top:14px;letter-spacing:.5px;
    }
    .btn-download {
      background:linear-gradient(135deg,var(--gold),#e8a030);
      color:var(--deep);font-family:'Cinzel Decorative',cursive;
      font-size:.85rem;padding:12px 30px;
      border:none;border-radius:50px;cursor:pointer;
      margin-top:8px;transition:all .25s;
      box-shadow:0 6px 20px rgba(245,200,66,.4);
    }
    .btn-download:hover{transform:scale(1.04);box-shadow:0 8px 28px rgba(245,200,66,.6);}
    .download-hint {
      font-size:.68rem;color:rgba(255,248,240,.35);
      margin-top:8px;line-height:1.5;
    }

    @media(max-width:520px){
      .crest-grid{grid-template-columns:repeat(3,1fr);}
    }
  `;
  document.head.appendChild(style);
});


// ── SVG CONSTELLATION (radar / spider chart) ──────
function buildConstellation(winner) {
  // Replace the match-section content with constellation + bars below
  const matchSection = document.getElementById("match-section-inner");
  if (!matchSection) return;
  matchSection.innerHTML = "";

  const princesses = Object.keys(PRINCESSES);
  const N = princesses.length; // 12
  const maxScore = Math.max(...Object.values(scores), 1);

  const W = 320, H = 320, cx = 160, cy = 160, maxR = 112;
  const ns = "http://www.w3.org/2000/svg";

  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.setAttribute("style", "max-width:100%;display:block;margin:0 auto;");

  const ang  = i => (i / N) * Math.PI * 2 - Math.PI / 2;
  const ptX  = (i, r) => cx + r * Math.cos(ang(i));
  const ptY  = (i, r) => cy + r * Math.sin(ang(i));

  // Background rings
  [0.25, 0.5, 0.75, 1].forEach(f => {
    const poly = document.createElementNS(ns, "polygon");
    poly.setAttribute("points", princesses.map((_, i) => `${ptX(i, maxR*f)},${ptY(i, maxR*f)}`).join(" "));
    poly.setAttribute("fill", "none");
    poly.setAttribute("stroke", "rgba(255,255,255,0.06)");
    poly.setAttribute("stroke-width", "1");
    svg.appendChild(poly);
  });

  // Spoke lines
  princesses.forEach((_, i) => {
    const line = document.createElementNS(ns, "line");
    line.setAttribute("x1", cx); line.setAttribute("y1", cy);
    line.setAttribute("x2", ptX(i, maxR)); line.setAttribute("y2", ptY(i, maxR));
    line.setAttribute("stroke", "rgba(255,255,255,0.05)");
    line.setAttribute("stroke-width", "1");
    svg.appendChild(line);
  });

  // Score shape
  const winnerColor = PRINCESSES[winner]?.color || "#f5c842";
  const scorePts = princesses.map((k, i) => `${ptX(i, maxR * (scores[k]||0) / maxScore)},${ptY(i, maxR * (scores[k]||0) / maxScore)}`).join(" ");
  const zeropts  = princesses.map(() => `${cx},${cy}`).join(" ");

  const shapeFill = document.createElementNS(ns, "polygon");
  shapeFill.setAttribute("points", zeropts);
  shapeFill.setAttribute("fill", winnerColor + "1a");
  shapeFill.setAttribute("stroke", winnerColor + "77");
  shapeFill.setAttribute("stroke-width", "1.5");
  const anim = document.createElementNS(ns, "animate");
  anim.setAttribute("attributeName", "points");
  anim.setAttribute("from", zeropts); anim.setAttribute("to", scorePts);
  anim.setAttribute("dur", "1.5s"); anim.setAttribute("calcMode", "spline");
  anim.setAttribute("keySplines", "0.4 0 0.2 1"); anim.setAttribute("fill", "freeze");
  shapeFill.appendChild(anim);
  svg.appendChild(shapeFill);

  // Per-princess nodes + lines
  princesses.forEach((key, i) => {
    const p   = PRINCESSES[key];
    const sc  = scores[key] || 0;
    const r   = maxR * sc / maxScore;
    const nx  = ptX(i, r), ny = ptY(i, r);
    const isW = key === winner;

    if (r > 2) {
      const spoke = document.createElementNS(ns, "line");
      spoke.setAttribute("x1", cx); spoke.setAttribute("y1", cy);
      spoke.setAttribute("x2", nx); spoke.setAttribute("y2", ny);
      spoke.setAttribute("stroke", p.color + (isW ? "55" : "22"));
      spoke.setAttribute("stroke-width", isW ? "1.5" : "0.7");
      svg.appendChild(spoke);
    }

    // Winner glow ring
    if (isW) {
      const glow = document.createElementNS(ns, "circle");
      glow.setAttribute("cx", nx); glow.setAttribute("cy", ny);
      glow.setAttribute("r", "15");
      glow.setAttribute("fill", p.color + "18"); glow.setAttribute("stroke", "none");
      svg.appendChild(glow);
    }

    // Node
    const dot = document.createElementNS(ns, "circle");
    dot.setAttribute("cx", nx); dot.setAttribute("cy", ny);
    dot.setAttribute("r", isW ? "8" : (r > 5 ? "4.5" : "2.5"));
    dot.setAttribute("fill", r > 2 ? p.color : "rgba(255,255,255,0.1)");
    dot.setAttribute("stroke", isW ? "#fff" : "none");
    dot.setAttribute("stroke-width", "1.5");
    if (isW) {
      const pulse = document.createElementNS(ns, "animate");
      pulse.setAttribute("attributeName", "r"); pulse.setAttribute("values", "8;12;8");
      pulse.setAttribute("dur", "2s"); pulse.setAttribute("repeatCount", "indefinite");
      dot.appendChild(pulse);
    }
    svg.appendChild(dot);

    // Emoji label (outer ring)
    const lx = ptX(i, maxR + 20), ly = ptY(i, maxR + 20);
    const emojiText = document.createElementNS(ns, "text");
    emojiText.setAttribute("x", lx); emojiText.setAttribute("y", ly + 5);
    emojiText.setAttribute("text-anchor", "middle");
    emojiText.setAttribute("font-size", isW ? "15" : "11");
    emojiText.setAttribute("opacity", r > 3 ? "1" : "0.3");
    emojiText.textContent = p.emoji;
    svg.appendChild(emojiText);
  });

  // Center crown
  const crownText = document.createElementNS(ns, "text");
  crownText.setAttribute("x", cx); crownText.setAttribute("y", cy + 7);
  crownText.setAttribute("text-anchor", "middle"); crownText.setAttribute("font-size", "20");
  crownText.textContent = "👑";
  svg.appendChild(crownText);

  matchSection.appendChild(svg);

  // Subtitle
  const sub = document.createElement("div");
  sub.className = "constellation-subtitle";
  sub.textContent = "Each star = a princess. Your winner shines brightest ✨";
  matchSection.appendChild(sub);
}


// ── MATCH BARS (top 6, below constellation) ──────
function buildMatchBars(winner) {
  const barsEl = document.getElementById("match-bars");
  barsEl.innerHTML = "";
  const maxScore = Math.max(...Object.values(scores), 1);
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]).slice(0, 6);

  sorted.forEach(([key, score], idx) => {
    const p = PRINCESSES[key];
    if (!p) return;
    const pct = Math.round((score / maxScore) * 100);
    const row = document.createElement("div");
    row.className = "bar-row";

    const label = document.createElement("div");
    label.className = "bar-label";
    label.textContent = `${p.emoji} ${p.name}`;

    const track = document.createElement("div");
    track.className = "bar-track";

    const fill = document.createElement("div");
    fill.className = "bar-fill";
    fill.style.cssText = `
      background: linear-gradient(90deg, ${p.color}${key===winner?"":"66"}, ${p.color}${key===winner?"cc":"33"});
      width:0%;
      transition:width 1.4s cubic-bezier(0.4,0,0.2,1);
      box-shadow:${key===winner?`0 0 8px ${p.color}88`:"none"};
    `;

    const pctEl = document.createElement("div");
    pctEl.className = "bar-pct";
    pctEl.textContent = pct + "%";

    track.appendChild(fill);
    row.appendChild(label);
    row.appendChild(track);
    row.appendChild(pctEl);
    barsEl.appendChild(row);

    setTimeout(() => { fill.style.width = pct + "%"; }, 200 + idx * 100);
  });
}


// ── ROYAL CREST ───────────────────────────────────
function buildCrest(winner) {
  const crestEl = document.getElementById("crest-grid");
  crestEl.innerHTML = "";
  const p = PRINCESSES[winner];

  const CREST_MAP = [
    { cat:"style",    catIcon:"🎨", catLabel:"Royal Color" },
    { cat:"animals",  catIcon:"🐾", catLabel:"Royal Companion" },
    { cat:"kingdom",  catIcon:"🏰", catLabel:"Royal Home" },
    { cat:"magic",    catIcon:"✨", catLabel:"Royal Power" },
    { cat:"romance",  catIcon:"💕", catLabel:"Royal Heart" },
  ];
  const DEFAULTS = [
    { icon:"✨", label:"Enchanted" },
    { icon: p.particle, label:"Magical" },
    { icon:"🏰", label:"Beautiful" },
    { icon:"💫", label:"Radiant" },
    { icon:"🌸", label:"Romantic" },
  ];

  CREST_MAP.forEach(({ cat, catIcon, catLabel }, idx) => {
    const tracked = answers.find(a => a.crestCat === cat);
    const icon  = tracked ? tracked.icon  : DEFAULTS[idx].icon;
    const label = tracked ? tracked.label : DEFAULTS[idx].label;

    const cell = document.createElement("div");
    cell.className = "crest-item";
    cell.innerHTML = `
      <div class="crest-cat-icon">${catIcon}</div>
      <div class="crest-choice-icon">${icon}</div>
      <div class="crest-cat-label">${catLabel}</div>
      <div class="crest-choice-label">${label.substring(0, 18)}</div>
    `;
    crestEl.appendChild(cell);
  });
}


// ── STYLE PICKS ───────────────────────────────────
function buildPicks() {
  const picksEl = document.getElementById("picks-grid");
  picksEl.innerHTML = "";

  const PICK_CATS = { style:"Style", kingdom:"Kingdom", animals:"Companion", romance:"Romance", food:"Flavor", personality:"Spirit" };
  const picks = [];

  Object.entries(PICK_CATS).forEach(([cat, label]) => {
    const tracked = answers.find(a => a.crestCat === cat);
    if (tracked) { picks.push({ icon: tracked.icon, label: tracked.label, cat: label }); return; }
    const catQs = selectedQ.filter(q => q._cat === cat);
    if (!catQs.length) return;
    const rq = catQs[Math.floor(Math.random() * catQs.length)];
    const ro = rq.opts[Math.floor(Math.random() * Math.min(3, rq.opts.length))];
    picks.push({ icon: ro.icon.split("|")[0], label: ro.label, cat: label });
  });

  picks.slice(0, 6).forEach(pick => {
    const item = document.createElement("div");
    item.className = "pick-item";
    item.innerHTML = `
      <span class="pick-icon">${pick.icon}</span>
      <div class="pick-cat">${pick.cat}</div>
      <div style="font-size:.68rem;margin-top:2px;opacity:.75;line-height:1.2">${pick.label.substring(0,20)}</div>
    `;
    picksEl.appendChild(item);
  });
}


// ── SHARE CARD ────────────────────────────────────
function openShareCard(winner) {
  const p     = PRINCESSES[winner];
  const title = document.getElementById("royal-title").textContent;
  const traits = Object.entries(p.traits).slice(0, 4).map(([k]) => k);

  const overlay = document.createElement("div");
  overlay.className = "share-overlay";
  overlay.id = "share-overlay";
  overlay.onclick = e => { if (e.target === overlay) overlay.remove(); };

  overlay.innerHTML = `
    <div class="share-modal">
      <button class="share-modal-close" onclick="document.getElementById('share-overlay').remove()">✕</button>
      <div style="font-family:'Cinzel Decorative',cursive;font-size:.88rem;color:var(--gold-light);margin-bottom:14px">
        ✨ Your Royal Profile Card ✨
      </div>
      <div class="share-card-inner" id="share-card-inner" style="background:${p.cardBg}">
        <div style="font-size:2.8rem;margin-bottom:10px">${p.emoji}</div>
        <div class="share-princess-name">${p.name}</div>
        <div class="share-royal-title">${title}</div>
        <div class="share-traits-row">
          ${traits.map(t => `<span class="share-trait-tag">${t}</span>`).join("")}
        </div>
        <div class="share-story-snippet">
          "${p.stories[Math.floor(Math.random() * p.stories.length)].substring(0, 110)}..."
        </div>
        <div class="share-watermark">✨ Which Disney Princess Are You? ✨</div>
      </div>
      <button class="btn-download" onclick="screenshotHint()">📸 Save My Royal Profile</button>
      <div class="download-hint" id="dl-hint">
        Tap to get screenshot tips! Share your result with friends 👑
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}

function screenshotHint() {
  const hint = document.getElementById("dl-hint");
  if (hint) {
    hint.innerHTML = `
      📱 <strong>Mobile:</strong> Take a screenshot normally (side button + volume)<br>
      💻 <strong>Desktop:</strong> Press <kbd>PrtSc</kbd> or use Snipping Tool<br>
      🍎 <strong>Mac:</strong> ⌘+Shift+4 to capture a selection
    `;
    hint.style.color = "rgba(255,248,240,0.65)";
    hint.style.lineHeight = "1.8";
  }
}


// ── RESULT PARTICLES ──────────────────────────────
function launchResultParticles(princess) {
  const container = document.getElementById("result-particles");
  container.innerHTML = "";

  if (!document.getElementById("particle-style")) {
    const s = document.createElement("style");
    s.id = "particle-style";
    s.textContent = `@keyframes particleFloat {
      0%   {opacity:0;transform:translateY(30px) rotate(0deg) scale(0.4);}
      10%  {opacity:.85;}
      90%  {opacity:.4;}
      100% {opacity:0;transform:translateY(-140px) rotate(360deg) scale(1.1);}
    }`;
    document.head.appendChild(s);
  }

  for (let i = 0; i < 30; i++) {
    const p = document.createElement("div");
    p.textContent = princess.particle;
    const size = 0.7 + Math.random() * 1.3;
    p.style.cssText = `
      position:absolute;left:${Math.random()*100}%;top:${Math.random()*100}%;
      font-size:${size}rem;opacity:0;pointer-events:none;
      animation:particleFloat ${5+Math.random()*9}s ${Math.random()*8}s infinite linear;
    `;
    container.appendChild(p);
  }
}


// ── CONFETTI ──────────────────────────────────────
function launchConfetti(primaryColor) {
  const colors = [primaryColor,"#f5c842","#ff6fa8","#c084fc","#67e8f9","#6ee7b7","#fff"];
  const shapes = ["🌟","✨","💫","⭐","🎉","💕","🎊"];

  for (let i = 0; i < 70; i++) {
    setTimeout(() => {
      const el = document.createElement("div");
      if (Math.random() > 0.45) {
        el.textContent = shapes[Math.floor(Math.random() * shapes.length)];
        el.style.cssText = `font-size:${.7+Math.random()*.9}rem;background:transparent;width:auto;height:auto;`;
      } else {
        const sz = 5 + Math.random() * 7;
        el.style.cssText = `background:${colors[Math.floor(Math.random()*colors.length)]};width:${sz}px;height:${sz}px;border-radius:${Math.random()>.5?"50%":"2px"};`;
      }
      el.className = "confetti-piece";
      el.style.left = Math.random() * 100 + "vw";
      el.style.top = "-20px";
      el.style.position = "fixed";
      el.style.zIndex = "999";
      el.style.animation = `confettiFall ${2.5+Math.random()*2}s linear forwards`;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 5500);
    }, i * 35);
  }
}
