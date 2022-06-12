const links = document.querySelector(".links").querySelectorAll("li");

function getDataInfo(elements) {
    console.log(elements);
    return Array.from(elements).map(function (li) {
        return li.dataset.color;
    });
}

console.log(getDataInfo(links));