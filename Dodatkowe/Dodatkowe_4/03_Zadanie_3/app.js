document.addEventListener("DOMContentLoaded", function () {
   const buttons = document.querySelectorAll("button");
   buttons.forEach(function (button) {
      button.addEventListener("click", function () {
          const div = document.querySelector("#container");
          div.innerText = button.dataset.text;
      });
   });
});