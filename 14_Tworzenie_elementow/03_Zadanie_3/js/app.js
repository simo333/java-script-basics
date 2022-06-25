const addButton = document.getElementById("add");
const menu = document.getElementById("menu");
const li = document.querySelector("li");
let counter = 1;
addButton.addEventListener("click", function () {
    let newLi = li.cloneNode();
    newLi.innerText =
        "Element " + ++counter + " - w chwili dodania było " + (counter - 1) + " elementów";
    menu.appendChild(newLi);
})
