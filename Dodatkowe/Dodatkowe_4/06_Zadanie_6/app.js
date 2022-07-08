document.addEventListener("DOMContentLoaded", function () {
   const ul = document.querySelector("ul");

   fetch("https://swapi.dev/api/starships")
       .then(function (res) {
          if(res.ok) {
              return res.json();
          }
       })
       .then(function (res) {
           const data = res.results;
           console.log(data);
           data.forEach(function (ship) {
              const h2 = document.createElement("h2");
              h2.innerText = ship.name;
              const h3 = document.createElement("h3");
              h3.innerText = ship.model;
              const li = document.createElement("li");
              li.append(h2,h3);
              ul.append(li);
           });
       })
       .catch(function (err) {
           console.log(err);
       });
});