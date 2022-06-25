const submitBtn = document.querySelector("#add");
const ordersTable = document.querySelector("#orders");

const orderId = document.querySelector("#orderId");
const item = document.querySelector("#item");
const quantity = document.querySelector("#quantity");

submitBtn.addEventListener("click", function () {
    let newEntry = document.createElement("tr");

    let tdId = document.createElement("td");
    tdId.innerText = orderId.value;
    let tdItem = document.createElement("td");
    tdItem.innerText = item.value;
    let tdQuantity = document.createElement("td");
    tdQuantity.innerText = quantity.value;

    newEntry.appendChild(tdId);
    newEntry.appendChild(tdItem);
    newEntry.appendChild(tdQuantity);
    ordersTable.appendChild(newEntry);
});
