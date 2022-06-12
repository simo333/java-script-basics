// Zadanie 1 - rozwiązywane z wykładowcą
// Znajdź i zapisz do zmiennych następujące elementy:

// Element o klasie first -> jego pierwsze dziecko -> jego trzecie dziecko.
// Element o id second -> jego rodzic -> jego czwarte dziecko.
// Element o atrybucie data-ex nastawionym na wartość third -> jego dziadek -> jego ostatnie dziecko -> jego pierwsze dziecko -> jego środkowe dziecko (żeby otrzymać środkowy element, podziel liczbę dzieci przez dwa i zaokrąglij w dół).
// Div o klasie forth -> jego rodzic -> jego pierwsze dziecko o tagu article -> jego drugie dziecko o tagu <p>.
// Wszystkie te elementy mają atrybut data-answer nastawiony na numer zadania, dla którego są odpowiedzią.

const first = document.querySelector(".first").firstElementChild.children[2];
console.log(first.dataset.answer);

const second = document.getElementById("second").parentElement.children[3];
console.log(second.dataset.answer);

const thirdChildrenStep =
    document.querySelector("[data-ex='third']").parentElement.parentElement
        .lastElementChild.firstElementChild.children;
const third = thirdChildrenStep[Math.floor(thirdChildrenStep.length / 2)];
console.log(third.dataset.answer);

const forth = document
    .querySelector(".forth")
    .parentElement.querySelector("article")
    .querySelectorAll("p")[1];
console.log(forth.dataset.answer);