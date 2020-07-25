import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

open({ name, link }) {
    const popupImage = this._popupElement.querySelector(".image-popup__image");
    const popupText = this._popupElement.querySelector(".image-popup__title");
    popupImage.src = link;
    popupImage.alt = name;
    popupText.textContent = name;
    super.open();
  }
}
