const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    if (nav) {
      nav.classList.remove('open');
    }
  });
});


/* =========================================
   LEHENGA MODAL
   ========================================= */

const lehengaTrigger = document.querySelector('#lehengaTrigger');
const lehengaModal = document.querySelector('#lehengaModal');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.collection-modal-overlay');

function openLehengaModal(event) {
  if (event) {
    event.preventDefault();
  }

  if (!lehengaModal) {
    return;
  }

  lehengaModal.classList.add('is-open');
  document.body.classList.add('modal-open');

  history.replaceState(null, '', '#lehengaModal');
}

function closeLehengaModal(event) {
  if (event) {
    event.preventDefault();
  }

  if (!lehengaModal) {
    return;
  }

  lehengaModal.classList.remove('is-open');
  document.body.classList.remove('modal-open');

  history.replaceState(null, '', '#collections');
}

if (lehengaTrigger) {
  lehengaTrigger.addEventListener('click', openLehengaModal);
}

if (modalClose) {
  modalClose.addEventListener('click', closeLehengaModal);
}

if (modalOverlay) {
  modalOverlay.addEventListener('click', closeLehengaModal);
}


/* Open modal automatically if URL contains #lehengaModal */
if (window.location.hash === '#lehengaModal' && lehengaModal) {
  lehengaModal.classList.add('is-open');
  document.body.classList.add('modal-open');
}


/* Close popup with Escape key */
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lehengaModal) {
    closeLehengaModal();
  }
});
