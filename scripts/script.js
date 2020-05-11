// Modal
let modal = document.querySelector(".popup");
let modalopen = document.querySelector(".edit-button")
let modalclose = document.querySelector(".popup__icon");

modalopen.onclick = function() {
  modal.style.display = "block";
}

modalclose.onclick = function() {
  modal.style.display = "none";
}
