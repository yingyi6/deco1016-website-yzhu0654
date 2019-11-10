
// Get the modal for loging in 
var modalA = document.getElementById('modal-login');

// Get the modal for signing up
var modalB = document.getElementById('modal-signup');


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalB) {
    modalB.style.display = "none";
  }
  if (event.target == modalA) {
    modalA.style.display = "none";
  }
}


