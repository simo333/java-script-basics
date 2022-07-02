const menu = document.querySelector("#menu");

function getDataInfo(element) {
    const lis = document.querySelectorAll("li");
    const data = [];
    lis.forEach(function (li) {
        data.push(li.dataset.info);
    });
    return data;
}

console.log(getDataInfo(menu));

const main = document.querySelector("#main-container");

function getElementClass(element) {
    return Array.of(element.classList);
}

console.log(getElementClass(main));

const pinkElement = document.querySelectorAll(".pink-color");

function getElementText(element) {
    return element.innerText;
}

pinkElement.forEach(function (element) {
    console.log(getElementText(element));
});

const images = document.querySelectorAll("image");
function getElementAlt(elements) {
    const result = [];
    elements.forEach(function (element) {
       result.push(element.alt);
    });
    return result;
}

console.log(getElementAlt(images));

const links = document.querySelectorAll(".my-link");
function getElementHref(elements) {
    const result = [];
    elements.forEach(function (element) {
        result.push(element.href);
    });
    return result;
}

console.log(getElementHref(links));