const menuLi = Array.from(document.querySelector("ul").children);
console.log(menuLi);

menuLi.forEach(function (li) {
    li.addEventListener("mouseover", function () {
        const sublistUl = li.querySelector("ul");
        if (sublistUl !== null) {
            sublistUl.style.display = "block";
        }
    });
    li.addEventListener("mouseout", function () {
        const sublistUl = li.querySelector("ul");
        if (sublistUl !== null) {
            sublistUl.style.display = "none";
        }
    });
});