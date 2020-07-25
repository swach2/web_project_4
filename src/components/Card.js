export default class Card {
  constructor({ name, link, handleCardClick, handleDeleteClick, handleHeartClick, _id, owner, userId, likes, isLiked }, cardSelector) {
    this._name = name;
    this._link = link;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleHeartClick = handleHeartClick;
    this._id = _id;
    this._ownerId = owner._id;
    this._userId = userId;
    this._likes = likes;
    this._isLiked = isLiked;
    this._cardSelector = cardSelector;
  }

  id() {
    this._id;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    const deleteButton = this._element.querySelector(".delete-button")
    deleteButton.addEventListener("click", () => {
      const closestCard = deleteButton.closest(".element");
      this._handleDeleteClick(closestCard);
    });
    const heartButton = this._element.querySelector(".heart-button");
    heartButton.addEventListener("click", () => {
      this._handleLiked(heartButton)
    });
    this._element.querySelector('.element__img').addEventListener ('click', () => {
      this._handleCardClick({ name: this._name, link: this._link });
    });
  }

  _handleLiked(heartButton) {
    this._handleHeartClick({
      cardId: this._id,
      cardLiked: !heartButton.classList.contains("heart-button_active")
    }).then((likes) => {
      this.likes = likes;
      this._element.querySelector(".element__likes").textContent = likes.length;
      heartButton.classList.toggle("heart-button_active");
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    const elemImage = this._element.querySelector('.element__img');
    const elemTitle = this._element.querySelector(".element__title");
    const elemLike = this._element.querySelector(".element__likes");
    elemImage.style.backgroundImage = `url(${this._link})`;
    elemImage.alt = this._name;
    elemTitle.textContent = this._name;
    elemLike.textContent = this._likes.length;
    if (this._ownerId !== this._userId) {
      this._element.querySelector(".delete-button").style.display = "none";
    }
    if (this._isLiked) {
      this._element.querySelector(".heart-button").classList.add("heart-button_active");
    }
    this._setEventListeners();
    return this._element;
  }
}
