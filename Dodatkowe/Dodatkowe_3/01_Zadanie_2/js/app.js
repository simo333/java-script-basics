const form = document.querySelector("form");
const checkboxes = form.querySelectorAll("input");
const price = document.querySelector("#price");
const utilButtons = document.querySelectorAll(".btn-secondary");
let addonsPrice = 0;
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            addonsPrice += Number(checkbox.dataset.price);
        }
        if (!checkbox.checked) {
            addonsPrice -= checkbox.dataset.price;
        }
        price.innerText = addonsPrice.toFixed(2) + "zł";
    });
});

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const totalPrice = document.querySelector(".order-info");
    totalPrice.innerText = "Do zapłaty: " + (addonsPrice + 35).toFixed(2) + "zł";
});

utilButtons[1].addEventListener("click", function () {
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });
    addonsPrice = 0;
    price.innerText = "0zł";
});

utilButtons[0].addEventListener("click", function () {
    addonsPrice = 0;
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = true;
        addonsPrice += Number(checkbox.dataset.price);
    });
    price.innerText = addonsPrice.toFixed(2) + "zł";
});
