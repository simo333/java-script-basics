const home = document.getElementById("home");
const children = document.querySelector(".offers").querySelectorAll("div, h2, p");
const ban = document.querySelector(".ban");
const someBlocks = document.querySelectorAll(".block");
const listElements = document.querySelector(".links").querySelectorAll("li");

console.log(home);
for (let i = 0; i < children.length; i++) {
    console.log("tag: " + children[i].tagName);
    console.log("class: " + children[i].className);
}
console.log(children);
console.log(ban);
for (let i = 0; i < someBlocks.length; i++) {
    console.log("tag: " + someBlocks[i].tagName);
    console.log("class: " + someBlocks[i].className);
}
for (let i = 0; i < listElements.length; i++) {
    console.log("tag: " + listElements[i].tagName);
    console.log("class: " + listElements[i].className);
}