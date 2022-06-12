const foods = [];

class Food {
  constructor(name, protein, carbs, fat) {
    this.name = name;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
  }
}

class FastFood extends Food {

}

class FatFreeFood extends Food {
}

function getValuesFromForm() {
  const name = document.querySelector("#name").value;
  const proteins = document.querySelector("#proteins").value;
  const carbs = document.querySelector("#carbs").value;
  const fat = document.querySelector("#fat").value;
  return [name, proteins, carbs, fat];
}

function countCalories(protein, carbs, fat) {
  return protein * 4 + carbs * 4 + fat * 9;
}

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(getValuesFromForm());
  let valuesFromForm = getValuesFromForm();
  let newFood;
  if(countCalories(valuesFromForm[1], valuesFromForm[2], valuesFromForm[3]) > 250) {
    newFood = new FastFood(valuesFromForm[0], valuesFromForm[1], valuesFromForm[2], valuesFromForm[3]);
    foods.push(newFood);
  } else {
    newFood = new FatFreeFood(valuesFromForm[0], valuesFromForm[1], valuesFromForm[2], valuesFromForm[3]);
    foods.push(newFood);
  }
  console.clear();
  foods.forEach(function (food) {
    console.log(food);
  });
});



