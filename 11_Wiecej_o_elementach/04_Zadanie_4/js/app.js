/*
  Poniżej napisz kod rozwiązujący zadania
 */
document.querySelector(".exercise ul").classList.add("menu");
document.querySelectorAll(".exercise li").forEach(function (el) {
    el.classList.add("menuElement");
});
document.querySelectorAll(".error").forEach(function (el) {
    el.classList.remove("error");
});