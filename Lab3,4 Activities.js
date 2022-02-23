// 1:
function kthDigitFromLast(n, k) {
// If k is less than equal to 0
    if (k <= 0) {
        console.log(-1);
        return;
    }
// Convert integer into string
    var temp = String(n);
// If k is greater than length of the
    // string temp
    if (k > temp.length) {
        console.log(-1);
    }
// Print the k digit from last
    else {
        var req = temp.charAt(temp.length - k)
        // Convert to number again
        console.log(Number(req));
    }
}
var n = 23617;
var k = 4;
// Function call
kthDigitFromLast(n, k);


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

//Activity #3:

var input = 23617;
var sum1 = 0;
var arr = input
    .toString()
    .split('');
var evens = arr.filter(x => x % 2 === 0);
console.log(evens);
//

//Activity #4

for (var n = 0; n <= 10; n++) 
{
    console.log("number:"+" " + n +" "+ "square:"+" "+  n * n +" "+ "cube:" + " "+ n * n * n );
}

// Activity #5:
//part b:
function reverse(n) {
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(Number(reverse(32243)));

//part a:
var str = "Beenish Mustajab";
for (var i = 0; i < str.length; i++) {
//var i=0;  
    if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i'
        || str.charAt(i) == 'o' || str.charAt(i) == 'u' || str.charAt(i) == 'A' ||
        str.charAt(i) == 'E' || str.charAt(i) == 'I' || 
        str.charAt(i) == 'O' || str.charAt(i) == 'U') {
            console.log("The leftmost vowel is :" +" " +str.charAt(i) );
            var pos = i + 1;
            console.log("The position of the leftmost vowel " + str.charAt(i) + " is:" + pos + "\n");
            
        }
    }



// Activity #Q6:

let value1 = Math.random() * 10;
//var guess_number = 3;
var guess_number = 9;
var inp = 6;
if (inp == guess_number) { //((guess_number >= 1 || guess_number <= 10)) {
    console.log('YOU WIN');
} 
else {
    console.log('Not Matched');
}

// Activity #7:

function first_last_1(nums) {
    var end_pos = nums.length - 1;
    return nums[0] == 10 || nums[end_pos] == 10;
}
console.log(first_last_1([10, 5]));
console.log(first_last_1([1, 3, 5]));
console.log(first_last_1([2, 4, 6, 10]));

// Activity #8:
function alphabetical_order(str) {
    return "In alphabetical_order:"+" "+" "+str.split('').sort().join('');
    
}
console.log(alphabetical_order("comsats"));



    