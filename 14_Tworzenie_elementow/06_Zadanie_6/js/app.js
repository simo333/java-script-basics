const list1 = document.getElementById("list1");
const list2 = document.getElementById("list2");

list1.addEventListener("click", function (event) {
    let element = event.target;
    if(event.target.tagName === "STRONG") {
        element = event.target.parentElement;
    }
    list2.appendChild(element);
});

list2.addEventListener("click", function (event) {
    let element = event.target;
    if(event.target.tagName === "STRONG") {
        element = event.target.parentElement;
    }
    list1.appendChild(element);
});

