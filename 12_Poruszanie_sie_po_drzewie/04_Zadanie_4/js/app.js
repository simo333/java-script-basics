const divs = document.querySelectorAll("div");
console.log(divs);

divs.forEach(function (div) {
    const lis = div.querySelectorAll("li");
    lis.forEach(function (li) {
        li.addEventListener("mouseover", function () {
            if(this === li.parentElement.firstElementChild) {
                this.style.background = "red";
            } else if(this === li.parentElement.lastElementChild) {
                this.style.background = "blue";
            } else {
                this.style.background = "green";
            }
        });
    });

});

