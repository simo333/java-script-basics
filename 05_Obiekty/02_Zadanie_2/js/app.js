const timeMachine = {
    shape: "sh1",
    model: "mod",
    run(place, date) {
        console.log(`Przenieś się do ${place} w czasie: ${date}`);
    }
}

console.log(timeMachine["shape"]);
console.log(timeMachine.model);
timeMachine.run("miejsce", 1996);