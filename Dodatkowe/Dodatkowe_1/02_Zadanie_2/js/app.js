function addTheSameNumbers(arg, arr) {
    let sum = 0;
    arr.forEach((el) => {
        if (arg === el) {
            sum += el;
        }
    });
    if (arg !== 0 && sum === 0) {
        return null;
    }
    return sum;
}

console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));
console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]));
console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]));
console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]));