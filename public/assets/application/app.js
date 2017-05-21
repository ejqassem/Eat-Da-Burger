var burgerButton = document.getElementById("eat-burger-button");

var launchModal = function() {
  $('#myModal').modal('show');
}

burgerButton.addEventListener("click", launchModal);
