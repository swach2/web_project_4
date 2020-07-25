import "./pages/index.css";
import FormValidation from "./components/FormValidator.js";
import Card from "./components/Card.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import Api from "./components/Api.js";
import {
  popupForms,
  defaultConfig,
  nameSelector,
  jobSelector,
  profileModal,
  profileEdit,
  elementList,
  imageModal,
  cardModal,
  cardSelector,
  cardAdd,
  avatarSelector,
  avatarModal,
  avatarEdit,
  deleteModal
} from "./utils/constants.js";

// api
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-2",
  headers: {
    authorization: "c459bd25-f7e2-4113-a039-b16dd226c158",
    "Content-Type": "application/json",
  },
});

popupForms.forEach((item) => {
  const formValidator = new FormValidation(defaultConfig, item);
  formValidator.enableValidation();
});

// profile edit popup
const profileInfo = new UserInfo({ nameSelector, jobSelector, avatarSelector });

function profileSubmitHandler(data) {
  api.setUserInfo({ name: data.name, about: data.title }).then(() => {
    profileInfo.setUserInfo({ name: data.name, about: data.title });
    profilePopup.close();
    profilePopup.loading(false);
  });
}

const profilePopup = new PopupWithForm(profileModal, profileSubmitHandler, "Saving...");

profileEdit.addEventListener("click", () => {
  profileInfo.getUserInfo();
  profilePopup.open();
});

profilePopup.setEventListeners();

// make cards
function newCard(cardItem, userId) {
  const isLiked = cardItem.likes.map((likedItem) => likedItem._id).includes(userId);
  const card = new Card({ ...cardItem, popup: imagePopup, handleCardClick, handleDeleteClick: (item) => {
        deletePopup.open({ _id: card._id, element: item });
      },
      isLiked,
      userId,
      handleHeartClick,
    },
    ".element-template"
  );
  return card.generateCard();
}

const cardsList = new Section(
  {
    items: [],
    renderer: () => {},
  },
  elementList
);

api.getAppInfo().then(([initCards, userInfo]) => {
  const userId = userInfo._id;
  initCards.forEach((card) => {
    cardsList.addItems(newCard(card, userId));
  });
  profileInfo.setUserInfo({
    name: userInfo.name,
    about: userInfo.about,
  });
  profileInfo.setUserAvatar({ avatar: userInfo.avatar });
});

// add card popup
function cardSubmitHandler(data) {
  api.addCard({ name: data.name, link: data.link }).then((card) => {
    cardsList.addItems(newCard({ ...card, owner: card.owner._id, likes: card.likes, _id: card._id, handleDeleteClick: () =>
        deletePopup.open({ _id: cardItem._id }),
      })
    );
    cardPopup.close();
    cardPopup.loading(false);
  });
}

const cardPopup = new PopupWithForm(cardModal, cardSubmitHandler, "Saving...");

cardAdd.addEventListener("click", () => cardPopup.open());

cardPopup.setEventListeners();

// image popup
const imagePopup = new PopupWithImage(imageModal);

imagePopup.setEventListeners();

function handleCardClick(data) {
  imagePopup.open(data);
}

// avatar popup
function avatarSubmitHandler(data) {
  api.setAvatar({ avatar: data.avatar }).then(() => {
    profileInfo.setUserAvatar({ avatar: data.avatar });
    avatarPopup.close();
    avatarPopup.loading(false);
  });
}

const avatarPopup = new PopupWithForm(avatarModal, avatarSubmitHandler, "Saving...");

avatarEdit.addEventListener("click", () => avatarPopup.open());

avatarPopup.setEventListeners();

// delete card popup
function deleteSubmitHandler(card) {
  api.deleteCard({ cardId: card._id }).then(() => {
    card.element.remove();
    deletePopup.close();
    deletePopup.loading(false);
  });
}

const deletePopup = new PopupWithForm(deleteModal, deleteSubmitHandler, "Deleting...");

deletePopup.setEventListeners();

// likes
function handleHeartClick({ cardLiked, cardId }) {
  return api.setLike({ cardLiked, cardId }).then((card) => {
    return card.likes;
  });
}
