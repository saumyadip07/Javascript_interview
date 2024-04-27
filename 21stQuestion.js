// 21.Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.


let str='The Quick Brown Fox';
let strArr=str.split("");


let new_arr=strArr.map((char)=>{


      return char===char.toUpperCase()?char.toLowerCase():char.toUpperCase()
})


let new_str=new_arr.join("")
console.log(new_str);

