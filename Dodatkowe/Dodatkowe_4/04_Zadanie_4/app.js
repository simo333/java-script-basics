document.addEventListener("DOMContentLoaded", function () {
    const button1 = document.querySelector("#button-1");
    const button2 = document.querySelector("#button-2");
    const button3 = document.querySelector("#button-3");
    const ulShoppingList = document.querySelector("ul");

    button1.addEventListener("click", function () {
        const li = document.createElement("li");
        li.innerText = "Chleb";
        ulShoppingList.append(li);
    });

    button2.addEventListener("click", function () {
        ulShoppingList.lastElementChild.remove();
    });

    button3.addEventListener("click", function () {
        const li = ulShoppingList.children[1];
        if (li !== undefined) {
            const newLi = li.cloneNode(true);
            ulShoppingList.append(newLi);
        }
    });
});