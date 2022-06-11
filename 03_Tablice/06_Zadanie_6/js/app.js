function getEvenAverage(array) {
    let filteredArray = array.filter(function (el, idx, array) {
        return el % 2 === 0;
    });

    // if(filteredArray.length === 0) {
    //     return null;
    // }
    return filteredArray.length? filteredArray.reduce(function (a, b) {
        return a + b;
    }) / filteredArray.length : null;
}

console.log(getEvenAverage([1, 2, 3, 4, 5, 6, 7]));
console.log(getEvenAverage([1, 1, 1, 1]));
console.log(getEvenAverage([2, 8, 3, 7, 4]));