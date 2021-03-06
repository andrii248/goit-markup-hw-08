(() => {
  const refs = {
    openMenuBtn: document.querySelector('.open-menu-button'),
    closeMenuBtn: document.querySelector('.close-menu-button'),
    menu: document.querySelector('.menu-container'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
