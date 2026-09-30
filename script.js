document.addEventListener("DOMContentLoaded", function () {

  /* MOBILE MENU */

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }


  /* LEHENGA COLLECTION POPUP */

  const lehengaCollection = document.getElementById("lehengaCollection");
  const lehengaModal = document.getElementById("lehengaModal");
  const modalClose = document.getElementById("modalClose");
  const modalOverlay = document.getElementById("modalOverlay");


  function openLehengaModal() {
    if (!lehengaModal) {
      return;
    }

    lehengaModal.classList.add("open");
    lehengaModal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");
  }


  function closeLehengaModal() {
    if (!lehengaModal) {
      return;
    }

    lehengaModal.classList.remove("open");
    lehengaModal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");
  }


  if (lehengaCollection) {
    lehengaCollection.addEventListener("click", function (event) {
      event.preventDefault();
      openLehengaModal();
    });
  }


  if (modalClose) {
    modalClose.addEventListener("click", function (event) {
      event.preventDefault();
      closeLehengaModal();
    });
  }


  if (modalOverlay) {
    modalOverlay.addEventListener("click", function () {
      closeLehengaModal();
    });
  }


  /* CLOSE WITH ESCAPE KEY */

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeLehengaModal();
    }
  });

});
