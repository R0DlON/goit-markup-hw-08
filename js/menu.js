(() => {
  const refs = {
    openModalBtn: document.querySelector('[menu-open]'),
    closeModalBtn: document.querySelector('[menu-close]'),
    modal: document.querySelector('[menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('menu-mobile--is-open');
  }
})();

(() => {
  document.querySelector('.customer-form').addEventListener('submit', e => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`),
    );
  });
})();