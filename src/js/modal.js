(() => {
  const refs = {
    openModalBtn: document.getElementById("openModalBtn"),
    closeModalBtn: document.getElementById("closeModalBtn"),
    modal: document.querySelector("[data-modal]"),
    backdrop: document.querySelector("[data-backdrop]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.backdrop.classList.toggle("is-hidden");
    refs.modal.classList.toggle("effect");
    document.body.classList.toggle("no-scroll");
  }
})();