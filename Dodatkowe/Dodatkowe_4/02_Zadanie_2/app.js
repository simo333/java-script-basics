document.addEventListener("DOMContentLoaded", function () {
   const divs = document.querySelectorAll(".color");
   divs.forEach(function (div) {
      div.addEventListener("mouseover", function () {
         div.innerHTML = div.dataset.text;
         div.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
      });

      div.addEventListener("mouseout", function () {
         div.innerHTML = "";
      });
   });
});
