const mainDiv = document.getElementById("app");
const select = document.querySelector("#selectCountry");

function fetchHolidays() {
    fetch("https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country="
        + select.value)
        .then(function (res) {
            if(res.ok) {
                return res.json();
            }
            throw new Error("Fetching failed.");
        })
        .then(function (data) {
            console.log(data.holidays);
            const ul = document.createElement("ul");
            ul.classList.add("list");
            data.holidays.forEach(function (holiday) {
                const li = document.createElement("li");
                const h3Name = document.createElement("h3");
                h3Name.classList.add("holiday-name");
                h3Name.innerText = holiday.name;
                const h3Date = document.createElement("h3");
                h3Date.classList.add("holiday-date");
                h3Date.innerText = holiday.date;
                li.append(h3Name);
                li.append(h3Date);
                ul.append(li);
            });
            mainDiv.append(ul);
        })
        .catch(function (err) {
            console.log(err);
        });
}

select.addEventListener("change", function () {
    mainDiv.innerText = "";
    fetchHolidays();
});

fetchHolidays();