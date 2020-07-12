export default class Card {
  constructor({ text, link, handleCardClick }, cardSelector) {
    this._text = text;
    this._link = link;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._element.querySelector(".delete-button").addEventListener("click", () => {
      this._handleDeleteClick();
    });
    this._element.querySelector(".heart-button").addEventListener("click", () => {
      this._handleHeartClick();
    });
    this._element.querySelector('.element__img').addEventListener ('click', () => {
      this._handleCardClick({ text: this._text, link: this._link });
    });
  }

  _handleDeleteClick() {
    this._element.closest(".element").remove();
    this._element = null;
  }

  _handleHeartClick() {
    this._element.querySelector(".heart-button").classList.toggle("heart-button_active");
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".element__img").style.backgroundImage = "url('" + this._link + "')";
    this._element.querySelector('.element__img').alt = this._text;
    this._element.querySelector(".element__title").textContent = this._text;
    this._setEventListeners();
    return this._element;
  }
}
