const form = document.querySelector("form");
const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const address = document.querySelector("#address");
const checkbox = document.querySelector("#invoice");
const invoiceDiv = document.querySelector("#invoiceData");

document.addEventListener("DOMContentLoaded", function () {
   invoiceDiv.classList.add("d-none");
});

checkbox.addEventListener("change", function () {
    if(checkbox.checked) {
        invoiceDiv.classList.remove("d-none");
    } else {
        invoiceDiv.classList.add("d-none");
    }
});