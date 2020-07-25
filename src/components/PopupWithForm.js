import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callback, buttonLoading) {
    super(popupSelector);
    this._callback = callback;
    this._form = this._popupElement.querySelector(".popup__form");
    this._button = this._form.querySelector(".form-submit");
    this._buttonText = this._button.textContent;
    this._buttonLoading = buttonLoading;
  }

  _getInputValues() {
    const inputValues = { ...this._info };
    const inputData = Object.fromEntries(new FormData(this._form));
    Object.assign(inputData, inputValues);
    return inputData;
  }

  open(info) {
    this._info = info || {};
    super.open();
  }

  loading(status) {
    const button = this._button.textContent;
    if (status) {
      this._button.textContent =  this._buttonLoading;
    } else {
      this._button.textContent = this._buttonText;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._callback(this._getInputValues());
      this.loading(true);
      evt.stopPropagation();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
