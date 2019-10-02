//modal
const singUpBtn = document.getElementById("SingUp");
const form = document.getElementById("form");
const closeBtn = document.querySelector(".closeModal");

// validator
const upper = document.querySelector(".upper");
const passwordField = document.querySelector(".password");
const lower = document.querySelector(".lower");
const number = document.querySelector(".number");
const lengthStr = document.querySelector(".length");

console.log(lengthStr);
//password validator

passwordField.onblur = function() {
  var textToCheck = passwordField.value;
  console.log(textToCheck.length);
  if (!textToCheck.match(/[A-Z]/g)) {
    upper.style.display = "block";
  }
  if (!textToCheck.match(/[a-z]/g)) {
    lower.style.display = "block";
  }
  if (!textToCheck.match(/[0-9]/g)) {
    number.style.display = "block";
  }
  if (textToCheck.length < 8) {
    lengthStr.style.display = "block";
  }
};
passwordField.onfocus = function() {
  passwordField.value = "";
  upper.style.display = "none";
  lower.style.display = "none";
  number.style.display = "none";
  lengthStr.style.display = "none";
};

function modal(e) {
  singUpBtn.style.display = "none";
  form.style.display = "block";
  closeBtn.style.display = "block";
}
function hideModal(e) {
  form.style.display = "none";
  singUpBtn.style.display = "block";
  closeBtn.style.display = "none";
}
function youClickedBackground(e) {
  if (e.target.hasAttribute("body")) {
    // console.log("ok")
  }
}

singUpBtn.addEventListener("click", modal);
// window.addEventListener("click",youClickedBackground)
closeBtn.addEventListener("click", hideModal);

window.onclick = function(event) {
  if (event.target == form) {
    form.style.display = "block";
  }
};
// nasuchiwanie na wcisniety klawisz
// za kazdym razem sprawdzam czy input zawiera
// mala liter
//duzo litere
// numer
//minium 8 znakow
//jesli nie to dynamicznie to pokazuje w spanie
