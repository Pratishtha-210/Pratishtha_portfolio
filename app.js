/* ═══════════════════════════════════════════════════════════════
   WINDOWS 95 PORTFOLIO — PRATISHTHA SHARMA
   app.js
═══════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────────
   PENGUIN WALLPAPER (base64 embedded)
───────────────────────────────────────────────────────────── */
const PENGUIN_B64 = "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";

/* ─────────────────────────────────────────────────────────────
   AUDIO ENGINE
───────────────────────────────────────────────────────────── */
let AC;
function getAC() {
  if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)();
  if (AC.state === 'suspended') AC.resume();
  return AC;
}

function tone(freq, dur, type = 'square', vol = 0.18) {
  try {
    const ac = getAC();
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(vol, ac.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
    o.connect(g); g.connect(ac.destination);
    o.start(); o.stop(ac.currentTime + dur);
  } catch (e) {}
}

const sfx = {
  startup()  { [523,659,784,1047,880].forEach((f,i)=>setTimeout(()=>tone(f,.4,'sine',.15),i*250)); },
  click()    { tone(1200,.05,'square',.1); },
  winOpen()  { tone(880,.08,'sine',.12); setTimeout(()=>tone(1100,.1,'sine',.1),70); },
  winClose() { tone(1100,.07,'sine',.12); setTimeout(()=>tone(660,.12,'sine',.08),60); },
  error()    { tone(240,.3,'sawtooth',.25); setTimeout(()=>tone(200,.4,'sawtooth',.25),280); },
  shutdown() { [1047,880,784,659,523].forEach((f,i)=>setTimeout(()=>tone(f,.4,'sine',.15),i*240)); },
  ding()     { tone(1319,.15,'sine',.2); setTimeout(()=>tone(1047,.3,'sine',.15),120); },
};

document.addEventListener('click', () => getAC(), { once: true });

/* ─────────────────────────────────────────────────────────────
   BOOT SEQUENCE
───────────────────────────────────────────────────────────── */
(function boot() {
  const msgs = [
    'Starting Windows 95…',
    'Loading device drivers…',
    'Initialising file system…',
    'Preparing desktop…',
    'Welcome to Pratishtha\'s Portfolio!'
  ];
  const bar = document.getElementById('boot-bar');
  const msg = document.getElementById('boot-msg');
  let i = 0;
  const step = () => {
    if (i < msgs.length) {
      msg.textContent = msgs[i];
      bar.style.width = ((i + 1) / msgs.length * 100) + '%';
      i++;
      setTimeout(step, 700);
    } else {
      setTimeout(() => {
        document.getElementById('boot-screen').style.display = 'none';
        document.getElementById('desktop').style.display = 'block';
        setWallpaper();
        startClock();
        sfx.startup();
        setTimeout(() => openWin('about'), 1000);
      }, 400);
    }
  };
  setTimeout(step, 600);
})();

/* ─────────────────────────────────────────────────────────────
   WALLPAPER
───────────────────────────────────────────────────────────── */
function setWallpaper() {
  const el = document.getElementById('wallpaper');
  el.style.backgroundImage = "url('wallpaper.jpeg')";
  el.style.backgroundSize = 'cover';
  el.style.backgroundPosition = 'center';
  el.style.backgroundRepeat = 'no-repeat';
}

/* ─────────────────────────────────────────────────────────────
   CLOCK
───────────────────────────────────────────────────────────── */
function startClock() {
  function tick() {
    const now = new Date();
    let h = now.getHours(), m = String(now.getMinutes()).padStart(2,'0');
    const ap = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    document.getElementById('tray-clock').textContent = `${h}:${m} ${ap}`;
  }
  tick(); setInterval(tick, 30000);
}

/* ─────────────────────────────────────────────────────────────
   START MENU
───────────────────────────────────────────────────────────── */
function toggleStart() {
  sfx.click();
  const sm = document.getElementById('start-menu');
  sm.style.display = sm.style.display === 'flex' ? 'none' : 'flex';
}
function closeStart() {
  document.getElementById('start-menu').style.display = 'none';
}
document.addEventListener('click', e => {
  if (!e.target.closest('#start-menu') && !e.target.closest('#start-btn')) closeStart();
});

/* ─────────────────────────────────────────────────────────────
   WINDOW MANAGER
───────────────────────────────────────────────────────────── */
let zTop = 200;
const wins = {}; // { id: { title, icon, minimized } }

const WIN_CONFIGS = {
  about:        { title: 'About Me — Pratishtha Sharma',  icon: '👩‍💻', w: 540, h: 480, x: 80,  y: 30  },
  education:    { title: 'Education',                      icon: '🎓',   w: 520, h: 440, x: 100, y: 40  },
  experience:   { title: 'Experience',                     icon: '💼',   w: 560, h: 480, x: 120, y: 30  },
  projects:     { title: 'Projects — My Work',             icon: '📁',   w: 580, h: 520, x: 90,  y: 20  },
  skills:       { title: 'Skills & Technologies',          icon: '🛠️',   w: 540, h: 500, x: 140, y: 50  },
  achievements: { title: 'Achievements & Leadership',      icon: '🏆',   w: 520, h: 460, x: 110, y: 40  },
  contact:      { title: 'Contact — Pratishtha Sharma',    icon: '📧',   w: 460, h: 380, x: 160, y: 60  },
  snake:        { title: 'Snake Game',                     icon: '🐍',   w: 360, h: 440, x: 250, y: 50  },
  notepad:      { title: 'Resume.txt — Notepad',           icon: '📝',   w: 500, h: 440, x: 130, y: 40  },
  recyclebin:   { title: 'Recycle Bin',                    icon: '🗑️',   w: 340, h: 240, x: 200, y: 100 },
};

function openWin(id) {
  sfx.winOpen();
  const existing = document.getElementById('win-' + id);
  if (existing) {
    if (wins[id]?.minimized) { wins[id].minimized = false; existing.classList.remove('minimized'); }
    bringToFront(id); return;
  }
  const cfg = WIN_CONFIGS[id];
  if (!cfg) return;

  const el = document.createElement('div');
  el.id = 'win-' + id;
  el.className = 'w95-window w95-animate-open';
  el.style.cssText = `left:${cfg.x}px;top:${cfg.y}px;width:${cfg.w}px;height:${cfg.h}px;z-index:${++zTop};`;

  const menuItems = ['File', 'Edit', 'View', 'Help'].map(m =>
    `<div class="w95-menuitem">${m}</div>`).join('');

  const content = buildContent(id);
  const useWhite = ['notepad'].includes(id);

  el.innerHTML = `
    <div class="w95-titlebar" id="tb-${id}" onmousedown="startDrag(event,'${id}')">
      <span class="w95-title-icon">${cfg.icon}</span>
      <span class="w95-title-text">${cfg.title}</span>
      <div class="w95-tbtn" onclick="minimizeWin('${id}')" title="Minimise">_</div>
      <div class="w95-tbtn" onclick="maximiseWin('${id}')" title="Maximise">□</div>
      <div class="w95-tbtn w95-close-btn" onclick="closeWin('${id}')" title="Close">✕</div>
    </div>
    <div class="w95-menubar">${menuItems}</div>
    <div class="${useWhite ? 'w95-content-white' : 'w95-content'}" id="content-${id}">
      ${content}
    </div>
    <div class="w95-statusbar">
      <div class="w95-status-panel" style="flex:2">Ready</div>
      <div class="w95-status-panel">SRMIST B.Tech CSE</div>
    </div>`;

  document.getElementById('win-layer').appendChild(el);
  wins[id] = { title: cfg.title, icon: cfg.icon, minimized: false };
  bringToFront(id);
  updateTaskbar();
  makeDraggable(el, id);

  if (id === 'snake') initSnake();
}

function bringToFront(id) {
  const el = document.getElementById('win-' + id);
  if (!el) return;
  el.style.zIndex = ++zTop;
  document.querySelectorAll('.w95-titlebar').forEach(tb => {
    const wid = tb.id.replace('tb-', '');
    tb.className = 'w95-titlebar' + (wid === id ? '' : ' inactive');
  });
  updateTaskbar(id);
}

function closeWin(id) {
  sfx.winClose();
  const el = document.getElementById('win-' + id);
  if (el) el.remove();
  delete wins[id];
  if (id === 'snake') stopSnake();
  updateTaskbar();
}

function minimizeWin(id) {
  sfx.click();
  const el = document.getElementById('win-' + id);
  if (!el) return;
  el.classList.add('minimized');
  wins[id].minimized = true;
  updateTaskbar();
}

const maxState = {};
function maximiseWin(id) {
  sfx.click();
  const el = document.getElementById('win-' + id);
  if (!el) return;
  if (maxState[id]) {
    Object.assign(el.style, maxState[id]);
    delete maxState[id];
  } else {
    maxState[id] = { left: el.style.left, top: el.style.top, width: el.style.width, height: el.style.height };
    el.style.left = '0'; el.style.top = '0';
    el.style.width = '100vw'; el.style.height = 'calc(100vh - 30px)';
  }
}

function updateTaskbar(activeId) {
  const container = document.getElementById('taskbar-btns');
  container.innerHTML = '';
  Object.entries(wins).forEach(([id, w]) => {
    const btn = document.createElement('button');
    btn.className = 'tb-btn' + (id === activeId ? ' active' : '');
    btn.textContent = w.icon + ' ' + w.title.split('—')[0].trim();
    btn.onclick = () => {
      sfx.click();
      const el = document.getElementById('win-' + id);
      if (!el) return;
      if (w.minimized) { w.minimized = false; el.classList.remove('minimized'); bringToFront(id); }
      else if (id === activeId) { minimizeWin(id); }
      else bringToFront(id);
    };
    container.appendChild(btn);
  });
}

/* ─────────────────────────────────────────────────────────────
   DRAG
───────────────────────────────────────────────────────────── */
let drag = null, dox = 0, doy = 0;
function startDrag(e, id) {
  if (e.target.classList.contains('w95-tbtn')) return;
  drag = id; bringToFront(id);
  const el = document.getElementById('win-' + id);
  dox = e.clientX - el.offsetLeft; doy = e.clientY - el.offsetTop;
}
document.addEventListener('mousemove', e => {
  if (!drag) return;
  const el = document.getElementById('win-' + drag); if (!el) { drag = null; return; }
  el.style.left = Math.max(0, e.clientX - dox) + 'px';
  el.style.top  = Math.max(0, Math.min(e.clientY - doy, window.innerHeight - 60)) + 'px';
});
document.addEventListener('mouseup', () => { drag = null; });
function makeDraggable(el, id) {
  el.addEventListener('mousedown', () => bringToFront(id));
}

/* ─────────────────────────────────────────────────────────────
   SHUTDOWN
───────────────────────────────────────────────────────────── */
function doShutdown() {
  sfx.click();
  document.getElementById('shutdown-screen').style.display = 'flex';
  closeStart();
}
function cancelShutdown() {
  sfx.click();
  document.getElementById('shutdown-screen').style.display = 'none';
}
function confirmShutdown() {
  const opt = document.querySelector('input[name="sdopt"]:checked')?.value;
  if (opt === 'restart') { sfx.shutdown(); setTimeout(() => location.reload(), 1600); return; }
  sfx.shutdown();
  document.getElementById('shutdown-screen').style.display = 'none';
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:#000;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#c0c0c0;font-family:Arial,sans-serif;font-size:14px;';
  overlay.innerHTML = `
    <div style="font-size:28px;margin-bottom:12px">🐧</div>
    <p>It is now safe to turn off your computer.</p>
    <p style="font-size:11px;color:#666;margin-top:8px">Thanks for visiting Pratishtha's Portfolio!</p>
    <button onclick="location.reload()" style="margin-top:20px;padding:6px 20px;background:#c0c0c0;border:2px outset #fff;cursor:pointer;font-size:12px">🔄 Restart</button>`;
  document.body.appendChild(overlay);
}

/* ─────────────────────────────────────────────────────────────
   CONTENT BUILDERS
───────────────────────────────────────────────────────────── */
function buildContent(id) {
  switch (id) {
    case 'about':        return contentAbout();
    case 'education':    return contentEducation();
    case 'experience':   return contentExperience();
    case 'projects':     return contentProjects();
    case 'skills':       return contentSkills();
    case 'achievements': return contentAchievements();
    case 'contact':      return contentContact();
    case 'notepad':      return contentNotepad();
    case 'recyclebin':   return contentRecycleBin();
    case 'snake':        return contentSnake();
    default: return '<p>Content not found.</p>';
  }
}

/* ── About ── */
function contentAbout() {
  return `
  <div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:10px">
    <img src="profile.jpg" alt="Pratishtha Sharma" style="width:64px;height:80px;object-fit:cover;border:2px inset #808080;flex-shrink:0;"/>
    <div>
      <div style="font-size:16px;font-weight:bold;color:#000080">Pratishtha Sharma</div>
      <div style="font-size:11px;color:#444;margin-top:2px">Full-Stack Developer · AI/ML Enthusiast · Research Intern</div>
      <div style="font-size:11px;color:#444">B.Tech CSE · SRMIST Ghaziabad · CGPA 9.09/10</div>
    </div>
  </div>
  <div class="w95-section">
    <div class="w95-section-title">📋 Personal Information</div>
    <div class="w95-field"><span class="w95-label">Name:</span><span class="w95-val">Pratishtha Sharma</span></div>

    <div class="w95-field"><span class="w95-label">Email:</span><span class="w95-val"><a href="mailto:p.pratishthasharma@gmail.com" style="color:#000080">p.pratishthasharma@gmail.com</a></span></div>
    <div class="w95-field"><span class="w95-label">LinkedIn:</span><span class="w95-val"><a href="https://www.linkedin.com/in/pratishtha-sharma02/" target="_blank" style="color:#000080">linkedin.com/in/pratishtha</a></span></div>
    <div class="w95-field"><span class="w95-label">Location:</span><span class="w95-val">Chennai, India (SRMIST KTR)</span></div>
  </div>
  <div class="w95-section">
    <div class="w95-section-title">💡 About Me</div>
    <p style="font-size:11px;line-height:1.7;color:#222;padding:4px">
  I'm a Computer Science undergrad at SRMIST passionate about building real-world, impactful software. 
  From winning hackathons with blockchain-powered energy platforms, I love turning ideas into shipped products. My stack spans React, Node.js, Python, FastAPI, and AI/ML tools.
  Outside of code, I lead student communities and volunteer for social initiatives. 🐧
</p>
  </div>
  <div class="w95-section">
    <div class="w95-section-title">🏅 Quick Highlights</div>
    <ul class="w95-list">
      <li>Research Intern at <strong>IIT Delhi</strong> — bioreactor monitoring platform</li>
      <li>Top 20 Finalist — <strong>Hacknovate 7.0</strong>, ABES</li>
      <li>Special Mention — <strong>SuperNova'25 Hackathon</strong>, GL Bajaj</li>
      <li>Student Convenor, Institution's Innovation Council (IIC), SRMIST</li>
      <li>CGPA <strong>9.09/10</strong> in B.Tech CSE</li>
      <li>Certified: HackerRank Java · Tutedude MERN Stack · Oracle AI</li>
    </ul>
  </div>`;
}

/* ── Education ── */
function contentEducation() {
  return `
  <div class="w95-section">
    <div class="w95-section-title">🎓 B.Tech — Computer Science and Engineering</div>
    <div class="w95-field"><span class="w95-label">Institution:</span><span class="w95-val">SRM Institute of Science & Technology, Ghaziabad</span></div>
    <div class="w95-field"><span class="w95-label">Location:</span><span class="w95-val">Ghaziabad, India</span></div>
    <div class="w95-field"><span class="w95-label">Period:</span><span class="w95-val">2023 – 2027 (Expected)</span></div>
    <div class="w95-field"><span class="w95-label">CGPA:</span><span class="w95-val" style="color:#000080;font-weight:bold">9.09 / 10.0</span></div>
    <div class="w95-field"><span class="w95-label">Coursework:</span><span class="w95-val">Data Structures & Algorithms, Object-Oriented Programming, DBMS, Computer Networks, Operating Systems, Statistical Modeling, Machine Learning</span></div>
  </div>
  <div class="w95-section">
    <div class="w95-section-title">📚 Class XII — CBSE</div>
    <div class="w95-field"><span class="w95-label">School:</span><span class="w95-val">Shri Gulab Rai Montessori Senior Sec. School</span></div>
    <div class="w95-field"><span class="w95-label">Location:</span><span class="w95-val">Bareilly, India</span></div>
    <div class="w95-field"><span class="w95-label">Year:</span><span class="w95-val">2022</span></div>
    <div class="w95-field"><span class="w95-label">Score:</span><span class="w95-val">76.2% (PCM + CS)</span></div>
  </div>
  <div class="w95-section">
    <div class="w95-section-title">📚 Class X — ICSE</div>
    <div class="w95-field"><span class="w95-label">School:</span><span class="w95-val">St. Maria Goretti Inter College</span></div>
    <div class="w95-field"><span class="w95-label">Location:</span><span class="w95-val">Bareilly, India</span></div>
    <div class="w95-field"><span class="w95-label">Year:</span><span class="w95-val">2020</span></div>
    <div class="w95-field"><span class="w95-label">Score:</span><span class="w95-val" style="color:#000080;font-weight:bold">88%</span></div>
  </div>
  <div class="w95-section">
    <div class="w95-section-title">📜 Certifications</div>
    <div style="display:flex;flex-wrap:wrap;gap:4px;padding:4px">
      <span class="w95-badge">HackerRank Java</span>
      <span class="w95-badge">Tutedude MERN Stack</span>
      <span class="w95-badge">Oracle Digital AI</span>
    </div>
  </div>`;
}

/* ── Experience ── */
function contentExperience() {
  return `
  <div class="w95-section">
    <div class="w95-section-title">🔬 Full-Stack Research Intern — IIT Delhi</div>
    <div class="w95-field"><span class="w95-label">Lab:</span><span class="w95-val">Bioprocessing & Biochemical Engineering Laboratory</span></div>
    <div class="w95-field"><span class="w95-label">Location:</span><span class="w95-val">Delhi, India</span></div>
    <div class="w95-field"><span class="w95-label">Period:</span><span class="w95-val">Dec 2025 – Jan 2026</span></div>
    <ul class="w95-list" style="margin-top:6px">
      <li>Built a real-time bioreactor monitoring platform tracking <strong>8+ biochemical parameters</strong> via live sensor integration, reducing manual lab checks by ~35%</li>
      <li>Implemented time-series statistical analysis and anomaly detection across <strong>20+ experimental reactor datasets</strong></li>
      <li>Developed <strong>RBAC-secured Recharts dashboards</strong> with automated threshold alerts for safety-critical monitoring</li>
    </ul>
    <div style="margin-top:8px;display:flex;flex-wrap:wrap;gap:3px">
      <span class="w95-chip">React.js</span><span class="w95-chip">Recharts</span><span class="w95-chip">RBAC</span>
      <span class="w95-chip">Anomaly Detection</span><span class="w95-chip">LabVIEW</span><span class="w95-chip">Time-Series</span>
    </div>
    <div style="margin-top:6px;background:#e0ffe0;border:1px solid #008000;padding:4px 8px;font-size:10px">
      📊 35% reduction in manual lab checks · 8+ live biochemical params · 20+ datasets analysed
    </div>
  </div>
  <div class="w95-section">
    <div class="w95-section-title">🌐 Web Development Intern — Squib Factory Pvt. Ltd.</div>
    <div class="w95-field"><span class="w95-label">Type:</span><span class="w95-val">Remote</span></div>
    <div class="w95-field"><span class="w95-label">Period:</span><span class="w95-val">May 2025 – Jul 2025</span></div>
    <ul class="w95-list" style="margin-top:6px">
      <li>Converted high-fidelity Canva designs into a production-ready, <strong>mobile-first React.js frontend</strong> supporting 5+ responsive breakpoints</li>
      <li>Built <strong>6+ reusable UI components</strong> and improved page load speed by ~28% through code-splitting and image optimisation</li>
    </ul>
    <div style="margin-top:8px;display:flex;flex-wrap:wrap;gap:3px">
      <span class="w95-chip">React.js</span><span class="w95-chip">Responsive Design</span>
      <span class="w95-chip">Code Splitting</span><span class="w95-chip">Mobile-First</span>
    </div>
    <div style="margin-top:6px;background:#e0f0ff;border:1px solid #000080;padding:4px 8px;font-size:10px">
      ⚡ 28% faster page load · 5+ breakpoints · 6+ reusable components
    </div>
  </div>`;
}

/* ── Projects ── */
function contentProjects() {
  const projects = [
    {
      emoji: '🤖', name: 'Saarthi AI',
      sub: 'Government Scheme Discovery Platform',
      period: 'Mar 2026',
      stack: ['Python','FastAPI','NLP','RAG','Azure OpenAI','REST APIs'],
      color: '#e0f0ff', border: '#000080',
      github: 'https://github.com/Pratishtha-210/community-access-platform',
      live: 'https://saarthiai-rag.vercel.app/',
      bullets: [
        'Created a multilingual AI-powered platform enabling users to explore 60+ government schemes through voice-based interactions across 11 languages',
        'Designed a Retrieval-Augmented Generation (RAG) pipeline integrating semantic search, intent detection, conversation history, caching, and real-time web enrichment, delivering context-aware responses in under 2 seconds',
        'Delivered a Progressive Web App (PWA) supporting offline-first functionality with Speech-to-Text (STT) and Text-to-Speech (TTS); optimized backend with multi-layer caching and GZip compression, reducing payload size by approximately 74%'
      ]
    },
    {
      emoji: '🍉', name: 'Fruit Ninja AI',
      sub: 'AI Hand Tracking Gesture Game',
      period: 'Aug 2024',
      stack: ['JavaScript','HTML5 Canvas','MediaPipe','Web Audio API','CSS3'],
      color: '#fff0f5', border: '#d81b60',
      github: 'https://github.com/Pratishtha-210/fruit-ninjaa',
      live: 'https://fruit-ninjaa-chi.vercel.app/',
      bullets: [
        'Built an interactive browser-based Fruit Ninja game featuring real-time AI hand tracking powered by Google MediaPipe Hands for touchless webcam gesture slicing',
        'Implemented hybrid input handling (webcam index-finger tracking + mouse/touch fallback) with 3 game modes (Classic, Zen, Arcade) and 4 customizable blade trail effects',
        'Engineered custom HTML5 Canvas particle physics for fruit splitting, juice splatters, combo multipliers, and zero-dependency synthesized audio via Web Audio API'
      ]
    },
    {
      emoji: '⚡', name: 'VoltVex',
      sub: 'Decentralised Solar Energy Trading DApp',
      period: 'May 2025',
      stack: ['React.js','Node.js','Blockchain','Python','ML'],
      color: '#fff8e0', border: '#cc8800',
      github: 'https://github.com/Pratishtha-210/VoltVex',
      live: 'https://voltvex.vercel.app/',
      bullets: [
        'Established a decentralized peer-to-peer energy trading platform enabling producers to list surplus solar energy and consumers to place bids using blockchain technology',
        'Crafted Producer and Consumer dashboards with role-specific workflows and an integrated Energy Hub; integrated a Python-based ML price prediction model with escrow-backed smart contract simulation, improving pricing accuracy by approximately 30%',
        'Simulated 50+ energy trading transactions with virtual metering validation, and built a responsive multi-page React.js application with secure authentication'
      ]
    },
    {
      emoji: '✍️', name: 'Ink & Echoes',
      sub: 'Social Blogging & Creative Writing Platform',
      period: 'Oct 2025',
      stack: ['MongoDB','Express.js','React.js','Node.js'],
      color: '#ffebee', border: '#b71c1c',
      github: 'https://github.com/Pratishtha-210/Ink-and-Echoes',
      live: 'https://ink-and-echoes-frontend.vercel.app/',
      bullets: [
        'Developed a full-stack blogging platform featuring JWT authentication, a rich text markdown editor, and dynamic commenting',
        'Optimized database queries with MongoDB indexing, reducing dashboard data retrieval latency by <strong>30%</strong>',
        'Designed a fully responsive retro-modern user interface with interactive search and tag-based filtering'
      ]
    },
    {
      emoji: '🧥', name: 'Harry Potter Invisibility Cloak',
      sub: 'Computer Vision Magic Cloak',
      period: 'Jul 2024',
      stack: ['Python','OpenCV','NumPy'],
      color: '#f3e5f5', border: '#4a148c',
      github: 'https://github.com/Pratishtha-210/invisibility-cloak',
      live: 'https://pratishtha-210.github.io/invisibility-cloak/',
      bullets: [
        'Created a real-time computer vision application using OpenCV to segment out a specific color (red/blue) and replace it with a captured background frame',
        'Implemented HSV color space thresholding and morphological operations (dilation/erosion) to eliminate noise and ensure clean edges',
        'Achieved smooth video blending at <strong>30 FPS</strong> with real-time camera integration'
      ]
    },
    {
      emoji: '♻️', name: 'WasteWise',
      sub: 'Gamified Recycling Platform',
      period: 'Mar 2025',
      stack: ['React.js','Node.js','Google Maps API','Razorpay','Arduino IoT'],
      color: '#e0ffe8', border: '#008000',
      github: 'https://github.com/Pratishtha-210/WasteWise',
      bullets: [
        'QR-based gamified recycling with point rewards — <strong>100+ simulated interactions</strong>, 40% engagement boost',
        'Google Maps API integration with <strong>50+ recycling centres</strong>, 25% navigation time reduction',
        'Razorpay payment with 95% successful demo transaction rate'
      ]
    }
  ];
  return projects.map(p => `
    <div class="w95-section">
      <div class="w95-section-title">${p.emoji} ${p.name} — ${p.sub}</div>
      <div class="w95-field"><span class="w95-label">Period:</span><span class="w95-val">${p.period}</span></div>
      ${p.github ? `<div class="w95-field"><span class="w95-label">GitHub:</span><span class="w95-val"><a href="${p.github}" target="_blank" style="color:#000080; cursor:pointer; position:relative; z-index:99; pointer-events:auto;">${p.github.replace('https://', '')}</a></span></div>` : ''}
      ${p.live ? `<div class="w95-field"><span class="w95-label">Live Link:</span><span class="w95-val"><a href="${p.live}" target="_blank" style="color:#000080; cursor:pointer; position:relative; z-index:99; pointer-events:auto;">${p.live.replace('https://', '')}</a></span></div>` : ''}
      <ul class="w95-list" style="margin-top:4px">
        ${p.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
      <div style="display:flex;flex-wrap:wrap;gap:3px;margin-top:6px">
        ${p.stack.map(s => `<span class="w95-chip">${s}</span>`).join('')}
      </div>
    </div>`).join('');
}

/* ── Skills ── */
function contentSkills() {
  const groups = [
    { name: 'Languages',         items: [['Java',80],['Python',88],['JavaScript',90],['HTML/CSS',92],['SQL',75]] },
    { name: 'Frameworks & Libs', items: [['React.js',90],['Node.js',85],['Express.js',85],['FastAPI',82],['Tailwind CSS',88],['Recharts',75],['Mongoose',78]] },
    { name: 'AI / ML',           items: [['NLP',78],['Sentence Transformers',74],['FAISS',72],['RAG',74],['Anomaly Detection',70]] },
    { name: 'Databases & Tools', items: [['MongoDB',85],['SQL',75],['Git',90],['REST APIs',88],['Arduino',65],['LabVIEW',60]] },
    { name: 'Concepts',          items: [['DSA',82],['OOP',85],['RBAC',75],['System Design',72],['Agile',80]] },
  ];
  return groups.map(g => `
    <div class="w95-section">
      <div class="w95-section-title">🔧 ${g.name}</div>
      ${g.items.map(([name, pct]) => `
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:5px;font-size:11px">
          <span style="min-width:120px;color:#000">${name}</span>
          <div class="w95-progress-wrap" style="flex:1">
            <div class="w95-progress" style="width:${pct}%"></div>
          </div>
          <span style="min-width:28px;text-align:right;color:#000080">${pct}%</span>
        </div>`).join('')}
    </div>`).join('');
}

/* ── Achievements ── */
function contentAchievements() {
  return `
  <div class="w95-section">
    <div class="w95-section-title">🏆 Achievements</div>
    <table class="w95-table">
      <tr><th>Award</th><th>Details</th></tr>
      <tr><td>🥇 Top 20 Finalist</td><td>Hacknovate 7.0, ABES</td></tr>
      <tr><td>🥇 Special Mention</td><td>SuperNova'25, G.L. Bajaj</td></tr>
      <tr><td>📜 Recognition</td><td>Street Play, IIT-BHU KashiYatra'24</td></tr>
      <tr><td>🥈 Debate Runner-Up</td><td>Bareilly</td></tr>
      <tr><td>🏅 Treasure Hunt Winner</td><td>SRMIST Delhi-NCR Campus</td></tr>
    </table>
  </div>
  <div class="w95-section">
    <div class="w95-section-title">👩‍💼 Leadership</div>
    <ul class="w95-list">
      <li><strong>Student Convenor</strong> — Institution's Innovation Council (IIC), SRMIST</li>
      <li><strong>Core Team Member</strong> — Aarzoo Club, SRMIST</li>
      <li><strong>Volunteer</strong> — Aapke Saath Foundation, Bareilly (Social Welfare)</li>
      <li><strong>Volunteer</strong> — Hackathon Hackhound 2.0, SRMIST</li>
    </ul>
  </div>
  <div class="w95-section">
    <div class="w95-section-title">📜 Certifications</div>
    <div style="display:flex;flex-wrap:wrap;gap:4px;padding:4px">
      <span class="w95-badge">HackerRank Java ✓</span>
      <span class="w95-badge">Tutedude MERN Stack ✓</span>
      <span class="w95-badge">Oracle Digital AI ✓</span>
    </div>
  </div>`;
}

/* ── Contact ── */
function contentContact() {
  return `
  <div style="background:#000080;color:#fff;padding:8px 10px;font-size:12px;font-weight:bold;margin-bottom:8px">
    📬 New Message — Compose
  </div>
  <div class="w95-section">
    <div class="w95-section-title">📋 Contact Details</div>
    <div class="w95-field"><span class="w95-label">📧 Email:</span><span class="w95-val"><a href="mailto:p.pratishthasharma@gmail.com" target="_blank" style="color:#000080; cursor:pointer; position:relative; z-index:99; pointer-events:auto;">p.pratishthasharma@gmail.com</a></span></div>

    <div class="w95-field"><span class="w95-label">💼 LinkedIn:</span><span class="w95-val"><a href="https://www.linkedin.com/in/pratishtha-sharma02/" target="_blank" style="color:#000080; cursor:pointer; position:relative; z-index:99; pointer-events:auto;">View Profile →</a></span></div>
    <div class="w95-field"><span class="w95-label">📍 Location:</span><span class="w95-val">Ghaziabad, India (SRMIST Delhi-NCR)</span></div>
  </div>
  <div class="w95-section">
    <div class="w95-section-title">✉️ Send a Message</div>
    <div style="padding:6px">
      <div style="margin-bottom:4px;font-size:11px">To: p.pratishthasharma@gmail.com</div>
      <div style="margin-bottom:4px;font-size:11px">Subject: <input type="text" placeholder="e.g. Internship Opportunity" style="width:240px;font-size:11px;border:2px inset #808080;padding:1px 4px"/></div>
      <textarea placeholder="Hi Pratishtha, I'd love to connect..." rows="4" style="width:100%;font-size:11px;font-family:Arial;border:2px inset #808080;padding:4px;resize:vertical"></textarea>
      <div style="margin-top:6px">
        <button class="w95-btn" onclick="sfx.ding();alert('Message sent! 🐧')">Send</button>
      </div>
    </div>
  </div>
  <div style="text-align:center;padding:8px;background:#e0f0ff;border:1px solid #000080;font-size:11px;margin-top:4px">
    🐧 Open to internships, research roles, and collaborations!
  </div>`;
}

/* ── Notepad ── */
function contentNotepad() {
  return `<textarea class="notepad-area">PRATISHTHA SHARMA — RESUME.TXT
============================================================
Full-Stack Developer | AI/ML Enthusiast | Research Intern
+91 88548 64084 | p.pratishthasharma@gmail.com | Chennai/Bareilly, India
LinkedIn: https://www.linkedin.com/in/pratishtha-sharma02/
GitHub  : https://github.com/Pratishtha-210

EDUCATION
---------
SRM Institute of Science & Technology, Ghaziabad, India
B.Tech in Computer Science and Engineering
Expected: 2027 | CGPA: 9.09 / 10.0
Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, DBMS,
Computer Networks, Operating Systems, Statistical Modeling, Machine Learning

Shri Gulab Rai Montessori Senior Sec. School, Bareilly, India
Class XII (CBSE) – PCM+CS | Score: 76.2% | Year: 2022

St. Maria Goretti Inter College, Bareilly, India
Class X (ICSE) – Score: 88% | Year: 2020

EXPERIENCE
----------
IIT Delhi — Bioprocessing and Biochemical Engineering Laboratory
Full-Stack Research Intern | Dec 2025 – Jan 2026 | Delhi, India
• Developed a real-time bioreactor monitoring platform integrating live sensor data
  to remotely monitor 8+ biochemical parameters, reducing manual laboratory monitoring by ~35%
• Implemented automated statistical analysis, hypothesis-driven anomaly detection,
  and a threshold-based alert system for safety-critical parameter breaches, validated
  across 20+ experimental datasets
• Architected Role-Based Access Control (RBAC) with API-level authorization for Admin,
  User, and Viewer roles, improving secure multi-user access by approximately 30%
• Built responsive data visualization dashboards using React.js and Recharts with LabVIEW-validated
  sensor signals, improving research data interpretation and usability

Squib Factory Private Limited, New Delhi, India
Web Development Intern | May 2025 – Jul 2025
• Converted high-fidelity Canva UI designs into responsive, production-ready React.js
  web applications using reusable, modular frontend architecture
• Engineered reusable React.js components including responsive navigation bars, hero
  sections, feature modules, and footer components, reducing development effort by ~30%
• Improved frontend performance through code splitting, image optimization, and CSS
  cleanup, achieving ~28% faster page loading; performed responsive testing across screen sizes

PROJECTS
--------
Saarthi-AI — Government Scheme Discovery Platform
Stack: Python, FastAPI, NLP, RAG, Azure OpenAI, REST APIs
Link : https://saarthiai-rag.vercel.app/
GitHub: https://github.com/Pratishtha-210/community-access-platform
• Created a multilingual AI-powered platform enabling users to explore 60+ government schemes
  through voice-based interactions across 11 languages
• Designed a Retrieval-Augmented Generation (RAG) pipeline integrating semantic search,
  intent detection, conversation history, caching, and real-time web enrichment in <2s
• Delivered a Progressive Web App (PWA) with Speech-to-Text (STT) and Text-to-Speech (TTS),
  reducing backend payload size by ~74% with multi-layer caching and GZip compression

Fruit Ninja AI — AI Hand Tracking Gesture Game
Stack: JavaScript, HTML5 Canvas, MediaPipe, Web Audio API, CSS3
Link : https://fruit-ninjaa-chi.vercel.app/
GitHub: https://github.com/Pratishtha-210/fruit-ninjaa
• Built an interactive browser-based Fruit Ninja game featuring real-time AI hand tracking
  powered by Google MediaPipe Hands for touchless webcam gesture slicing
• Implemented hybrid input handling (webcam index-finger tracking + mouse/touch fallback) with
  3 game modes (Classic, Zen, Arcade) and 4 customizable blade trail effects
• Engineered custom HTML5 Canvas particle physics for fruit splitting, juice splatters, combo
  multipliers, and zero-dependency synthesized audio via Web Audio API

VoltVex — Decentralized Solar Energy Trading Platform
Stack: React.js, Node.js, JavaScript, Blockchain, Python
Link : https://voltvex.vercel.app/
GitHub: https://github.com/Pratishtha-210/VoltVex
• Established a decentralized peer-to-peer energy trading platform enabling producers to
  list surplus solar energy and consumers to place bids using blockchain technology
• Crafted Producer and Consumer dashboards with role-specific workflows and an integrated
  Energy Hub; integrated a Python-based ML price prediction model with escrow-backed smart
  contract simulation, improving pricing accuracy by approximately 30%
• Simulated 50+ energy trading transactions with virtual metering validation, building a
  responsive multi-page React.js application with secure authentication

Ink & Echoes — Social Blogging & Creative Writing Platform
Stack: MongoDB, Express.js, React.js, Node.js
Link : https://ink-and-echoes-frontend.vercel.app/
GitHub: https://github.com/Pratishtha-210/Ink-and-Echoes
• Developed a full-stack blogging platform featuring JWT authentication, a rich text
  markdown editor, and dynamic commenting
• Optimized database queries with MongoDB indexing, reducing dashboard data retrieval
  latency by 30%
• Designed a fully responsive retro-modern user interface with interactive search and
  tag-based filtering

Harry Potter Invisibility Cloak — Computer Vision Magic Cloak
Stack: Python, OpenCV, NumPy
Link : https://pratishtha-210.github.io/invisibility-cloak/
GitHub: https://github.com/Pratishtha-210/invisibility-cloak
• Created a real-time computer vision application using OpenCV to segment out a specific
  color (red/blue) and replace it with a captured background frame
• Implemented HSV color space thresholding and morphological operations (dilation/erosion)
  to eliminate noise and ensure clean edges
• Achieved smooth video blending at 30 FPS with real-time camera integration

WasteWise — Gamified Recycling Platform
Stack: React.js, Node.js, Google Maps API, Razorpay, Arduino IoT
GitHub: https://github.com/Pratishtha-210/WasteWise
• QR-based gamified recycling with point rewards — 100+ simulated interactions, 40%
  engagement boost
• Google Maps API integration with 50+ recycling centres, 25% navigation time reduction
• Razorpay payment with 95% successful demo transaction rate

TECHNICAL SKILLS
----------------
Languages   : Python, Java, R, JavaScript, SQL
AI/NLP      : NLP, RAG, Semantic Search, GenAI & Agent-based Systems
Frontend    : React.js, HTML5, CSS3, JSX, Tailwind CSS, Responsive Design
Backend     : Node.js, Express.js, FastAPI, RESTful APIs, RBAC
Databases   : MongoDB, SQL, Mongoose
Tools       : Git, GitHub, VS Code, Postman, Arduino, LabVIEW
Competencies: Data Structures & Algorithms, OOP, DBMS, Computer Networks, Operating Systems,
              System Design, Agile/Scrum, SDLC

ACHIEVEMENTS & LEADERSHIP
--------------------------
• Certifications: Oracle Digital AI; HackerRank Java; Tutedude MERN Stack
• Leadership: Student Convenor, IIC SRMIST | Core Team Member, Aarzoo Club SRMIST
• Hackathons: Top 20 Finalist – Hacknovate 7.0, ABES | Special Mention – SuperNova'25, GL Bajaj
• Recognition: Street Play, IIT-BHU KashiYatra'24 | Debate Runner-Up, Bareilly
• Volunteering: Aapke Saath Foundation, Bareilly | Hackhound 2.0 Hackathon, SRMIST

============================================================
Generated by Windows 95 Portfolio v1.0 🐧
</textarea>`;
}

/* ── Recycle Bin ── */
function contentRecycleBin() {
  return `
  <div style="text-align:center;padding:16px">
    <div style="font-size:48px;margin-bottom:8px">🗑️</div>
    <div style="font-size:12px;color:#444;margin-bottom:12px">Recycle Bin is empty.</div>
    <div style="font-size:11px;color:#666;font-style:italic">
      No self-doubts, no rejected code, no bugs.<br>
      Pratishtha keeps a clean workspace! 🐧
    </div>
  </div>`;
}

/* ── Snake Game ── */
function contentSnake() {
  return `
  <div id="snake-wrapper" style="padding:8px;background:#c0c0c0;text-align:center">
    <div class="snake-score">SCORE: <span id="snake-score">0</span> &nbsp; HI: <span id="snake-hi">0</span></div>
    <canvas id="snake-canvas" width="280" height="280"></canvas>
    <div class="snake-controls">
      <button class="w95-btn" id="snake-start-btn" onclick="snakeStart()">▶ Start</button>
      <button class="w95-btn" onclick="snakePause()">⏸ Pause</button>
    </div>
    <div style="font-size:10px;margin-top:4px;color:#444">Arrow keys or WASD to move</div>
  </div>`;
}

/* ─────────────────────────────────────────────────────────────
   SNAKE GAME ENGINE
───────────────────────────────────────────────────────────── */
let snakeLoop = null, snakeRunning = false, snakePaused = false;
let snake, dir, food, score, hiScore = 0;
const SZ = 14, COLS = 20, ROWS = 20;

function initSnake() {
  const canvas = document.getElementById('snake-canvas');
  if (!canvas) return;
  canvas.width  = COLS * SZ;
  canvas.height = ROWS * SZ;
  drawSnakeIdle();
}

function drawSnakeIdle() {
  const canvas = document.getElementById('snake-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#000'; ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#00ff00'; ctx.font = '13px "Courier New"';
  ctx.textAlign = 'center';
  ctx.fillText('Press ▶ Start', canvas.width/2, canvas.height/2 - 10);
  ctx.fillStyle = '#008000';
  ctx.fillText('Use Arrow Keys / WASD', canvas.width/2, canvas.height/2 + 10);
}

function snakeStart() {
  stopSnake();
  snake = [{x:10,y:10},{x:9,y:10},{x:8,y:10}];
  dir   = {x:1,y:0};
  score = 0;
  placeFood();
  updateSnakeScore();
  snakeRunning = true;
  snakePaused  = false;
  snakeLoop = setInterval(snakeTick, 120);
  document.addEventListener('keydown', snakeKey);
}

function snakePause() {
  if (!snakeRunning) return;
  snakePaused = !snakePaused;
  if (!snakePaused) sfx.click();
}

function stopSnake() {
  clearInterval(snakeLoop); snakeLoop = null; snakeRunning = false;
  document.removeEventListener('keydown', snakeKey);
}

function snakeKey(e) {
  const map = { ArrowUp:{x:0,y:-1}, ArrowDown:{x:0,y:1}, ArrowLeft:{x:-1,y:0}, ArrowRight:{x:1,y:0},
                w:{x:0,y:-1}, s:{x:0,y:1}, a:{x:-1,y:0}, d:{x:1,y:0} };
  const nd = map[e.key];
  if (nd && !(nd.x === -dir.x && nd.y === -dir.y)) { dir = nd; e.preventDefault(); }
}

function placeFood() {
  do { food = {x: Math.floor(Math.random()*COLS), y: Math.floor(Math.random()*ROWS)}; }
  while (snake.some(s => s.x===food.x && s.y===food.y));
}

function snakeTick() {
  if (snakePaused) return;
  const canvas = document.getElementById('snake-canvas');
  if (!canvas) { stopSnake(); return; }

  const head = {x: snake[0].x + dir.x, y: snake[0].y + dir.y};
  // wall collision
  if (head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS ||
      snake.some(s => s.x === head.x && s.y === head.y)) {
    sfx.error();
    stopSnake();
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(0,0,0,0.6)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ff4444'; ctx.font = 'bold 15px Arial'; ctx.textAlign = 'center';
    ctx.fillText('GAME OVER', canvas.width/2, canvas.height/2 - 10);
    ctx.fillStyle = '#fff'; ctx.font = '11px Arial';
    ctx.fillText(`Score: ${score}`, canvas.width/2, canvas.height/2 + 10);
    return;
  }

  snake.unshift(head);
  if (head.x === food.x && head.y === food.y) {
    score += 10; sfx.ding();
    if (score > hiScore) hiScore = score;
    updateSnakeScore();
    placeFood();
  } else {
    snake.pop();
  }
  drawSnake(canvas);
}

function drawSnake(canvas) {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#000'; ctx.fillRect(0,0,canvas.width,canvas.height);
  // Grid dots
  ctx.fillStyle = '#0a0a0a';
  for (let x=0; x<COLS; x++) for (let y=0; y<ROWS; y++) {
    ctx.fillRect(x*SZ + SZ/2 - 0.5, y*SZ + SZ/2 - 0.5, 1, 1);
  }
  // Food
  ctx.fillStyle = '#ff4444';
  ctx.fillRect(food.x*SZ+1, food.y*SZ+1, SZ-2, SZ-2);
  // Snake
  snake.forEach((s, i) => {
    ctx.fillStyle = i === 0 ? '#00ff00' : '#008800';
    ctx.fillRect(s.x*SZ+1, s.y*SZ+1, SZ-2, SZ-2);
    if (i === 0) {
      // eyes
      ctx.fillStyle = '#000';
      const ew = 2;
      ctx.fillRect(s.x*SZ+3, s.y*SZ+3, ew, ew);
      ctx.fillRect(s.x*SZ+SZ-3-ew, s.y*SZ+3, ew, ew);
    }
  });
}

function updateSnakeScore() {
  const s = document.getElementById('snake-score');
  const h = document.getElementById('snake-hi');
  if (s) s.textContent = score;
  if (h) h.textContent = hiScore;
}

/* ─────────────────────────────────────────────────────────────
   DESKTOP ICON CLICK SELECTION
───────────────────────────────────────────────────────────── */
document.querySelectorAll('.dicon').forEach(d => {
  d.addEventListener('click', () => {
    document.querySelectorAll('.dicon').forEach(x => x.classList.remove('selected'));
    d.classList.add('selected');
    sfx.click();
  });
});
