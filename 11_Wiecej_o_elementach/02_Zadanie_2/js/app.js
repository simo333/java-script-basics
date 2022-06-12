/*
  Poniżej napisz kod rozwiązujący zadania
 */
const sectionDivs = document.querySelectorAll("div.card-body");
sectionDivs[1].querySelector(".edge").style.backgroundImage = "url(\"./img/edge.jpg\")";
sectionDivs[2].querySelector(".firefox").style.backgroundImage = "url(\"./img/firefox.jpg\")";

sectionDivs[1].querySelector("a").setAttribute("href", "https://www.microsoft.com/pl-pl/edge?r=1");
sectionDivs[2].querySelector("a").setAttribute("href", "https://www.mozilla.org/pl/firefox/new/");
sectionDivs[2].querySelector("a").innerText = "Firefox";

sectionDivs[0].querySelector(".chrome").style.width = "100px";
