// 1.Write a function that takes a string as input and returns the reverse of the string?

let str="Hello World";

function reverse(str){

    let arr=str.split('');
   let reverse_str= arr.reverse().join('')

   return reverse_str

}

console.log(reverse(str))











