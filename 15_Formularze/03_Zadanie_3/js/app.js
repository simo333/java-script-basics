const form = document.querySelector("form");
const images = document.querySelectorAll("img");
const select = document.querySelector("select");
document.addEventListener("DOMContentLoaded", function () {
    images[1].classList.add("d-none");
    images[2].classList.add("d-none");
});

form.addEventListener("submit", function (e) {
    e.preventDefault();
    for (let i = 0; i < images.length; i++) {
        if(i === select.selectedIndex) {
            images[select.selectedIndex].classList.remove("d-none");
            continue;
        }
        images[i].classList.add("d-none");
    }
});