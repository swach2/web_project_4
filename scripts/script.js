// Modal open and close
const modal = document.querySelector(".popup");
const modalopen = document.querySelector(".edit-button")
const modalclose = document.querySelector(".close-button");
const submitbtn = document.querySelector(".save-button");

modalopen.addEventListener("click", function () {
  modal.classList.add("popup_opened");
});

modalclose.addEventListener("click", function () {
  modal.classList.remove("popup_opened");
});

submitbtn.addEventListener("click", function () {
  modal.classList.remove("popup_opened");
});

// Save form input
const formElement =  document.querySelector(".popup__form");

// Next is the form submit handler, though
// it won't submit anywhere just yet
function formSubmitHandler (evt) {
    evt.preventDefault(); // This line stops the browser from submitting the form in the default way.
                                                // Having done so, we can define our own way of submitting the form.
                                                // We'll explain it in more detail later.

    // Let's find the form fields in the DOM
    const nameInput = document.querySelector('input[name="profilename"]');
    const jobInput = document.querySelector('input[name="profiletitle"]');


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
formElement.addEventListener('submit', formSubmitHandler);
