document.addEventListener("DOMContentLoaded", function () {
    const pics = document.querySelectorAll("img");
    const hideButton = document.querySelector("#hideButton");
    const showButton = document.querySelector("#showButton");
    const input = document.querySelector("#tagInput");


    showButton.addEventListener("click", function () {
        const inputValue = input.value;
        input.value = "";
        pics.forEach(function (pic) {
            if(pic.dataset.tag.indexOf(inputValue) >= 0) {
                pic.classList.remove("invisible");
            } else {
                pic.classList.add("invisible");
            }
        });
    });
    hideButton.addEventListener("click", function () {
        const inputValue = input.value;
        input.value = "";
        pics.forEach(function (pic) {
            if(pic.dataset.tag.indexOf(inputValue) >= 0) {
                pic.classList.add("invisible");
            } else {
                pic.classList.remove("invisible");
            }
        });
    });
});

