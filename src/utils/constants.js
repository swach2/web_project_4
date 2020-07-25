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
export const cardAdd = document.querySelector(".add-button");
export const avatarSelector = ".profile__avatar";
export const avatarModal = ".avatar-popup";
export const avatarEdit = document.querySelector(".avatar-button");
export const deleteModal = ".delete-popup"
