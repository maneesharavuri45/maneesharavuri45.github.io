const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

const lehengaCollection = document.querySelector('#lehengaCollection');
const lehengaModal = document.querySelector('#lehengaModal');
const modalClose = document.querySelector('#modalClose');
const modalOverlay = document.querySelector('#modalOverlay');

function openLehengaCollection() {
  if (!lehengaModal) return;

  lehengaModal.classList.add('open');
  lehengaModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeLehengaCollection() {
  if (!lehengaModal) return;

  lehengaModal.classList.remove('open');
  lehengaModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

if (lehengaCollection) {
  lehengaCollection.addEventListener('click', openLehengaCollection);
}

if (modalClose) {
  modalClose.addEventListener('click', closeLehengaCollection);
}

if (modalOverlay) {
  modalOverlay.addEventListener('click', closeLehengaCollection);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeLehengaCollection();
  }
});
