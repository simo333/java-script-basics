function distFromAverage(array) {
    let avg = array.reduce(function (acc, cur) {
        return acc + cur; }) / array.length;
    let distance = array.map(function (el) {
        return Math.abs(el - avg);
    });
    console.log(distance)
}

distFromAverage([1, 2, 3, 4, 5, 6, 7]);
distFromAverage([1, 1, 1, 1]);
distFromAverage([2, 8, 3, 7]);