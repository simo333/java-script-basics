function getMissingElement(array) {
    let prevNumb = array[0];
    for (let i = 1; i < array.length; i++) {
        if ((array[i] - prevNumb) !== 1) {
            return prevNumb + 1;
        }
        prevNumb = array[i];
    }
    return null;
}

console.log(getMissingElement([1, 2, 3, 4, 5, 6, 7]));
console.log(getMissingElement([6, 7, 8, 10, 11, 12, 13, 14, 15]));
console.log(getMissingElement([-4, -3, -2, 0, 1, 2, 3, 4]));
