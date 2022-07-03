function concatArray(array1, array2) {
    array2.forEach(function (element) {
        array1.push(element);
    });
    return array1;
}

console.log(concatArray([1,3], [3,5]));