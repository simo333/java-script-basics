const windowWidth = document.getElementById("windowWidth");
const windowHeight = document.getElementById("windowHeight");
window.addEventListener("load", function () {
    windowWidth.innerText = window.innerWidth + "px";
    windowHeight.innerText = window.innerHeight + "px";
});
window.addEventListener("resize", function () {
    windowWidth.innerText = window.innerWidth + "px";
    windowHeight.innerText = window.innerHeight + "px";
});