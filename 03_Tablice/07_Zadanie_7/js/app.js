function sortArray(array) {
    return array.sort(function (a, b) {
        return a - b;
    });
}

console.log(sortArray([145, 11, 3, 64, 4, 6, 10]));