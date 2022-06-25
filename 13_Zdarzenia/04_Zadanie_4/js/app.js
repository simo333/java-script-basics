const buttons = document.querySelectorAll("button");
let counter = 0;
const counterSpan = document.querySelector("span");

function manageClicks() {
    counter += 1;
    counterSpan.innerText = counter;
}

buttons.forEach((button) => {
   button.addEventListener("click", manageClicks);
});

