const modalWrapper = document.querySelector(".modal-wrapper");
const modal = document.querySelector(".modal");
const openBtn = document.querySelector(".btn--open");
const closeBtn = document.querySelector(".btn--close");

// Events
openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

// Functions
function openModal() {
  modalWrapper.style.opacity = 1;
  modalWrapper.style.visibility = "visible";
  modal.style.transitionDelay = `${1}s`;
  modal.style.top = `${25}%`;
  modal.style.opacity = 1;
}
function closeModal() {
  modalWrapper.style.opacity = 0;
  modalWrapper.style.visibility = "hidden";
  modal.style.transitionDelay = 0;
  modalWrapper.style.transitionDelay = `${1}s`;
  modal.style.top = `${-100}%`;
  modal.style.opacity = 0;
}
