const person = {
    name: "Szymon",
    age: 26,
    sayHello() {
        console.log("hello");
    }
}

console.log(person["name"]);
console.log(person["age"]);
person.sayHello()