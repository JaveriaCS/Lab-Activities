//Activity #2:

var value = 23617;
sum = value
    .toString()
    .split('')
    .map(Number)
    .reduce(function (a, b) {
        return a + b;
    }, 0);

console.log(sum);