const form = document.querySelector("#contactForm");
const yourName = document.querySelector("#yourName");
const yourNameError = document.querySelector("#yourNameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

function validateForm(event) {
  event.preventDefault();

  if (yourName.value.trim().length > 0) {
    yourNameError.style.display = "none";
  } else {
    yourNameError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  const btn = document.querySelector(".submitButton");
  const successMsg = document.querySelector(".formSubmitted");

  btn.onclick = function formSubmitted() {
    btn.style.opacity = 0.6;
    successMsg.innerHTML +=
      "Thank you for your inquiry. We will get back to you within 24 hrs!";
  };
}

form.addEventListener("submit", validateForm);

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
