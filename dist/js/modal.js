document.addEventListener('DOMContentLoaded', () => {

  // MODAL
  const modalOpen = document.querySelectorAll('.popup-open');
  const modalClose = document.querySelectorAll('.popup-close');
  const modalOverlay = document.querySelector('.modal-overlay ');
  const modals = document.querySelectorAll('.modal');

  modalOpen.forEach((el) => {
    el.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-path');

      modals.forEach((el) => {
        el.classList.remove('modal--visible');
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
      modalOverlay.classList.add('modal-overlay--visible');
    });
  });

  modalClose.forEach((el) => {
    el.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-path');

      modals.forEach((el) => {
        el.classList.remove('modal--visible');
        modalOverlay.classList.remove('modal-overlay--visible');
      });

      document.querySelector(`[data-target="${path}"]`).classList.remove('modal--visible');
    });
  });

  modalOverlay.addEventListener('click', (e) => {

    if (e.target == modalOverlay) {
      modalOverlay.classList.remove('modal-overlay--visible');
      modals.forEach((el) => {
        el.classList.remove('modal--visible');
      });
    }
  });








  
  if (document.documentElement.clientWidth < 540) {
    // MODAL-M
    const modalOpenM = document.querySelectorAll('.popup-openM');
    const modalCloseM = document.querySelectorAll('.popup-closeM');
    const modalOverlayM = document.querySelector('.modal-overlayM ');
    const modalsM = document.querySelectorAll('.modalM');

    modalOpenM.forEach((el) => {
      el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        modalsM.forEach((el) => {
          el.classList.remove('modal--visible');
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
        modalOverlayM.classList.add('modal-overlay--visible');
      });
    });

    modalCloseM.forEach((el) => {
      el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        modalsM.forEach((el) => {
          el.classList.remove('modal--visible');
          modalOverlayM.classList.remove('modal-overlay--visible');
        });

        document.querySelector(`[data-target="${path}"]`).classList.remove('modal--visible');
      });
    });

    modalOverlayM.addEventListener('click', (e) => {

      if (e.target == modalOverlayM) {
        modalOverlayM.classList.remove('modal-overlay--visible');
        modalsM.forEach((el) => {
          el.classList.remove('modal--visible');
        });
      }
    });
  } else {

  };
});