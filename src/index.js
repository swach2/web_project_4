import "./pages/index.css";
import FormValidation from "./components/FormValidator.js";
import Card from "./components/Card.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import {
  popupForms,
  defaultConfig,
  nameSelector,
  jobSelector,
  profileModal,
  profileEdit,
  nameInput,
  jobInput,
  initialCards,
  elementList,
  imageModal,
  cardModal,
  cardSelector,
  cardAdd
} from "./utils/constants.js";

popupForms.forEach((item) => {
  const formValidator = new FormValidation(defaultConfig, item);
  formValidator.enableValidation();
});

// profile edit popup
const profileInfo = new UserInfo({ nameSelector, jobSelector });

function profileSubmitHandler({ "profile-name": name, "profile-title": job }) {
  profileInfo.setUserInfo({ name, job });
}

const profilePopup = new PopupWithForm(profileModal, profileSubmitHandler);

profileEdit.addEventListener("click", () => {
  const profileInput = profileInfo.getUserInfo();
  nameInput.value = profileInput.name;
  jobInput.value = profileInput.job;
  profilePopup.open();
});

profilePopup.setEventListeners();

// make cards
function newCard(item) {
  const card = new Card(
    { ...item, popup: PopupWithImage, handleCardClick },
    cardSelector
  );
  return card.generateCard();
}

const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = newCard(item);
      cardsList.addItems(card);
    },
  },
  elementList
);
cardsList.renderItems();

// add card popup
function cardSubmitHandler (evt) {
  const info = { text: evt["newitem-title"], link: evt["newitem-url"] };
  cardsList.addItems(newCard(info));
}

const cardPopup = new PopupWithForm(cardModal, cardSubmitHandler);

cardAdd.addEventListener("click", () => cardPopup.open());

cardPopup.setEventListeners();

// image popup
const imagePopup = new PopupWithImage(imageModal);

imagePopup.setEventListeners();

function handleCardClick(data) {
  imagePopup.open(data);
}
