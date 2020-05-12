// Modal open and close
let modal = document.querySelector(".popup");
let modalopen = document.querySelector(".edit-button")
let modalclose = document.querySelector(".close-button");
let submitbtn = document.querySelector(".save-button");

modalopen.onclick = function() {
  modal.style.display = "block";
}

modalclose.onclick = function() {
  modal.style.display = "none";
}

submitbtn.onclick = function() {
  modal.style.display = "none";
}

// Save form input
// Let's find the form in the DOM
let formElement =  document.querySelector(".popup__form");

// Next is the form submit handler, though
// it won't submit anywhere just yet
function formSubmitHandler (evt) {
    evt.preventDefault(); // This line stops the browser from submitting the form in the default way.
                                                // Having done so, we can define our own way of submitting the form.
                                                // We'll explain it in more detail later.

    // Let's find the form fields in the DOM
    let nameInput = document.querySelector('input[name="profilename"]');
    let jobInput = document.querySelector('input[name="profiletitle"]');


    // Get the values of each field from the corresponding value property
    let newname = nameInput.value;
    let newjob = jobInput.value;

    // Select elements where the field values will be entered
    let nameField = document.querySelector(".profile__name");
    let jobField = document.querySelector(".profile__title");

    // Insert new values using the textContent property of the querySelector() method
    nameField.textContent = newname;
    jobField.textContent = newjob;
}

// Connect the handler to the form:
// it will watch the submit event
formElement.addEventListener('submit', formSubmitHandler);
