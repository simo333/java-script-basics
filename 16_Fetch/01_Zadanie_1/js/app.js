const form = document.querySelector("form");
const input = document.querySelector("input");
const info = document.querySelector("section");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:" + input.value)
        .then(function (res) {
            if(res.ok) {
                console.log(res.url)
                return res.json();
            }
            throw new Error("Fetching failed.");
        })
        .then(function (data) {
            const h2 = document.createElement("h2");
            h2.innerText = data.items[0].volumeInfo.title;
            info.append(h2);
        })
        .catch(function (err) {
            console.log(err);
        });
});