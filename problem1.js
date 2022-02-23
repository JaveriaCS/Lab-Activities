//1:
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