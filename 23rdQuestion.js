// 23.Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

let arr=[1,2,3,'a',2,5,6,'a',3,'A','b','B']
// let str=arr.toString()
// console.log(str);

let new_Arr=[...new Set(arr)]
console.log(new_Arr);


