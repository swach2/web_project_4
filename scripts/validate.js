const showInputError = (formElement, inputElement, errorMessage, enableSettings) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(enableSettings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(enableSettings.errorClass);
};

const hideInputError = (formElement, inputElement, enableSettings) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(enableSettings.inputErrorClass);
  errorElement.classList.remove(enableSettings.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, enableSettings) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, enableSettings);

  } else {
    hideInputError(formElement, inputElement, enableSettings);
  }
};

const hasInvalidInput = (inputElements) => {
  return inputElements.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputElements, buttonElement, enableSettings) => {
  if (hasInvalidInput(inputElements)) {
    buttonElement.classList.add(enableSettings.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(enableSettings.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement, enableSettings) => {
  const inputElements = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const buttonElement = formElement.querySelector(enableSettings.submitButtonSelector);
  toggleButtonState(inputElements, buttonElement, enableSettings);
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, enableSettings);
      toggleButtonState(inputElements, buttonElement, enableSettings);
    });
  });
};

const enableValidation = (enableSettings) => {
const formElements = Array.from(document.querySelectorAll(enableSettings.formSelector));
formElements.forEach((formElement) => {
  formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });
  setEventListeners(formElement, enableSettings);
  });
};

const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
}

enableValidation(settings);
