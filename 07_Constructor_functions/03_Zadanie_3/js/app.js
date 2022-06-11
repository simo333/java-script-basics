function Calculator() {
    this.history = [];
}

Calculator.prototype.add = function (num1, num2) {
    let result = num1 + num2;
    this.history.push(`Added ${num1} to ${num2} got ${result}`);
    return result;
};
Calculator.prototype.multiply = function (num1, num2) {
    let result = num1 * num2;
    this.history.push(`Multiplied ${num1} with ${num2} got ${result}`);
    return result;
};
Calculator.prototype.subtract = function (num1, num2) {
    let result = num1 - num2;
    this.history.push(`Subtracted ${num1} from ${num2} got ${result}`);
    return result;
};
Calculator.prototype.divide = function (num1, num2) {
    if(num2 === 0) {
        return null;
    }
    let result = num1 + num2;
    this.history.push(`Divided ${num1} by ${num2} got ${result}`);
    return result;
};
Calculator.prototype.printOperations = function () {
    console.log("Operations history:")
    this.history.forEach(function (element) {
        console.log(element);
    });
};
Calculator.prototype.clearOperations = function () {
    this.history = [];
}

let calc = new Calculator();
calc.add(1,2);
calc.multiply(1,2);
calc.subtract(1,2);
calc.divide(1,2);
calc.printOperations();
calc.clearOperations();
calc.printOperations();
console.log(calc.divide(1,0));