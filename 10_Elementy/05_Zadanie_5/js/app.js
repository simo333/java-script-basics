const childElements = document.querySelector(".offers").querySelectorAll("div, h2, p");

function getTags(elements) {
    return Array.from(elements).map(function (element) {
        return element.tagName;
    })
}

console.log(getTags(childElements));