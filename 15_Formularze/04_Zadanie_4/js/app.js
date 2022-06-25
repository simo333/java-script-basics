const form = document.querySelector("form");
const team1 = document.querySelector("#team1");
const team2 = document.querySelector("#team2");
const points1 = document.querySelector("#points1");
const points2 = document.querySelector("#points2");
const table = document.querySelector("table");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (team1.value !== team2.value && points1.value >= 0 && points2.value >= 0) {
        let tr = document.createElement("tr");
        let tdTeam1 = document.createElement("td");
        tdTeam1.innerText = team1.value;
        let tdTeam2 = document.createElement("td");
        tdTeam2.innerText = team2.value;
        let tdPoints = document.createElement("td");
        tdPoints.innerText = points1.value + " - " + points2.value;
        tr.append(tdTeam1, tdTeam2, tdPoints);
        table.appendChild(tr);
        console.log("Correct");
    }
});