import FormValidation from './FormValidator.js'
import Card from './Card.js'

const defaultConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const profileModal = document.querySelector(".profile-popup");
const cardModal = document.querySelector(".newitem");

const editFormValidator = new FormValidation(defaultConfig, profileModal);
const cardFormValidator = new FormValidation(defaultConfig, cardModal);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();

// ESC key to close popups
const popupModal = document.querySelectorAll('.popup');
function keyHandler(evt) {
  const popupModalOpen = document.querySelector('.popup_opened');
  if (evt.key === "Escape") {
    popupModalOpen.classList.remove('popup_opened');
  }
}

// overlay click to close popups
function clickHandler(evt) {
  const popupModalOpen = document.querySelector('.popup_opened');
  if (evt.target == popupModalOpen) {
    popupModalOpen.classList.remove('popup_opened');
  }
};

// open modal function
function openModal (modalClass) {
  modalClass.classList.add("popup_opened");
  document.addEventListener('keydown', keyHandler);
  window.addEventListener('click', clickHandler);
}

// close modal function
function closeModal (modalClass) {
  modalClass.classList.remove("popup_opened");
  document.removeEventListener('keydown', keyHandler);
  window.removeEventListener('click', clickHandler);
}

// profile edit popup
const profileEdit = document.querySelector(".edit-button")
const profileClose = document.querySelector(".profile-close");
const profileSubmit = document.querySelector(".profile-save");
const profileForm =  document.querySelector(".profile-form");

profileEdit.addEventListener("click", function () {
  openModal(profileModal);
});

profileClose.addEventListener("click", function () {
  closeModal(profileModal);
});

profileSubmit.addEventListener("click", function () {
  closeModal(profileModal);
});

// profile edit change
const nameInput = document.querySelector('input[name="profile-name"]');
const jobInput = document.querySelector('input[name="profile-title"]');
const nameField = document.querySelector(".profile__name");
const jobField = document.querySelector(".profile__title");

function profileSubmitHandler (evt) {
    evt.preventDefault();
    nameField.textContent = nameInput.value;
    jobField.textContent = jobInput.value;
};

profileForm.addEventListener('submit', profileSubmitHandler);

// initial cards array
const initialCards = [
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    },
    {
        name: "Vanois National Park",
        link: "https://code.s3.yandex.net/web-code/vanois.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    }
];

// add card popup
const cardAdd = document.querySelector(".add-button");
const cardClose= document.querySelector(".newitem__close");
const cardCreate = document.querySelector(".newitem__save");
const cardForm =  document.querySelector(".newitem__form");

cardAdd.addEventListener("click", function () {
  openModal(cardModal);
});

cardClose.addEventListener("click", function () {
  closeModal(cardModal);
});

cardCreate.addEventListener("click", function () {
  closeModal(cardModal);
});

const titleInput = document.querySelector('input[name="newitem-title"]');
const urlInput = document.querySelector('input[name="newitem-url"]');
const elementList = document.querySelector(".elements__list");

function cardSubmitHandler (evt) {
    evt.preventDefault();
    const card = new Card(titleInput.value, urlInput.value, ".element-template");
  	const cardElement = card.generateCard();

    elementList.prepend(cardElement);
}

cardForm.addEventListener('submit', cardSubmitHandler);

const imageModal = document.querySelector(".image-popup");
const imageClose = document.querySelector(".image-popup__close");

imageClose.addEventListener("click", function () {
  closeModal(imageModal);
});

initialCards.forEach((item) => {
	const card = new Card(item.name, item.link, ".element-template");
	const cardElement = card.generateCard();

  elementList.prepend(cardElement);
});

export {keyHandler, clickHandler};
