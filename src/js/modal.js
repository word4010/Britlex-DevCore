// // const modalBackdrop = document.querySelector('.modal-backdrop');
// // const closeBtn = document.querySelector('.modal__close');
// // const backBtn = document.querySelector('.modal__back');
// // const openBtn = document.getElementById('openModal');

// // function openModal() {
// //   modalBackdrop.classList.add('is-open');
// //   document.body.style.overflow = 'hidden';
// // }

// // function closeModal() {
// //   modalBackdrop.classList.remove('is-open');
// //   document.body.style.overflow = '';
// // }

// // openBtn.addEventListener('click', openModal);
// // closeBtn.addEventListener('click', closeModal);
// // backBtn.addEventListener('click', closeModal);

// // // клік по фону
// // modalBackdrop.addEventListener('click', (e) => {
// //   if (e.target === modalBackdrop) {
// //     closeModal();
// //   }
// // });

// // // ESC
// // document.addEventListener('keydown', (e) => {
// //   if (e.key === 'Escape') {
// //     closeModal();
// //   }
// // });

// const modal = document.getElementById('modal');
// const openModalBtn = document.getElementById('openModalBtn');
// const closeModalBtn = document.getElementById('closeModalBtn');

// openModalBtn.addEventListener('click', () => {
//   modal.classList.remove('hidden');
// });

// closeModalBtn.addEventListener('click', () => {
//   modal.classList.add('closing');
//   modal.addEventListener('transitionend', function handler() {
//     modal.classList.add('hidden');
//     modal.classList.remove('closing');
//     modal.removeEventListener('transitionend', handler);
//   });
// });

// // Закриття при кліку поза модаллю
// modal.addEventListener('click', (e) => {
//   if (e.target.id === 'modal') {
//     modal.classList.add('closing');
//     modal.addEventListener('transitionend', function handler() {
//       modal.classList.add('hidden');
//       modal.classList.remove('closing');
//       modal.removeEventListener('transitionend', handler);
//     });
//   }
// });
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = document.getElementById("closeModalBtn");
  const modal = document.getElementById("modal");

  if (!openBtn || !closeBtn || !modal) return;

  const ANIMATION_TIME = 300;


  openBtn.addEventListener("click", (e) => {
    e.preventDefault();

    modal.classList.remove("hidden", "is-closing");
    modal.classList.add("is-open");
  });


  closeBtn.addEventListener("click", closeModal);

 
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    modal.classList.remove("is-open");
    modal.classList.add("is-closing");

    setTimeout(() => {
      modal.classList.add("hidden");
      modal.classList.remove("is-closing");
    }, ANIMATION_TIME);
  }
});
