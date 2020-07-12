export const initialCards = [
  {
    text: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
  {
    text: "Vanois National Park",
    link: "https://code.s3.yandex.net/web-code/vanois.jpg",
  },
  {
    text: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    text: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    text: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    text: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
];

export const defaultConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export const popupForms = Array.from(document.querySelectorAll(defaultConfig.formSelector));
export const nameSelector = ".profile__name";
export const jobSelector = ".profile__title";
export const profileModal = ".profile-popup";
export const elementList = ".elements__list";
export const imageModal = ".image-popup";
export const cardModal = ".newitem";
export const cardSelector = ".element-template";
export const profileEdit = document.querySelector(".edit-button");
export const nameInput = document.querySelector('input[name="profile-name"]');
export const jobInput = document.querySelector('input[name="profile-title"]');
export const cardAdd = document.querySelector(".add-button");
