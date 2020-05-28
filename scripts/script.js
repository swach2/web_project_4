// Modal open and close
const modal_profile = document.querySelector(".profile-popup");
const modalopen_profile = document.querySelector(".edit-button")
const modalclose_profile = document.querySelector(".profile-close");
const submitbtn_profile = document.querySelector(".profile-save");

modalopen_profile.addEventListener("click", function () {
  modal_profile.classList.add("popup_opened");
});

modalclose_profile.addEventListener("click", function () {
  modal_profile.classList.remove("popup_opened");
});

submitbtn_profile.addEventListener("click", function () {
  modal_profile.classList.remove("popup_opened");
});

// Save form input
const profileformElement =  document.querySelector(".profile-form");

// Next is the form submit handler, though
// it won't submit anywhere just yet
function formSubmitHandler (evt) {
    evt.preventDefault(); // This line stops the browser from submitting the form in the default way.
                                                // Having done so, we can define our own way of submitting the form.
                                                // We'll explain it in more detail later.

    // Let's find the form fields in the DOM
    const nameInput = document.querySelector('input[name="profile-name"]');
    const jobInput = document.querySelector('input[name="profile-title"]');


    // Get the values of each field from the corresponding value property
    const newname = nameInput.value;
    const newjob = jobInput.value;

    // Select elements where the field values will be entered
    const nameField = document.querySelector(".profile__name");
    const jobField = document.querySelector(".profile__title");

    // Insert new values using the textContent property of the querySelector() method
    nameField.textContent = newname;
    jobField.textContent = newjob;
}

// Connect the handler to the form:
// it will watch the submit event
profileformElement.addEventListener('submit', formSubmitHandler);

const initialCards = [
    {
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Vanois National Park",
        link: "https://code.s3.yandex.net/web-code/vanois.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];

const elementList = document.querySelector(".elements__list");
const imagemodal = document.querySelector(".image-popup");
const imageclose = document.querySelector(".image-popup__close");
const imagecontainer = document.querySelector(".image-popup__image");
const imagetitle = document.querySelector(".image-popup__title");

function initialCard() {
  const elementTemplate = document.querySelector("#element").content;

  for (var i = 0; i < initialCards.length; i++) {
    var cardinfo = initialCards[i];
    const itemElement = elementTemplate.cloneNode(true);
    itemElement.querySelector(".element").style.backgroundImage =  "url('" + cardinfo.link + "')";
    itemElement.querySelector(".element__title").textContent = cardinfo.name;

    itemElement.querySelector(".delete-button").addEventListener("click", function (evt) {
        evt.target.closest(".element").remove();
    });

    itemElement.querySelector(".heart-button_inactive").addEventListener("click", function (evt) {
        evt.target.classList.toggle('heart-button_active');
    });

    itemElement.querySelector(".element__click").addEventListener("click", function (evt) {
        imagemodal.classList.add("popup_opened");
        imagecontainer.src = evt.target.parentElement.style.backgroundImage.replace('url("','').replace('")','');
        imagetitle.textContent = evt.target.parentElement.innerText;
    });

    imageclose.addEventListener("click", function () {
        imagemodal.classList.remove("popup_opened");
    });

    elementList.appendChild(itemElement);
  }

}

window.onload = initialCard();

function newCard(newcardTitle, newcardURL) {
  const elementTemplate = document.querySelector("#element").content;
  const itemElement = elementTemplate.cloneNode(true);

  itemElement.querySelector(".element").style.backgroundImage =  "url('" + newcardURL + "')";
  itemElement.querySelector(".element__title").textContent = newcardTitle;

  itemElement.querySelector(".delete-button").addEventListener("click", function (evt) {
      evt.target.closest(".element").remove();
  });

  itemElement.querySelector(".heart-button_inactive").addEventListener("click", function (evt) {
      evt.target.classList.toggle('heart-button_active');
  });

  itemElement.querySelector(".element__click").addEventListener("click", function (evt) {
      imagemodal.classList.add("popup_opened");
      imagecontainer.src = evt.target.parentElement.style.backgroundImage.replace('url("','').replace('")','');
      imagetitle.textContent = evt.target.parentElement.innerText;
  });

  imageclose.addEventListener("click", function () {
      imagemodal.classList.remove("popup_opened");
  });

  elementList.prepend(itemElement);
}

const modal_newitem = document.querySelector(".newitem");
const modalopen_newitem = document.querySelector(".add-button");
const modalclose_newitem = document.querySelector(".newitem__close");
const submitbtn_newitem = document.querySelector(".newitem__save");

modalopen_newitem.addEventListener("click", function () {
  modal_newitem.classList.add("popup_opened");
});

modalclose_newitem.addEventListener("click", function () {
  modal_newitem.classList.remove("popup_opened");
});

submitbtn_newitem.addEventListener("click", function () {
  modal_newitem.classList.remove("popup_opened");
});

const newitemformElement =  document.querySelector(".newitem__form");

function newitemformSubmitHandler (evt) {
    evt.preventDefault(); // This line stops the browser from submitting the form in the default way.
                                                // Having done so, we can define our own way of submitting the form.
                                                // We'll explain it in more detail later.

    // Let's find the form fields in the DOM
    const titleInput = document.querySelector('input[name="newitem-title"]');
    const urlInput = document.querySelector('input[name="newitem-url"]');


    // Get the values of each field from the corresponding value property
    const newitemTitle = titleInput.value;
    const newitemURL = urlInput.value;

    newCard(newitemTitle, newitemURL);

}

newitemformElement.addEventListener('submit', newitemformSubmitHandler);
