const btnPrev = document.querySelector("#prevPicture");
const btnNext = document.querySelector("#nextPicture");
const liPictures = document.querySelectorAll("li");
let activeIndex = 0;

function changePhoto(param) {
    liPictures.item(activeIndex).classList.remove("visible");
    activeIndex += param;
    liPictures.item(activeIndex).classList.add("visible");
    checkIfSiblingPhotoExists();
}

function checkIfSiblingPhotoExists() {
    btnPrev.disabled = activeIndex === 0;
    btnNext.disabled = activeIndex === liPictures.length - 1;
}

btnPrev.addEventListener("click", function () {
    changePhoto(-1);
});
btnNext.addEventListener("click", function () {
    changePhoto(1);
});

changePhoto(0);