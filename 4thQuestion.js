// Write a JavaScript function that checks whether a passed string is a palindrome or not?

let str="nitin"


function palindrome(str){
let reverse_str=str.split("").reverse().join('')

if(str===reverse_str){
    console.log("Palidrome");
}
else{
    console.log("Not Palindrome");
}
}

palindrome(str)