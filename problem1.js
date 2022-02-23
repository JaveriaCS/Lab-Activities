//1:
var num = 23617;
var k =4;
// Convert integer into string
var temp=num.toString();
var kthdigit = temp.charAt(temp.length - k)
console.log("kth digit of string is : "+" "+kthdigit)
