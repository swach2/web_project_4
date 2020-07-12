import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

open({ text, link }) {
    const popupImage = this._popupElement.querySelector(".image-popup__image");
    const popupText = this._popupElement.querySelector(".image-popup__title");
    popupImage.src = link;
    popupImage.alt = text;
    popupText.textContent = text;
    super.open();
  }
}
