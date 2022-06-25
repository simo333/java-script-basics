const form = document.querySelector("form");
const email = document.querySelector("#email");
const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const pw1 = document.querySelector("#pass1");
const pw2 = document.querySelector("#pass2");
const agree = document.querySelector("#agree");
const errorMessage = document.querySelector("#error-message");
const successMessage = document.querySelector("#success-message");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let error = "";
    if (!email.value.includes("@")) {
        error += "Email musi posiadać znak @\n";
    }
    if (name.value.length <= 2) {
        error += "Twoje imię jest za krótkie\n";
    }
    if (surname.value.length <= 2) {
        error += "Twoje nazwisko jest za krótkie\n";
    }
    if (!pw1.value || (pw1.value !== pw2.value)) {
        error += "Hasła nie są takie same lub puste\n";
    }
    if (!agree.checked) {
        error += "Musisz zaakceptować warunki";
    }

    if (error) {
        errorMessage.classList.remove("d-none");
        successMessage.classList.add("d-none");
        errorMessage.innerText = error;
    } else {
        errorMessage.classList.add("d-none");
        successMessage.classList.remove("d-none");
        successMessage.innerText = "Formularz wysłany";
    }
});