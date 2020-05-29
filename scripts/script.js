const profileModal = document.querySelector(".profile-popup");
const profileEdit = document.querySelector(".edit-button")
const profileClose = document.querySelector(".profile-close");
const profileSubmit = document.querySelector(".profile-save");
const profileForm =  document.querySelector(".profile-form");

profileEdit.addEventListener("click", function () {
  profileModal.classList.add("popup_opened");
});

profileClose.addEventListener("click", function () {
  profileModal.classList.remove("popup_opened");
});

profileSubmit.addEventListener("click", function () {
  profileModal.classList.remove("popup_opened");
});

const nameInput = document.querySelector('input[name="profile-name"]');
const jobInput = document.querySelector('input[name="profile-title"]');
const nameField = document.querySelector(".profile__name");
const jobField = document.querySelector(".profile__title");

function profileSubmitHandler (evt) {
    evt.preventDefault();
    nameField.textContent = nameInput.value;
    jobField.textContent = jobInput.value;
}

profileForm.addEventListener('submit', profileSubmitHandler);

const initialCards = [
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    },
    {
        name: "Vanois National Park",
        link: "https://code.s3.yandex.net/web-code/vanois.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    }
];

const elementList = document.querySelector(".elements__list");
const imageModal = document.querySelector(".image-popup");
const imageClose = document.querySelector(".image-popup__close");
const imageContainer = document.querySelector(".image-popup__image");
const imageTitle = document.querySelector(".image-popup__title");

function addCard(cardTitle, cardLink) {
  const elementTemplate = document.querySelector("#element").content;
  const itemElement = elementTemplate.cloneNode(true);

  itemElement.querySelector(".element").style.backgroundImage =  "url('" + cardLink + "')";
  itemElement.querySelector(".element__title").textContent = cardTitle;

  itemElement.querySelector(".delete-button").addEventListener("click", function (evt) {
      evt.target.closest(".element").remove();
  });

  itemElement.querySelector(".heart-button_inactive").addEventListener("click", function (evt) {
      evt.target.classList.toggle('heart-button_active');
  });

  itemElement.querySelector(".element__click").addEventListener("click", function (evt) {
      imageModal.classList.add("popup_opened");
      imageContainer.src = evt.target.parentElement.style.backgroundImage.replace('url("','').replace('")','');
      imageTitle.textContent = evt.target.parentElement.innerText;
  });

  imageClose.addEventListener("click", function () {
      imageModal.classList.remove("popup_opened");
  });

  elementList.prepend(itemElement);
}

initialCards.forEach(card => addCard(card.name, card.link));

const cardModal = document.querySelector(".newitem");
const cardAdd = document.querySelector(".add-button");
const cardClose= document.querySelector(".newitem__close");
const cardCreate = document.querySelector(".newitem__save");
const cardForm =  document.querySelector(".newitem__form");

cardAdd.addEventListener("click", function () {
  cardModal.classList.add("popup_opened");
});

cardClose.addEventListener("click", function () {
  cardModal.classList.remove("popup_opened");
});

cardCreate.addEventListener("click", function () {
  cardModal.classList.remove("popup_opened");
});

const titleInput = document.querySelector('input[name="newitem-title"]');
const urlInput = document.querySelector('input[name="newitem-url"]');

function cardSubmitHandler (evt) {
    evt.preventDefault();
    addCard(titleInput.value, urlInput.value);
}

cardForm.addEventListener('submit', cardSubmitHandler);
