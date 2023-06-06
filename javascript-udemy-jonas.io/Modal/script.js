'use strict';

// Element
const btnOpenModalEl = document.querySelectorAll('.show-modal');
const modalEl = document.querySelector('.modal');
const btnCloseModalEl = document.querySelector('.close-modal');
const overlayEl = document.querySelector('.overlay');

const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
};

const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

for (let i = 0; i < btnOpenModalEl.length; i++) {
  btnOpenModalEl[i].addEventListener('click', openModal);
}

btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

// keypess event
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modalEl.classList.contains('hidden')) {
      closeModal();
    }
  }
});
