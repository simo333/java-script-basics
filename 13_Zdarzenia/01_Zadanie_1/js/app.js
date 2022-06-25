const parents = document.querySelectorAll(".parent");
console.log(parents);

parents.forEach(function (parent) {
   parent.addEventListener("mouseenter", function () {
       console.log(this.firstElementChild);
       this.firstElementChild.style.display = "block";
   });
   parent.addEventListener("mouseleave", function () {
       console.log(this.firstElementChild);
       this.firstElementChild.style.display = "none";
   });
});