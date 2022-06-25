const div = document.getElementById("box");
const globalXSpan = document.getElementById("globalX");
const globalYSpan = document.getElementById("globalY");
const localXSpan = document.getElementById("localX");
const localYSpan = document.getElementById("localY");
div.addEventListener("mousemove", (event) => {
    globalXSpan.innerText = event.clientX + "px";
    globalYSpan.innerText = event.clientY + "px";
    localXSpan.innerText = event.offsetX + "px";
    localYSpan.innerText = event.offsetY + "px";
});