const stairs = {
    step: 0,

    up() {
        this.step += 1;
    },
    down() {
        this.step -= 1;
    },
    printStep() {
        return this.step;
    }
}

stairs.up();
stairs.up();
stairs.up();
stairs.down();
console.log(stairs.printStep()); // 2