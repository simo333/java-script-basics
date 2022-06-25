const divs = document.querySelectorAll("div");
console.log(divs);
divs.forEach((div) => {
   div.addEventListener("click", function () {
       console.log(div);
    this.style.background = "#" + Math.floor(Math.random() * 16777215).toString(16);
   });
});