function factors(numb) {
    if (!(numb > 0)) {
        return [];
    }
    let factors = [];
    for (let i = 1; i <= numb; i++) {
        if (numb % i === 0) {
            factors.push(i);
        }
    }
    return factors.sort(function (a, b) {
        return b - a;
    });
}

console.log(factors(54));
console.log(factors(2));