const list = document.querySelector(".list");
const btnPrev = document.querySelector("#prev");
const btnNext = document.querySelector("#next");
let fetchedData = null;
function getPokemons(url) {
    if(url === undefined) {
        url = "https://pokeapi.co/api/v2/pokemon";
    }
    fetch(url)
        .then(function (res) {
            if(res.ok) {
                return res.json();
            }
            throw new Error("Fetching pokemons failed.");
        })
        .then(function (data) {
            fetchedData = data;
            checkIfSiblingPageNull();
            console.log(fetchedData);
            fetchedData.results.forEach(function (pokemon) {
                const li = document.createElement("li");
                li.innerText = pokemon.name;
                list.append(li);
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
getPokemons();

btnPrev.addEventListener("click", function () {
    list.innerHTML = "";
    getPokemons(fetchedData.previous);
});
btnNext.addEventListener("click", function () {
    list.innerHTML = "";
    getPokemons(fetchedData.next);

});

function checkIfSiblingPageNull() {
    btnPrev.disabled = fetchedData.previous === null;
    btnNext.disabled = fetchedData.next === null;
}