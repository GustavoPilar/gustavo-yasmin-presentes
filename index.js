/* =========================================================
   ÍCONES (SVG inline, minimalistas, cor herdada)
========================================================= */
const ICONS = {
  plate: '<circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.4"/><circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.4"/>',
  cutlery: '<path d="M7 3V11.5C7 12.6 6.1 13.5 5 13.5C3.9 13.5 3 12.6 3 11.5V3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M5 13.5V21" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M9 3V21" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M9 3C9 3 9 8 9 9.5C9 10.5 9.6 11.5 9 11.5C8.4 11.5 9 3 9 3Z" stroke="currentColor" stroke-width="1.4"/><path d="M18.5 3C16.6 4 15.5 6.3 15.5 8.7C15.5 10.6 16.4 11.7 17.5 12L17 21" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>',
  glass: '<path d="M6 3H18L16.5 18C16.3 19.7 14.9 21 13.1 21H10.9C9.1 21 7.7 19.7 7.5 18L6 3Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M7.2 8.5H16.8" stroke="currentColor" stroke-width="1.4"/>',
  pot: '<rect x="4" y="10" width="16" height="9" rx="1.5" stroke="currentColor" stroke-width="1.4"/><path d="M2 10H22" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M1.5 10C1.5 10 2.5 6.5 5 6.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M22.5 10C22.5 10 21.5 6.5 19 6.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M12 6.5V4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>',
  blender: '<path d="M8 3H16L15 13H9L8 3Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M9 13H15L15.8 19C15.9 20.1 15 21 13.9 21H10.1C9 21 8.1 20.1 8.2 19L9 13Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M10.5 3V1.5H13.5V3" stroke="currentColor" stroke-width="1.4"/>',
  grill: '<rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M3 12H21" stroke="currentColor" stroke-width="1.4"/><path d="M7 6V4.5M17 6V4.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>',
  kettle: '<path d="M5 12C5 8.5 8 6 12 6C16 6 19 8.5 19 12V17C19 18.7 17.7 20 16 20H8C6.3 20 5 18.7 5 17V12Z" stroke="currentColor" stroke-width="1.4"/><path d="M19 12L22 11" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M9 6C9 6 9.5 4 12 4C14.5 4 15 6 15 6" stroke="currentColor" stroke-width="1.4"/><circle cx="12" cy="13" r="1" fill="currentColor"/>',
  toaster: '<rect x="3" y="8" width="18" height="11" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M8 8V5.5C8 4.7 8.7 4 9.5 4H14.5C15.3 4 16 4.7 16 5.5V8" stroke="currentColor" stroke-width="1.4"/><path d="M8 13V17M12 13V17M16 13V17" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>',
  rug: '<rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.4"/><rect x="6.5" y="8.5" width="11" height="7" rx="1" stroke="currentColor" stroke-width="1.2"/>',
  bath: '<path d="M4 12H20V15C20 17.2 18.2 19 16 19H8C5.8 19 4 17.2 4 15V12Z" stroke="currentColor" stroke-width="1.4"/><path d="M6 12V6C6 4.9 6.9 4 8 4H9.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M3 19L3 20.5M21 19L21 20.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>',
};

function iconSvg(key){
  return `<svg viewBox="0 0 24 24" fill="none">${ICONS[key] || ICONS.plate}</svg>`;
}

/* =========================================================
   DADOS DA LISTA DE PRESENTES
========================================================= */
const GIFTS = [
  {
    id: 'pratos-fundos-duralex',
    name: 'Jogo de Pratos Fundos Duralex Opaline, 6 peças, 23cm',
    category: 'Cozinha & Mesa',
    icon: 'plate',
    url: 'https://www.mercadolivre.com.br/jogo-de-pratos-fundos-6-pecas-branco-duralex-opaline-vidro-23cm/p/MLB23120599?sid=bookmarks',
  },
  {
    id: 'pratos-rasos-28cm',
    name: 'Jogo de Pratos Rasos em Vidro, 6 peças, 28cm',
    category: 'Cozinha & Mesa',
    icon: 'plate',
    url: 'https://www.mercadolivre.com.br/jogo-6-pratos-rasos-grande-vidro-branco-restaurante-28cm/up/MLBU3506268405?pdp_filters=item_id%3AMLB4268509621&sid=bookmarks',
  },
  {
    id: 'talheres-tramontina-buzios',
    name: 'Jogo de Talheres Tramontina Búzios, Aço Inox, 24 peças',
    category: 'Cozinha & Mesa',
    icon: 'cutlery',
    url: 'https://www.mercadolivre.com.br/jogo-talheres-faqueiro-buzios-aco-inox-24-pecas-tramontina/p/MLB35092029?pdp_filters=item_id%3AMLB3686609545&sid=bookmarks',
  },
  {
    id: 'copos-diamond-egipcio',
    name: 'Jogo de Copos Diamond Egípcio, 6 peças, 300ml',
    category: 'Cozinha & Mesa',
    icon: 'glass',
    url: 'https://www.mercadolivre.com.br/jogo-6-copos-diamond-egipcio-300ml-vidro-grosso-diamante-luxo-transparente-vitrex/p/MLB65966191?pdp_filters=item_id%3AMLB4485964757&sid=bookmarks',
  },
  {
    id: 'copos-aruba-nadir',
    name: 'Jogo de Copos Aruba Nadir, 6 peças, 465ml',
    category: 'Cozinha & Mesa',
    icon: 'glass',
    url: 'https://www.mercadolivre.com.br/jogo-de-copos-6-pecas-aruba-transparente-sm-465ml-nadir/p/MLB25367466?pdp_filters=item_id%3AMLB5282774510&sid=bookmarks',
  },
  {
    id: 'panelas-antiaderente-10pc',
    name: 'Conjunto de Panelas Antiaderente, 10 peças',
    category: 'Cozinha & Mesa',
    icon: 'pot',
    url: 'https://produto.mercadolivre.com.br/MLB-4107271844-conjunto-panelas-antiaderente-10-pecas-teflon-varias-cores-_JM?searchVariation=180195153115&sid=bookmarks',
  },
  {
    id: 'liquidificador-mondial',
    name: 'Liquidificador Mondial Pratic Turbo, 550W',
    category: 'Eletroportáteis',
    icon: 'blender',
    url: 'https://www.mercadolivre.com.br/liquidificador-pratic-turbo-mondial-550w-l-98-b/p/MLB38503899?sid=bookmarks',
  },
  {
    id: 'grill-sanduicheira',
    name: 'Grill e Sanduicheira BGR24A',
    category: 'Eletroportáteis',
    icon: 'grill',
    url: 'https://www.mercadolivre.com.br/grill-e-sanduicheira-bgr24a/p/MLB66272293?sid=bookmarks',
  },
  {
    id: 'chaleira-eletrica-holdon',
    name: 'Chaleira Elétrica Hold On em Inox, 2L, desligamento automático',
    category: 'Eletroportáteis',
    icon: 'kettle',
    url: 'https://www.mercadolivre.com.br/chaleira-eletrica-hold-on-2-l-em-inox-com-desligamento-automatico/p/MLB70659037?pdp_filters=item_id%3AMLB6872575612&sid=bookmarks',
  },
  {
    id: 'torradeira-britania',
    name: 'Torradeira Britânia 6 Níveis de Tostagem, 700W',
    category: 'Eletroportáteis',
    icon: 'toaster',
    url: 'https://www.mercadolivre.com.br/torradeira-britnia-6-niveis-de-tostagem-700w-btr05a-cor-preto/p/MLB45819234?pdp_filters=item_id%3AMLB5277559130&sid=bookmarks',
  },
  {
    id: 'tapete-felpudo-sala',
    name: 'Tapete Felpudo para Sala, 200x150cm, Antiderrapante',
    category: 'Casa',
    icon: 'rug',
    url: 'https://www.mercadolivre.com.br/tapete-felpudo-para-sala-de-200-x-150-m-antiderrapante-cinza-escuro/p/MLB51862557?pdp_filters=item_id%3AMLB5872142692&sid=bookmarks',
  },
  {
    id: 'kit-banheiro-3pc',
    name: 'Kit para Banheiro, 3 peças (dispenser, porta-algodão e escova)',
    category: 'Casa',
    icon: 'bath',
    url: 'https://www.mercadolivre.com.br/kit-para-banheiro-3-pecas-dispenser-porta-algodo-escova-cor-preto/p/MLB50665543?pdp_filters=item_id%3AMLB5686949746&sid=bookmarks',
  },
];

const CATEGORY_ORDER = ['Cozinha & Mesa', 'Eletroportáteis', 'Casa'];

/* =========================================================
   PERSISTÊNCIA (Supabase — tabela "gifts", acesso direto do
   navegador, sem RLS/API própria, conforme solicitado)
========================================================= */
const SUPABASE_URL = 'https://itgesolagklifczhuoqe.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0Z2Vzb2xhZ2tsaWZjemh1b3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxNTIyNzQsImV4cCI6MjA5OTcyODI3NH0.pO1K1po9KTPlCkmHZJ42NYDTCTgmbkTMyMbXp-29cqo';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function loadState(){
  const { data, error } = await supabaseClient.from('gifts').select('*');
  if(error){
    console.warn('Não foi possível carregar os presentes:', error);
    return {};
  }
  const result = {};
  data.forEach(row => {
    result[row.id] = { taken: true, name: row.name, date: row.date };
  });
  return result;
}

async function markGiftTaken(id, name){
  const { error } = await supabaseClient.from('gifts').upsert({ id, name, date: new Date().toISOString() });
  if(error) console.warn('Não foi possível salvar o presente:', error);
  return !error;
}

async function unmarkGift(id){
  const { error } = await supabaseClient.from('gifts').delete().eq('id', id);
  if(error) console.warn('Não foi possível desmarcar o presente:', error);
  return !error;
}

let state = {};

/* =========================================================
   RENDER
========================================================= */
const groupsEl = document.getElementById('gift-groups');
const progressFill = document.getElementById('progress-fill');
const progressLabel = document.getElementById('progress-label');

function escapeHtml(str){
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function render(){
  groupsEl.innerHTML = '';

  CATEGORY_ORDER.forEach(category => {
    const items = GIFTS.filter(g => g.category === category);
    if(!items.length) return;

    const groupEl = document.createElement('div');
    groupEl.className = 'gift-group';
    groupEl.innerHTML = `
      <div class="gift-group-title">
        <h3>${category}</h3>
        <span class="rule"></span>
      </div>
      <div class="gift-grid">
        ${items.map(renderCard).join('')}
      </div>
    `;
    groupsEl.appendChild(groupEl);
  });

  // progresso geral
  const total = GIFTS.length;
  const taken = GIFTS.filter(g => state[g.id]?.taken).length;
  const pct = total ? Math.round((taken / total) * 100) : 0;
  progressFill.style.width = pct + '%';
  progressLabel.textContent = `${taken} de ${total} presentes já escolhidos`;

  // liga os eventos após criar os cards
  document.querySelectorAll('[data-action="toggle"]').forEach(btn => {
    btn.addEventListener('click', () => onGiftButtonClick(btn.dataset.id));
  });
}

function renderCard(gift){
  const entry = state[gift.id];
  const taken = !!entry?.taken;

  return `
    <article class="gift-card ${taken ? 'is-taken' : ''}">
      <span class="gift-icon">${iconSvg(gift.icon)}</span>
      <div class="gift-body">
        <p class="gift-name">${escapeHtml(gift.name)}</p>
        <p class="gift-status ${taken ? 'taken' : ''}">
          <span class="dot"></span>
          ${taken ? `Escolhido por ${escapeHtml(entry.name)}` : 'Disponível'}
        </p>
        <div class="gift-actions">
          <a class="gift-link" href="${gift.url}" target="_blank" rel="noopener noreferrer">
            Ver na loja
            <svg viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
          <button class="gift-btn ${taken ? 'taken' : ''}" type="button" data-action="toggle" data-id="${gift.id}">
            ${taken ? 'Desmarcar' : 'Marcar como presenteado'}
          </button>
        </div>
      </div>
    </article>
  `;
}

/* =========================================================
   MODAL: MARCAR PRESENTE
========================================================= */
const markOverlay = document.getElementById('modal-overlay');
const markItemName = document.getElementById('modal-item-name');
const buyerNameInput = document.getElementById('buyer-name');
const fieldError = document.getElementById('field-error');
const modalClose = document.getElementById('modal-close');
const modalCancel = document.getElementById('modal-cancel');
const modalConfirm = document.getElementById('modal-confirm');

/* =========================================================
   MODAL: DESMARCAR
========================================================= */
const unmarkOverlay = document.getElementById('unmark-overlay');
const unmarkItemName = document.getElementById('unmark-item-name');
const unmarkInfo = document.getElementById('unmark-info');
const unmarkClose = document.getElementById('unmark-close');
const unmarkCancel = document.getElementById('unmark-cancel');
const unmarkConfirm = document.getElementById('unmark-confirm');

let activeGiftId = null;

function onGiftButtonClick(id){
  const gift = GIFTS.find(g => g.id === id);
  if(!gift) return;
  activeGiftId = id;

  const entry = state[id];
  if(entry?.taken){
    unmarkItemName.textContent = gift.name;
    unmarkInfo.textContent = `Marcado como escolhido por ${entry.name}. Se foi engano, você pode desmarcar abaixo.`;
    openOverlay(unmarkOverlay);
  }else{
    markItemName.textContent = gift.name;
    buyerNameInput.value = '';
    fieldError.classList.remove('is-visible');
    openOverlay(markOverlay);
    setTimeout(() => buyerNameInput.focus(), 250);
  }
}

function openOverlay(overlay){
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}
function closeOverlay(overlay){
  overlay.classList.remove('is-open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', () => closeOverlay(markOverlay));
modalCancel.addEventListener('click', () => closeOverlay(markOverlay));
markOverlay.addEventListener('click', (e) => { if(e.target === markOverlay) closeOverlay(markOverlay); });

unmarkClose.addEventListener('click', () => closeOverlay(unmarkOverlay));
unmarkCancel.addEventListener('click', () => closeOverlay(unmarkOverlay));
unmarkOverlay.addEventListener('click', (e) => { if(e.target === unmarkOverlay) closeOverlay(unmarkOverlay); });

modalConfirm.addEventListener('click', async () => {
  const name = buyerNameInput.value.trim();
  if(!name){
    fieldError.classList.add('is-visible');
    buyerNameInput.focus();
    return;
  }
  const date = new Date().toISOString();
  const ok = await markGiftTaken(activeGiftId, name);
  if(!ok){
    showToast('Não foi possível salvar. Tente novamente.');
    return;
  }
  state[activeGiftId] = { taken: true, name, date };
  closeOverlay(markOverlay);
  render();
  showToast(`Presente marcado — obrigado, ${name}! 💛`);
});

buyerNameInput.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') modalConfirm.click();
});
buyerNameInput.addEventListener('input', () => fieldError.classList.remove('is-visible'));

unmarkConfirm.addEventListener('click', async () => {
  const ok = await unmarkGift(activeGiftId);
  if(!ok){
    showToast('Não foi possível desmarcar. Tente novamente.');
    return;
  }
  delete state[activeGiftId];
  closeOverlay(unmarkOverlay);
  render();
  showToast('Presente desmarcado.');
});

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape'){
    closeOverlay(markOverlay);
    closeOverlay(unmarkOverlay);
  }
});

/* =========================================================
   TOAST
========================================================= */
const toastEl = document.getElementById('toast');
let toastTimer = null;
function showToast(message){
  clearTimeout(toastTimer);
  toastEl.textContent = message;
  toastEl.classList.add('is-visible');
  toastTimer = setTimeout(() => toastEl.classList.remove('is-visible'), 2800);
}

/* =========================================================
   CONTAGEM REGRESSIVA
========================================================= */
const WEDDING_DATE = new Date('2026-09-07T16:00:00');
const countdownDays = document.getElementById('countdown-days');
const countdownHours = document.getElementById('countdown-hours');
const countdownMinutes = document.getElementById('countdown-minutes');
const countdownSeconds = document.getElementById('countdown-seconds');

function pad2(value){
  return String(value).padStart(2, '0');
}

function updateCountdown(){
  const diff = WEDDING_DATE.getTime() - Date.now();
  const clamped = Math.max(diff, 0);

  const totalSeconds = Math.floor(clamped / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  countdownDays.textContent = pad2(days);
  countdownHours.textContent = pad2(hours);
  countdownMinutes.textContent = pad2(minutes);
  countdownSeconds.textContent = pad2(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* =========================================================
   INIT
========================================================= */
(async () => {
  state = await loadState();
  render();
})();
