import {keyHandler, clickHandler} from './script.js';

class Card {
  constructor(text, link, cardSelector) {
    this._text = text;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._element.querySelector(".delete-button").addEventListener("click", () => {
      this._handleDeleteClick();
    });
    this._element.querySelector(".heart-button").addEventListener("click", () => {
      this._handleHeartClick();
    });
    this._element.querySelector(".element__click").addEventListener("click", () => {
      this._handleImageClick();
    });
  }

  _handleDeleteClick() {
    this._element.closest(".element").remove();
    this._element = null;
  }

  _handleHeartClick() {
    this._element.querySelector(".heart-button").classList.toggle('heart-button_active');
  }

  _handleImageClick() {
    const imagePopupImage = document.querySelector(".image-popup__image");
    document.querySelector(".image-popup").classList.toggle('popup_opened');
    imagePopupImage.src = this._link;
    imagePopupImage.alt = this._text;
    document.querySelector(".image-popup__title").textContent = this._text;
    document.addEventListener('keydown', keyHandler);
    window.addEventListener('click', clickHandler);
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".element__card").style.backgroundImage =  "url('" + this._link + "')";
    this._element.querySelector(".element__title").textContent = this._text;

    this._setEventListeners();

    return this._element;
  }
}

export default Card;
