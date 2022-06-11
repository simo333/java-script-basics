function multiply(array) {
    return array.reduce(function (a, b) {
        return a * b;
    });
}


console.log(multiply([1, 2, 3, 4, 5, 6, 7]));
console.log(multiply([1, 1, 1, 1]));
console.log(multiply([2, 8, 3, 7]));