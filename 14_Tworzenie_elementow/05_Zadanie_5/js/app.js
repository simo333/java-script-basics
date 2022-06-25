const removeBtn = document.querySelector("#remove");
const list = document.querySelector("#list");

removeBtn.addEventListener("click", function () {
    Array.from(list.children).forEach(function (el) {
        el.remove();
    })
})