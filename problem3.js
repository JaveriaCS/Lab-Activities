//Activity #3:

var input = 23617;
var sum1 = 0;
var arr = input
    .toString()
    .split('');
var evens = arr.filter(x => x % 2 === 0);
console.log(evens);

console.log("sum of even numbers: ");
var sum2 = evens.map(Number).reduce(function (a, b) {
    console.log("a=" + a + " , " + "b=" + b + "\n" + "a+b= " + (a + b))
    return (a + b)
}, 0)
console.log("Result: ", sum2)