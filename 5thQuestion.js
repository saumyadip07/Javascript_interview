/*
5.Write a JavaScript function that returns a string that has letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
*/

let str='webmaster'
let ascii=[]
for(let i in str){
    ascii.push(str.charCodeAt(i));
}

ascii.sort((a,b)=>{

    return a-b
})


let alphabetic_str=""
for(let i of ascii){
    let char=String.fromCharCode(i)
     alphabetic_str+=char
}
console.log(alphabetic_str);

