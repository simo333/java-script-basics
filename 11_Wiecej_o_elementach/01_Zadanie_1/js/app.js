const lis = document.querySelectorAll(".exercise li");
lis.forEach(function (li, idx) {
    if(idx % 2 === 0) {
        li.style.background = "#9e9e9e";
    }
})

lis[4].classList.add("big");
lis.forEach(function (li, idx) {
    if(idx % 3 === 0) {
        li.style.textDecoration = "underline";
    }
})