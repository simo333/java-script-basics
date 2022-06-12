function getRandomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

const buttons = document.querySelectorAll("a");

buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        this.parentElement.style.background = getRandomColor();
    });
});