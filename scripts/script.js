// Modal open and close
let modal = document.querySelector(".popup");
let modalopen = document.querySelector(".edit-button")
let modalclose = document.querySelector(".close-button");
let submitbtn = document.querySelector(".save-button");

modalopen.addEventListener("click", function () {
  modal.className += " popup_opened";
});

modalclose.addEventListener("click", function () {
  modal.className = modal.className.replace( /(?:^|\s)popup_opened(?!\S)/g , '' );
});

submitbtn.addEventListener("click", function () {
  modal.className = modal.className.replace( /(?:^|\s)popup_opened(?!\S)/g , '' );
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
