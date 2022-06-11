function addArrays(arr1, arr2) {
    if(arr1.length >= arr2.length) {
        return arr1.map(function (element, index){
            if(arr2[index] == null){
                return element;
            }
            return element + arr2[index];
        });
    }
    return arr2.map(function (element, index){
        if(arr1[index] == null){
            return element;
        }
        return element + arr1[index];
    });
}

console.log(addArrays([4,0,1,3,4], [1,9,6,7,8,17]));
console.log(addArrays([8,3,22], [1,3,2]));
console.log(addArrays([2,3,1,5,3,5], [3,1,76,1]));