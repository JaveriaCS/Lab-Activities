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
        console.log("The leftmost vowel is :" + " " + str.charAt(i));
        var pos = i + 1;
        console.log("The position of the leftmost vowel " + str.charAt(i) + " is:" + pos + "\n");

    }
}