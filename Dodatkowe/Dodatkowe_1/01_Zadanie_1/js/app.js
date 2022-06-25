function getNumber(element, array) {
    if(array.includes(element)) {
        return true;
    }
    return false;
}

console.log(getNumber(5, [1,2,5]));
console.log(getNumber(5, [1,2,3,4]));