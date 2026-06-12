'use strict';

// ══════════════════════════════════════════════════════════════
//  DADOS
// ══════════════════════════════════════════════════════════════
const MEMORIES = [
  {
    id: 'onde-tudo', date: '18/10/2024', iso: '2024-10-18', label: '18 de Outubro de 2024',
    event: 'Onde Tudo Começou',
    question: 'Em que lugar especial nasceu a nossa história? 🌹',
    answers: ['onde tudo', 'tudo começou', 'começo', 'começou', 'conhecemos', 'começamos', 'historia', 'passeio', 'onde tudo começou'],
    hint: 'Dica: foi o lugar onde tudo entre nós dois começou...',
    photo: 'onde-tudo-comecou_18-10-2024.jpeg', caption: 'O início da nossa história ♡',
  },
  {
    id: 'primeiro-encontro', date: '30/10/2024', iso: '2024-10-30', label: '30 de Outubro de 2024',
    event: 'Primeiro Encontro',
    question: 'O que de especial aconteceu neste dia? 💕',
    answers: ['encontro', 'encontramos', 'nos vimos', 'primeiro encontro', 'saímos', 'saimos', 'combinamos'],
    hint: 'Dica: foi a primeira vez que a gente saiu juntos...',
    photo: 'primeiro_encontro-30_10_2024.jpeg', caption: 'Nosso primeiro encontro ♡',
  },
  {
    id: 'cinema', date: '02/11/2024', iso: '2024-11-02', label: '2 de Novembro de 2024',
    event: 'Primeira Ida ao Cinema',
    question: 'Para onde fomos no nosso primeiro programa juntos? 🎬',
    answers: ['cinema', 'filme', 'assistimos', 'pipoca', 'sessão', 'sessao'],
    hint: 'Dica: comemos pipoca e assistimos a um filme...',
    photo: 'primeira_ida_ao_cinema-02_11_2024.jpeg', caption: 'Nossa primeira sessão juntos ♡',
  },
  {
    id: 'aula', date: '03/12/2024', iso: '2024-12-03', label: '3 de Dezembro de 2024',
    event: 'Último Dia de Aula',
    question: 'O que teve de especial neste dia? 📚',
    answers: ['aula', 'último', 'ultimo', 'escola', 'aulas', 'encerramento', 'termino', 'fim'],
    hint: 'Dica: foi o encerramento de um semestre...',
    photo: 'ultimo-dia-de-aula_03-12-2024.jpeg', caption: 'O fim de um ciclo, juntos ♡',
  },
  {
    id: 'namoro', date: '18/01/2025', iso: '2025-01-18', label: '18 de Janeiro de 2025',
    event: 'Pedido de Namoro',
    question: 'O que aconteceu neste dia que mudou tudo? 💍',
    answers: ['namoro', 'namorado', 'namorada', 'pedido', 'pediu', 'oficial', 'ficamos', 'casal'],
    hint: 'Dica: foi o dia em que nos tornamos oficiais...',
    photo: 'pedido-de-namoro_18-01-2025.jpeg', caption: 'O dia que nos tornamos um casal ♡',
  },
  {
    id: 'praia', date: '02/03/2025', iso: '2025-03-02', label: '2 de Março de 2025',
    event: 'Primeira Vez na Praia Juntos',
    question: 'Qual foi o nosso primeiro passeio na natureza? 🌊',
    answers: ['praia', 'mar', 'areia', 'litoral', 'costa'],
    hint: 'Dica: tem areia, sol e água salgada...',
    photo: 'primeira-vez-na-praia-juntos_02-03-2025.jpeg', caption: 'Nosso primeiro dia de praia juntos ♡',
  },
  {
    id: 'julina', date: '01/06/2025', iso: '2025-06-01', label: '1 de Junho de 2025',
    event: 'Primeira Festa Junina Juntos',
    question: 'Que festa especial comemoramos juntos pela primeira vez? 🎊',
    answers: ['julina', 'junina', 'são joão', 'sao joao', 'arraial', 'forró', 'forro', 'festa junina', 'festa julina'],
    hint: 'Dica: tem forró, bandeirinhas e comida típica...',
    photo: 'primeira-festa-julina-juntos_01-06-2025.jpeg', caption: 'Nossa primeira festa junina juntos ♡',
  },
  {
    id: 'namorados', date: '12/06/2025', iso: '2025-06-12', label: '12 de Junho de 2025',
    event: 'Primeiro Dia dos Namorados',
    question: 'Qual foi a data especial que comemoramos como casal pela primeira vez? 💑',
    answers: ['namorados', 'dia dos namorados', 'namorado', 'valentines', 'amor', 'casal'],
    hint: 'Dica: é uma data especial do calendário para os apaixonados...',
    photo: 'primeiro-dia-dos-namorados_12-06-2025.jpeg', caption: 'Nosso primeiro Dia dos Namorados ♡',
  },
  {
    id: 'stranger', date: '22/06/2025', iso: '2025-06-22', label: '22 de Junho de 2025',
    event: 'Exposição Stranger Things',
    question: 'Que exposição temática especial visitamos juntos? 🎭',
    answers: ['stranger', 'things', 'stranger things', 'upside down', 'hawkins', 'netflix', 'serie'],
    hint: 'Dica: é de uma série muito famosa da Netflix...',
    photo: 'exposição-stranger-things_22-06-2025.jpeg', caption: 'Uma aventura no Mundo Invertido ♡',
  },
  {
    id: 'zoo', date: '27/07/2025', iso: '2025-07-27', label: '27 de Julho de 2025',
    event: 'Primeira Vez no Zoológico Juntos',
    question: 'Onde fomos ver animais pela primeira vez juntos? 🦁',
    answers: ['zoológico', 'zoologico', 'zoo', 'animais', 'bichos'],
    hint: 'Dica: é um lugar com animais de todo o mundo...',
    photo: 'primeira-vez-no-zoologiocs-juntos_27-07-2025.jpeg', caption: 'Nossa visita ao reino animal ♡',
  },
  {
    id: '18anos', date: '24/12/2025', iso: '2025-12-24', label: '24 de Dezembro de 2025',
    event: 'Seus 18 Anos',
    question: 'O que comemoramos nesta véspera de natal? 🎂',
    answers: ['18', 'dezoito', 'aniversário', 'aniversario', 'anos', 'parabéns', 'aniversaria'],
    hint: 'Dica: foi um aniversário muito especial dela...',
    photo: 'seus-18-anos_24-12-2025.jpeg', caption: 'Os 18 anos mais especiais ♡',
  },
  {
    id: 'viagem2', date: '23/01/2026', iso: '2026-01-23', label: '23 de Janeiro de 2026',
    event: 'Segunda Viagem Juntos',
    question: 'O que fizemos juntos neste começo de ano? ✈️',
    answers: ['viagem', 'viajamos', 'viajando', 'passeio', 'trip', 'viajar'],
    hint: 'Dica: fizemos as malas e partimos juntos...',
    photo: 'segunda-viagem-juntos_23-01-2026.jpeg', caption: 'Mais uma aventura juntos ♡',
  },
  {
    id: 'cafeteria', date: '11/04/2026', iso: '2026-04-11', label: '11 de Abril de 2026',
    event: 'Na Cafeteria',
    question: 'Onde estávamos neste dia especial? ☕',
    answers: ['cafeteria', 'café', 'cafe', 'coffee', 'lanchonete'],
    hint: 'Dica: um lugar aconchegante com café e conversas...',
    photo: 'na-cafeteria_11-04-2026.jpeg', caption: 'Um momento nosso na cafeteria ♡',
  },
  {
    id: 'pixar', date: '23/04/2026', iso: '2026-04-23', label: '23 de Abril de 2026',
    event: 'Mundo Pixar',
    question: 'Que mundo mágico exploramos juntos? 🎨',
    answers: ['pixar', 'mundo pixar', 'disney', 'animação', 'animacao'],
    hint: 'Dica: é de um estúdio de animação muito famoso...',
    photo: 'mundo-pixar_23-04-2026.jpeg', caption: 'Explorando o Mundo Pixar juntos ♡',
  },
  {
    id: 'play', date: '31/05/2026', iso: '2026-05-31', label: '31 de Maio de 2026',
    event: 'No Play',
    question: 'Onde fomos nos divertir neste dia? 🎮',
    answers: ['play', 'jogar', 'jogamos', 'games', 'fliperama', 'brincar', 'arcade'],
    hint: 'Dica: um lugar para jogar e se divertir...',
    photo: 'no-play_31-05-2026.jpeg', caption: 'Um dia de diversão juntos ♡',
  },
  {
    id: 'formatura', date: 'Data Especial', iso: '2025-07-01', label: 'Nossa Formatura ✦',
    event: 'Nossa Formatura',
    question: 'O que comemoramos todos juntos? 🎓',
    answers: ['formatura', 'formou', 'formados', 'colação', 'colacao', 'beca', 'diploma', 'formamos', 'formei'],
    hint: 'Dica: jogamos o chapéu para o alto...',
    photo: 'nossa-formatura.jpeg', caption: 'Nossa formatura ♡',
  },
  {
    id: 'maracana', date: 'Data Especial', iso: '2025-09-01', label: 'Primeira Vez no Maracanã ✦',
    event: 'Primeira Vez no Maracanã',
    question: 'Que estádio icônico visitamos pela primeira vez? ⚽',
    answers: ['maracanã', 'maracana', 'futebol', 'jogo', 'estádio', 'estadio', 'flamengo', 'fluminense', 'vasco', 'botafogo'],
    hint: 'Dica: é o maior estádio do Brasil...',
    photo: 'primeira-vez-no-maracana-juntos.jpeg', caption: 'Nossa primeira vez no Maracanã ♡',
  },
];

MEMORIES.sort((a, b) => a.iso.localeCompare(b.iso));

// ══════════════════════════════════════════════════════════════
//  MENSAGENS EMOCIONAIS POR MEMÓRIA
//  Cada entrada tem 2-3 mensagens curtas (rodam no clique)
// ══════════════════════════════════════════════════════════════
const MESSAGES = {
  'onde-tudo': [
    'O universo inteiro conspirou\npara que você cruzasse o meu caminho.',
    'Havia algo diferente no ar naquele dia.\nSó percebi depois o quanto.',
    'O primeiro olhar. O primeiro sorriso.\nE algo que não tem explicação.',
  ],
  'primeiro-encontro': [
    'Lembro do nervosismo daquele dia.\nMal sabia eu que aquele momento\nmudaria tanta coisa na minha vida.',
    'O coração acelerado,\no sorriso que não conseguia esconder...',
    'Foi pequeno o dia em que nos vimos pela primeira vez.\nO mundo, porém, ficou maior.',
  ],
  'cinema': [
    'Na escuridão daquela sala,\nsó sentia o calor de estar perto de você.',
    'Nem lembro mais o filme.\nLembro de tudo o resto.',
    'Pipoca, risadas e você ao meu lado.\nO melhor programa do mundo.',
  ],
  'aula': [
    'O fim de um ciclo,\no início de algo muito maior.',
    'Naquele dia, o semestre encerrava.\nO que eu mal sabia que estava começando...',
    'Aquela foi a última aula.\nMas a melhor lição ainda estava por vir.',
  ],
  'namoro': [
    'O dia em que o mundo\nganhou um novo significado.',
    'Oficial. Nosso. Para sempre\ngravado no coração.',
    'Aquele "sim" mudou tudo.\nE eu nunca fui tão feliz.',
  ],
  'praia': [
    'O sol, o mar\ne você ao meu lado.\nPerfeito assim.',
    'A areia entre os dedos,\nmas só olhava para você.',
    'O horizonte estava longe,\nmas o que eu queria estava bem perto.',
  ],
  'julina': [
    'Bandeirinhas, forró e você.\nA festa mais bonita da minha vida.',
    'Dançamos, rimos, vivemos.\nQue noite especial.',
    'O arraial estava cheio,\nmas só te via.',
  ],
  'namorados': [
    'O primeiro Dia dos Namorados.\nNenhum outro vai superar este.',
    'Para sempre lembrarei\ndeste dia como nosso.',
    'Entre todos os casais do mundo,\neu quis ser exatamente o seu.',
  ],
  'stranger': [
    'Exploramos outros mundos juntos.\nO melhor é que voltei com você.',
    'Ficção e realidade se misturaram.\nSó sei que estava com você.',
    'O Mundo Invertido é assustador.\nMas contigo não temo nada.',
  ],
  'zoo': [
    'Cada animal era uma desculpa\npara ficar pertinho de você.',
    'O reino animal\njá viu tanta gente apaixonada?',
    'Leões, girafas e elefantes...\nnenhum tão especial quanto você.',
  ],
  '18anos': [
    'Seus 18 anos.\nO presente mais especial\nera estar ao seu lado.',
    'Dezoito velas.\nDezoito razões para te amar mais.',
    'Você cresceu tanto.\nMas ainda tem aquele sorriso que me encanta.',
  ],
  'viagem2': [
    'O mundo fica maior\nquando é você quem está do meu lado.',
    'Cada nova cidade,\numa nova memória nossa.',
    'Fizemos as malas e partimos juntos.\nO destino era sempre você.',
  ],
  'cafeteria': [
    'Café, conversa e você.\nO dia perfeito.',
    'Pequenos momentos assim\nsão os que ficam para sempre.',
    'O aroma do café,\no calor da sua companhia.',
  ],
  'pixar': [
    'Entramos em um mundo de fantasia\ne eu esqueci que era ficção.',
    'A magia estava em todo o lugar,\nmas você era a minha favorita.',
    'Infinito e além.\nCom você, acredito em tudo isso.',
  ],
  'play': [
    'Competimos, rimos, nos divertimos.\nCom você tudo é mais gostoso.',
    'Os jogos ficam depois.\nO que importa é quem está jogando.',
    'Ganhei ou perdi? Não importa.\nEu estava com você.',
  ],
  'formatura': [
    'Jogamos o chapéu para o alto\ne o coração também.',
    'Formamos. Vencemos.\nJuntos, é claro.',
    'O fim de um capítulo\ne o começo de tudo.',
  ],
  'maracana': [
    'O maior estádio do Brasil\nficou ainda maior com você.',
    'Aquele rugido da torcida\nnão foi o único coração acelerado.',
    'Uma arena de emoções.\nA maior delas era estar ao seu lado.',
  ],
};

// ══════════════════════════════════════════════════════════════
//  ESTADO
// ══════════════════════════════════════════════════════════════
const unlocked = new Set(JSON.parse(localStorage.getItem('unlocked') || '[]'));
let currentMemory  = null;
let wrongAttempts  = 0;
let skyTapped      = false;
let revealMemory   = null;   // memória atualmente sendo exibida no reveal
let visibleConsts  = [];     // constelações visíveis na tela (posições em px)
let constMsgIndex  = 0;      // rotação de mensagens por memória
let constCardTimer = null;   // timer de auto-dismiss do card
let typewriterTimer = null;  // timer do efeito de digitação

// Pulso de constelação
let pulseAnimId  = null;
let pulseConst   = null;
let pulseStart   = 0;
let lastSkyLst   = 0;        // LST da última renderização (usado no pulso)

// ══════════════════════════════════════════════════════════════
//  REFS DOM
// ══════════════════════════════════════════════════════════════
const el = id => document.getElementById(id);

const dom = {
  timeline:       el('timeline'),
  unlockedCount:  el('unlocked-count'),
  totalCount:     el('total-count'),
  quizOverlay:    el('quiz-overlay'),
  quizDateText:   el('quiz-date-text'),
  quizQuestion:   el('quiz-question'),
  quizInput:      el('quiz-input'),
  quizFeedback:   el('quiz-feedback'),
  revealOverlay:  el('reveal-overlay'),
  skyCanvas:      el('sky-canvas'),
  skyHint:        el('sky-hint'),
  revealContent:  el('reveal-content'),
  revealSkyDate:  el('reveal-sky-date'),
  revealPhotoImg: el('reveal-photo-img'),
  revealEvent:    el('reveal-event'),
  revealDate:     el('reveal-date'),
  revealCaption:  el('reveal-caption'),
  revealParticles:el('reveal-particles'),
  revealBackBtn:  el('reveal-back-btn'),
};

// ══════════════════════════════════════════════════════════════
//  INICIALIZAÇÃO
// ══════════════════════════════════════════════════════════════
function init() {
  dom.totalCount.textContent = MEMORIES.length;
  updateCounter();
  renderTimeline();
  bindEvents();
  initStarsBackground();
}

// ══════════════════════════════════════════════════════════════
//  LINHA DO TEMPO
// ══════════════════════════════════════════════════════════════
function renderTimeline() {
  dom.timeline.innerHTML = '';

  MEMORIES.forEach((mem, i) => {
    const isUnlocked = unlocked.has(mem.id);

    const li   = document.createElement('li');
    li.className = 'tl-item';
    li.style.animationDelay = `${i * 0.055}s`;

    const dot  = document.createElement('div');
    dot.className = `tl-dot tl-dot--${isUnlocked ? 'unlocked' : 'locked'}`;

    const card = document.createElement('div');
    card.className = `tl-card tl-card--${isUnlocked ? 'unlocked' : 'locked'}`;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label',
      isUnlocked ? `Ver céu: ${mem.event}` : `Data bloqueada: ${mem.label}`
    );

    if (isUnlocked) {
      card.innerHTML = `
        <div class="tl-thumb">
          <img src="${mem.photo}" alt="${mem.event}" loading="lazy" />
        </div>
        <div class="tl-info">
          <div class="tl-info-title">${mem.event}</div>
          <div class="tl-info-date">${mem.label}</div>
        </div>`;
    } else {
      card.innerHTML = `
        <span class="tl-locked-label">${mem.label}</span>
        <span class="tl-locked-icon" aria-hidden="true">🔒</span>`;
    }

    const action = () => isUnlocked ? openReveal(mem) : openQuiz(mem);
    card.addEventListener('click', action);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); action(); }
    });

    li.appendChild(dot);
    li.appendChild(card);
    dom.timeline.appendChild(li);
  });
}

function updateCounter() {
  dom.unlockedCount.textContent = unlocked.size;
}

// ══════════════════════════════════════════════════════════════
//  QUIZ
// ══════════════════════════════════════════════════════════════
function openQuiz(mem) {
  currentMemory = mem;
  wrongAttempts = 0;

  dom.quizDateText.textContent = mem.label;
  dom.quizQuestion.textContent = mem.question;
  dom.quizInput.value = '';
  setFeedback('');

  dom.quizOverlay.classList.add('show');
  setTimeout(() => dom.quizInput.focus(), 400);
}

function closeQuiz() {
  dom.quizOverlay.classList.remove('show');
  currentMemory = null;
}

function setFeedback(text, type = '') {
  dom.quizFeedback.textContent = text;
  dom.quizFeedback.className   = 'quiz-feedback' + (type ? ` quiz-feedback--${type}` : '');
}

function normalize(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\w\s]/g, '');
}

function checkAnswer() {
  if (!currentMemory) return;
  const input = normalize(dom.quizInput.value.trim());
  if (!input) return;

  if (currentMemory.answers.some(a => input.includes(normalize(a)))) {
    const mem = currentMemory; // salva referência antes de closeQuiz zerar
    closeQuiz();
    setTimeout(() => {
      unlocked.add(mem.id);
      localStorage.setItem('unlocked', JSON.stringify([...unlocked]));
      updateCounter();
      renderTimeline();
      openReveal(mem);
    }, 220);
  } else {
    wrongAttempts++;
    dom.quizInput.classList.add('shake');
    setTimeout(() => dom.quizInput.classList.remove('shake'), 450);

    if (wrongAttempts >= 2) setFeedback(currentMemory.hint, 'hint');
    else                    setFeedback('Quase... pensa um pouco mais! 🌹', 'wrong');
  }
}

// ══════════════════════════════════════════════════════════════
//  REVELAÇÃO
// ══════════════════════════════════════════════════════════════
function openReveal(mem) {
  revealMemory = mem;
  constMsgIndex = 0;
  hideConstellationCard();

  // Reseta estado da tela
  skyTapped = false;
  dom.skyHint.classList.remove('hidden-fade');
  dom.revealContent.classList.remove('show');

  // Preenche conteúdo
  const dateLabel = mem.date === 'Data Especial' ? 'uma noite especial' : mem.label;
  dom.revealSkyDate.textContent  = dateLabel;
  dom.revealPhotoImg.src         = mem.photo;
  dom.revealPhotoImg.alt         = mem.event;
  dom.revealEvent.textContent    = mem.event;
  dom.revealDate.textContent     = mem.date === 'Data Especial' ? '✦ Data Especial ✦' : `✦ ${mem.label} ✦`;
  dom.revealCaption.textContent  = mem.caption;

  dom.revealOverlay.classList.add('show');
  stopConstellationPulse();

  requestAnimationFrame(() => {
    renderSky(mem.iso);
    spawnParticles();
  });
}

function revealPhoto() {
  if (skyTapped) return;
  skyTapped = true;

  dom.skyHint.classList.add('hidden-fade');
  dom.revealContent.classList.add('show');
}

function closeReveal() {
  hideConstellationCard();
  stopConstellationPulse();
  dom.revealOverlay.classList.remove('show');
}

// Partículas flutuantes
function spawnParticles() {
  dom.revealParticles.innerHTML = '';
  const emojis = ['💕', '🌹', '✨', '🌸', '💫', '🎀', '♡'];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    p.style.left             = `${Math.random() * 100}%`;
    p.style.bottom           = '-20px';
    p.style.fontSize         = `${11 + Math.random() * 14}px`;
    p.style.animationDuration  = `${4 + Math.random() * 5}s`;
    p.style.animationDelay     = `${Math.random() * 2.5}s`;
    dom.revealParticles.appendChild(p);
  }
}

// ══════════════════════════════════════════════════════════════
//  EVENTOS
// ══════════════════════════════════════════════════════════════
function bindEvents() {
  // Quiz
  el('quiz-close-btn').addEventListener('click', closeQuiz);
  el('quiz-submit-btn').addEventListener('click', checkAnswer);
  dom.quizInput.addEventListener('keydown', e => { if (e.key === 'Enter') checkAnswer(); });
  dom.quizOverlay.addEventListener('click', e => { if (e.target === dom.quizOverlay) closeQuiz(); });

  // Clique no céu: detecta constelação ou revela foto
  dom.skyCanvas.addEventListener('click', handleSkyClick);
  dom.skyHint.addEventListener('click', handleSkyClick);

  // Fechar card ao clicar nele
  el('const-card').addEventListener('click', hideConstellationCard);

  // Botões de voltar
  el('reveal-back-btn').addEventListener('click', closeReveal);
  el('reveal-btn-back-bottom').addEventListener('click', closeReveal);

  // Reset
  el('reset-btn').addEventListener('click', () => {
    if (!confirm('Apagar todo o progresso e recomeçar do zero?')) return;
    localStorage.removeItem('unlocked');
    unlocked.clear();
    updateCounter();
    renderTimeline();
  });

  // Escape fecha modais
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (dom.revealOverlay.classList.contains('show')) closeReveal();
    else if (dom.quizOverlay.classList.contains('show')) closeQuiz();
  });
}

// ══════════════════════════════════════════════════════════════
//  MOTOR ASTRONÔMICO
//  São Paulo — lat -23.55°, lon -46.63°, 22h BRT (UTC-3)
// ══════════════════════════════════════════════════════════════
// Meia-noite BRT (00h = 03h UTC) — mais constelações visíveis do que às 22h
const SKY = { lat: -23.55, lon: -46.63, hour: 0, utcOffset: -3 };

// [ra_horas, dec_graus, magnitude, cor_hex]
const NAMED_STARS = [
  // Orion [0-6]
  [5.9195,  7.407, 0.42, '#ffb060'], [5.2432, -8.202, 0.13, '#c8e0ff'],
  [5.4188,  6.350, 1.64, '#ddeeff'], [5.6036, -1.202, 1.70, '#ddeeff'],
  [5.6791, -1.943, 1.74, '#ddeeff'], [5.5334, -0.299, 2.25, '#ddeeff'],
  [5.7954, -9.670, 2.09, '#ddeeff'],
  // Crux [7-10]
  [12.4433, -63.099, 0.77, '#c8e0ff'], [12.7953, -59.689, 1.25, '#ddeeff'],
  [12.5194, -57.113, 1.63, '#ffb080'], [12.2526, -58.749, 2.79, '#ddeeff'],
  // Escorpião [11-17]
  [16.4901, -26.432, 1.06, '#ff7040'], [16.0913, -19.805, 2.50, '#ddeeff'],
  [16.0056, -22.622, 2.32, '#ddeeff'], [17.5600, -37.104, 1.62, '#ddeeff'],
  [17.6222, -42.998, 1.87, '#ffe0b0'], [17.7081, -39.030, 2.41, '#ddeeff'],
  [16.3567, -28.216, 2.82, '#ddeeff'],
  // Cão Maior [18-22]
  [6.7526, -16.716, -1.46, '#d0ecff'], [6.9775, -28.972, 1.50, '#ddeeff'],
  [7.1398, -26.393,  1.84, '#ffe0b0'], [7.4018, -29.303, 2.45, '#ddeeff'],
  [6.3784, -17.956,  1.98, '#ddeeff'],
  // Centauro [23-26]
  [14.6597, -60.834, -0.01, '#ffe8a0'], [14.0637, -60.373, 0.60, '#c8e0ff'],
  [14.1114, -36.370,  2.06, '#ffe8a0'], [13.8254, -42.474, 3.04, '#ddeeff'],
  // Leão [27-31]
  [10.1395, 11.967, 1.36, '#ddeeff'], [11.8176, 14.572, 2.14, '#ddeeff'],
  [10.3328, 19.842, 2.01, '#ffe8a0'], [11.2352, 20.524, 2.56, '#ddeeff'],
  [10.1229, 16.763, 3.49, '#ddeeff'],
  // Virgem [32-35]
  [13.4199, -11.161, 0.98, '#c8e0ff'], [12.6941, -1.449, 2.74, '#ddeeff'],
  [12.9274,   3.397, 3.38, '#ddeeff'], [12.4633, -0.668, 3.38, '#ddeeff'],
  // Gêmeos [36-39]
  [7.7553, 28.026, 1.16, '#ffe8a0'], [7.5768, 31.888, 1.58, '#ddeeff'],
  [6.6286, 16.399, 1.93, '#ddeeff'], [7.3355, 21.982, 3.53, '#ddeeff'],
  // Extras [40-49]
  [6.3992,  -52.696, -0.72, '#ffe8a0'], [1.6286,  -57.237, 0.46, '#c8e0ff'],
  [7.6553,    5.225,  0.38, '#fff0d0'], [4.5988,   16.509, 0.87, '#ff9050'],
  [18.6157,  38.784,  0.03, '#d0f0ff'], [5.2782,   45.998, 0.08, '#ffe8a0'],
  [14.2610,  19.182, -0.05, '#ffb060'], [9.2849,  -59.275, 1.86, '#ffe0a0'],
  [22.9609, -29.622,  1.16, '#d0ecff'], [19.8464,   8.868, 0.77, '#ddeeff'],
];

// Linhas entre estrelas para formar constelações
const CONST_LINES = [
  [0,2],[2,5],[5,3],[3,4],[4,0],[1,5],[6,4],              // Orion
  [7,9],[8,10],                                            // Crux
  [12,13],[12,11],[13,11],[11,17],[17,14],[14,15],[15,16], // Escorpião
  [22,18],[18,19],[19,20],[20,21],                         // Cão Maior
  [23,24],[24,25],[25,26],[23,25],                         // Centauro
  [27,31],[31,29],[29,30],[30,28],[27,29],                 // Leão
  [32,33],[33,34],[33,35],                                 // Virgem
  [37,36],[36,38],[38,39],[37,39],                         // Gêmeos
];

// Nomes e centros aproximados das constelações [ra_horas, dec_graus, nome]
const CONST_LABELS = [
  [5.60,  2.0,  'Orion'],
  [12.45, -60.5, 'Crux'],
  [16.60, -28.0, 'Escorpião'],
  [6.90,  -22.0, 'Cão Maior'],
  [14.20, -55.0, 'Centauro'],
  [10.50,  16.0, 'Leão'],
  [13.00,  -2.0, 'Virgem'],
  [7.20,   26.0, 'Gêmeos'],
];

// Estrelas de fundo com semente fixa para consistência
const BG_STARS = (() => {
  let s = 0xdeadbeef | 0;
  const r = () => { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; return (s >>> 0) / 4294967296; };
  return Array.from({ length: 560 }, () => [r() * 24, r() * 180 - 90, r() * 0.7 + 0.15, r() * 0.35 + 0.12]);
})();

// Converte data/hora para Dia Juliano
function toJulianDay(Y, M, D, uh) {
  let y = Y, mo = M;
  if (mo <= 2) { y--; mo += 12; }
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (mo + 1)) + D + B - 1524.5 + uh / 24;
}

// Tempo Sideral de Greenwich
function gst(jd) {
  return ((280.46061837 + 360.98564736629 * (jd - 2451545)) % 360 + 360) % 360;
}

// Coordenadas horizontais (altitude/azimute)
function toAltAz(ra, dec, lst, lat) {
  const H   = (lst - ra * 15) * Math.PI / 180;
  const d   = dec * Math.PI / 180;
  const l   = lat * Math.PI / 180;
  const sa  = Math.sin(d) * Math.sin(l) + Math.cos(d) * Math.cos(l) * Math.cos(H);
  const alt = Math.asin(Math.max(-1, Math.min(1, sa)));
  const caz = (Math.sin(d) - Math.sin(alt) * Math.sin(l)) / (Math.cos(alt) * Math.cos(l));
  let az    = Math.acos(Math.max(-1, Math.min(1, caz)));
  if (Math.sin(H) > 0) az = 2 * Math.PI - az;
  return { alt: alt * 180 / Math.PI, az: az * 180 / Math.PI };
}

// Projeção estereográfica para coordenadas de tela
function project(alt, az, cx, cy, R) {
  const a = alt * Math.PI / 180;
  const r = R * Math.cos(a) / (1 + Math.sin(a));
  const z = az  * Math.PI / 180;
  return { x: cx + r * Math.sin(z), y: cy - r * Math.cos(z) };
}

function skyR(W, H) {
  // Em portrait o círculo deve caber na largura; em landscape usa a altura
  return H > W ? W * 0.46 : Math.min(W, H) * 0.84;
}

function renderSky(iso) {
  const canvas = dom.skyCanvas;
  const W = canvas.width  = window.innerWidth;
  const H = canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  const CX = W / 2, CY = H / 2;
  const R  = skyR(W, H);

  const [year, month, day] = iso.split('-').map(Number);
  // hour=0 BRT = 03h UTC do mesmo dia (meia-noite local)
  const utcHour = SKY.hour + Math.abs(SKY.utcOffset);
  const jd  = toJulianDay(year, month, day, utcHour);
  const lst = ((gst(jd) + SKY.lon) % 360 + 360) % 360;
  lastSkyLst = lst; // salva para a animação de pulso usar

  // Fundo
  ctx.fillStyle = '#030108';
  ctx.fillRect(0, 0, W, H);

  // Névoa cósmica
  [
    [0.25, 0.35, 0.40, [55,  12, 120, 0.08]],
    [0.75, 0.60, 0.34, [18,  10,  90, 0.06]],
    [0.50, 0.15, 0.26, [90,  15,  80, 0.05]],
    [0.50, 0.88, 0.28, [30,   5,  70, 0.04]],
  ].forEach(([fx, fy, fr, c]) => {
    const g = ctx.createRadialGradient(fx*W, fy*H, 0, fx*W, fy*H, fr * Math.max(W, H));
    g.addColorStop(0, `rgba(${c})`);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  });

  // Estrelas de fundo
  BG_STARS.forEach(([ra, dec, r, a]) => {
    const p = toAltAz(ra, dec, lst, SKY.lat);
    if (p.alt < 1) return;
    const { x, y } = project(p.alt, p.az, CX, CY, R);
    if (x < -8 || x > W + 8 || y < -8 || y > H + 8) return;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(190,205,255,${a})`;
    ctx.fill();
  });

  // Linhas das constelações (threshold -8° para mostrar constelações parcialmente no horizonte)
  ctx.lineWidth = 0.8;
  CONST_LINES.forEach(([i, j]) => {
    const [ra1, dec1] = NAMED_STARS[i];
    const [ra2, dec2] = NAMED_STARS[j];
    const p1 = toAltAz(ra1, dec1, lst, SKY.lat);
    const p2 = toAltAz(ra2, dec2, lst, SKY.lat);
    if (p1.alt < -8 || p2.alt < -8) return;
    const a1 = project(p1.alt, p1.az, CX, CY, R);
    const a2 = project(p2.alt, p2.az, CX, CY, R);
    ctx.beginPath();
    ctx.moveTo(a1.x, a1.y);
    ctx.lineTo(a2.x, a2.y);
    ctx.strokeStyle = 'rgba(170,140,255,0.28)';
    ctx.stroke();
  });

  // Estrelas nomeadas (threshold -8° para mostrar estrelas próximas ao horizonte)
  NAMED_STARS.forEach(([ra, dec, mag, col]) => {
    const p = toAltAz(ra, dec, lst, SKY.lat);
    if (p.alt < -8) return;
    const { x, y } = project(p.alt, p.az, CX, CY, R);
    if (x < -8 || x > W + 8 || y < -8 || y > H + 8) return;

    const r = mag < 0 ? 4.2 : mag < 1 ? 3.2 : mag < 2 ? 2.2 : mag < 3 ? 1.5 : 1.0;

    // Halo para estrelas brilhantes
    if (mag < 1.5) {
      const gv  = ctx.createRadialGradient(x, y, 0, x, y, r * 5);
      const al  = (1.5 - Math.max(mag, -1)) / 2.5 * 0.18;
      gv.addColorStop(0, `rgba(200,220,255,${al})`);
      gv.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gv;
      ctx.beginPath();
      ctx.arc(x, y, r * 5, 0, 2 * Math.PI);
      ctx.fill();
    }

    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = col;
    ctx.fill();
  });

  // Nomes das constelações (clicáveis — posições salvas em visibleConsts)
  visibleConsts = [];
  ctx.font = '11px serif';
  ctx.textAlign = 'center';
  CONST_LABELS.forEach(([ra, dec, name]) => {
    const p = toAltAz(ra, dec, lst, SKY.lat);
    if (p.alt < 4) return;
    const { x, y } = project(p.alt, p.az, CX, CY, R);
    if (x < 8 || x > W - 8 || y < 8 || y > H - 8) return;

    // Anel sutil indicando área clicável
    ctx.beginPath();
    ctx.arc(x, y - 10, 28, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(200,160,255,0.08)';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = 'rgba(200,175,255,0.42)';
    ctx.fillText(name.toUpperCase(), x, y);

    visibleConsts.push({ name, x, y: y - 10 });
  });

  // Vinheta nas bordas
  const vig = ctx.createRadialGradient(CX, CY, R * 0.5, CX, CY, R * 1.1);
  vig.addColorStop(0, 'rgba(0,0,0,0)');
  vig.addColorStop(1, 'rgba(2,0,8,0.72)');
  ctx.fillStyle = vig;
  ctx.fillRect(0, 0, W, H);
}

// ══════════════════════════════════════════════════════════════
//  ESTRELAS DO FUNDO (tela principal, canvas animado)
// ══════════════════════════════════════════════════════════════
function initStarsBackground() {
  const canvas = el('stars-canvas');
  const ctx    = canvas.getContext('2d');
  let W, H;

  const stars = Array.from({ length: 280 }, () => ({
    ax:    Math.random(),
    ay:    Math.random(),
    r:     Math.random() * 1.2 + 0.2,
    phase: Math.random() * Math.PI * 2,
    spd:   0.004 + Math.random() * 0.012,
    warm:  Math.random() > 0.8,
  }));

  let shoots = [];

  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  window.addEventListener('resize', resize);
  resize();

  function draw() {
    requestAnimationFrame(draw);

    ctx.fillStyle = '#06030f';
    ctx.fillRect(0, 0, W, H);

    // Névoas de fundo
    [
      { x: 0.30, y: 0.40, r: 220, c: 'rgba(55,18,120,0.06)' },
      { x: 0.72, y: 0.65, r: 190, c: 'rgba(18,35,100,0.05)' },
    ].forEach(n => {
      const g = ctx.createRadialGradient(n.x*W, n.y*H, 0, n.x*W, n.y*H, n.r);
      g.addColorStop(0, n.c);
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
    });

    // Estrelas
    stars.forEach(s => {
      s.phase += s.spd;
      const a = 0.15 + 0.55 * Math.abs(Math.sin(s.phase));
      ctx.beginPath();
      ctx.arc(s.ax * W, s.ay * H, s.r, 0, 2 * Math.PI);
      ctx.fillStyle = s.warm
        ? `rgba(255,225,195,${a * 0.65})`
        : `rgba(200,208,255,${a * 0.55})`;
      ctx.fill();
    });

    // Estrelas cadentes ocasionais
    if (Math.random() < 0.003) {
      shoots.push({
        x: Math.random() * W, y: Math.random() * H * 0.5,
        len: 50 + Math.random() * 70,
        spd: 7 + Math.random() * 5,
        a: 1,
      });
    }
    shoots = shoots.filter(s => s.a > 0);
    shoots.forEach(s => {
      const g = ctx.createLinearGradient(s.x, s.y, s.x - s.len, s.y + s.len * 0.4);
      g.addColorStop(0, `rgba(255,240,255,${s.a})`);
      g.addColorStop(1, 'transparent');
      ctx.strokeStyle = g;
      ctx.lineWidth   = 1.4;
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x - s.len, s.y + s.len * 0.4);
      ctx.stroke();
      s.x -= s.spd;
      s.y += s.spd * 0.4;
      s.a -= 0.018;
    });
  }

  draw();
}

// ══════════════════════════════════════════════════════════════
//  CLIQUE NO CÉU — detecta constelação ou revela foto
// ══════════════════════════════════════════════════════════════
function handleSkyClick(e) {
  const mx = e.clientX;
  const my = e.clientY;
  const HIT = 72; // raio de detecção em px

  const hit = visibleConsts.find(c => {
    const dx = mx - c.x, dy = my - c.y;
    return Math.sqrt(dx * dx + dy * dy) < HIT;
  });

  if (hit) {
    spawnSparkleBurst(mx, my);
    showConstellationCard(hit.name);
  } else {
    revealPhoto();
  }
}

// ══════════════════════════════════════════════════════════════
//  CARD EMOCIONAL DE CONSTELAÇÃO
// ══════════════════════════════════════════════════════════════
function showConstellationCard(constName) {
  if (!revealMemory) return;
  clearTimeout(constCardTimer);
  clearTimeout(typewriterTimer);

  const msgs = MESSAGES[revealMemory.id] || ['As estrelas testemunharam este momento especial.'];
  const msg  = msgs[constMsgIndex % msgs.length];
  constMsgIndex++;

  const dateLabel = revealMemory.date === 'Data Especial'
    ? '✦ Data Especial ✦'
    : `✦ ${revealMemory.label} ✦`;

  el('const-card-constellation').textContent = `✦ ${constName} ✦`;
  el('const-card-event').textContent         = revealMemory.event;
  el('const-card-message').textContent       = '';
  el('const-card-date').textContent          = dateLabel;

  const card = el('const-card');
  card.classList.remove('dismissing');
  card.classList.remove('show');

  // Inicia o pulso das estrelas da constelação
  startConstellationPulse(constName);

  requestAnimationFrame(() => requestAnimationFrame(() => {
    card.classList.add('show');

    // Efeito de digitação — a constelação "fala" o texto
    typewriter(el('const-card-message'), msg, 28);

    // Auto-dismiss após o texto terminar de aparecer + pausa
    const totalDelay = msg.length * 28 + 2000;
    constCardTimer = setTimeout(hideConstellationCard, totalDelay);
  }));
}

function hideConstellationCard() {
  clearTimeout(constCardTimer);
  clearTimeout(typewriterTimer);
  stopConstellationPulse();
  const card = el('const-card');
  if (!card.classList.contains('show')) return;
  card.classList.add('dismissing');
  setTimeout(() => card.classList.remove('show', 'dismissing'), 350);
}

// ══════════════════════════════════════════════════════════════
//  EFEITO VISUAL DE SPARKLE
// ══════════════════════════════════════════════════════════════
function spawnSparkleBurst(x, y) {
  const glyphs = ['✨', '✦', '🌟', '💫'];
  const g = glyphs[Math.floor(Math.random() * glyphs.length)];
  const div = document.createElement('div');
  div.className = 'sparkle-burst';
  div.style.left = `${x}px`;
  div.style.top  = `${y}px`;
  div.textContent = g;
  document.getElementById('reveal-overlay').appendChild(div);
  setTimeout(() => div.remove(), 700);
}

// ══════════════════════════════════════════════════════════════
//  PULSO DE CONSTELAÇÃO  — estrelas "falam" enquanto a mensagem aparece
// ══════════════════════════════════════════════════════════════

// Mapeia nome da constelação → índices em NAMED_STARS
const CONST_STAR_INDICES = {
  'Orion':     [0, 1, 2, 3, 4, 5, 6],
  'Crux':      [7, 8, 9, 10],
  'Escorpião': [11, 12, 13, 14, 15, 16, 17],
  'Cão Maior': [18, 19, 20, 21, 22],
  'Centauro':  [23, 24, 25, 26],
  'Leão':      [27, 28, 29, 30, 31],
  'Virgem':    [32, 33, 34, 35],
  'Gêmeos':    [36, 37, 38, 39],
};

function startConstellationPulse(constName) {
  stopConstellationPulse();
  pulseConst = constName;
  pulseStart = performance.now();
  pulseTick();
}

function stopConstellationPulse() {
  if (pulseAnimId) { cancelAnimationFrame(pulseAnimId); pulseAnimId = null; }
  pulseConst = null;
  const cc = el('constellation-canvas');
  if (cc) cc.getContext('2d').clearRect(0, 0, cc.width, cc.height);
}

function pulseTick() {
  if (!pulseConst) return;
  const cc = el('constellation-canvas');
  if (!cc) return;

  const W = window.innerWidth, H = window.innerHeight;
  if (cc.width !== W || cc.height !== H) { cc.width = W; cc.height = H; }

  const ctx = cc.getContext('2d');
  ctx.clearRect(0, 0, W, H);

  const CX = W / 2, CY = H / 2;
  const R  = skyR(W, H);
  const t  = (performance.now() - pulseStart) / 1000;

  (CONST_STAR_INDICES[pulseConst] || []).forEach(i => {
    const [ra, dec, mag] = NAMED_STARS[i];
    const p = toAltAz(ra, dec, lastSkyLst, SKY.lat);
    if (p.alt < -8) return;
    const { x, y } = project(p.alt, p.az, CX, CY, R);
    if (x < -20 || x > W + 20 || y < -20 || y > H + 20) return;

    const baseR  = mag < 0 ? 4.2 : mag < 1 ? 3.2 : mag < 2 ? 2.2 : mag < 3 ? 1.5 : 1.0;
    const phase  = (i * 0.7) % (Math.PI * 2);
    const wave   = 0.5 + 0.5 * Math.sin(t * 2.8 + phase);
    const glowR  = baseR * (3 + 4 * wave);
    const alpha  = 0.10 + 0.22 * wave;

    const grd = ctx.createRadialGradient(x, y, 0, x, y, glowR);
    grd.addColorStop(0,   `rgba(220, 185, 255, ${alpha * 2.2})`);
    grd.addColorStop(0.35, `rgba(180, 140, 255, ${alpha})`);
    grd.addColorStop(1,   'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.arc(x, y, glowR, 0, Math.PI * 2);
    ctx.fill();
  });

  pulseAnimId = requestAnimationFrame(pulseTick);
}

// ══════════════════════════════════════════════════════════════
//  TYPEWRITER — texto aparece caracter a caracter
// ══════════════════════════════════════════════════════════════
function typewriter(elem, text, speed) {
  clearTimeout(typewriterTimer);
  const lines = text.split('\n');
  elem.innerHTML = '';
  let li = 0, ci = 0;

  function step() {
    if (li >= lines.length) return;
    if (ci < lines[li].length) {
      elem.innerHTML += lines[li][ci++];
    } else {
      li++; ci = 0;
      if (li < lines.length) elem.innerHTML += '<br>';
      if (li >= lines.length) return;
    }
    typewriterTimer = setTimeout(step, speed);
  }

  typewriterTimer = setTimeout(step, speed);
}

// ══════════════════════════════════════════════════════════════
//  START
// ══════════════════════════════════════════════════════════════
init();
