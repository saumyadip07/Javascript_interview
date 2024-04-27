// 27.Write a JavaScript program to find duplicate values in a JavaScript array

let array=[1,2,3,1,2,'a','b','a',5,6,7,8,10]

let duplicate_values=array.filter((item,index)=>{

    return array.indexOf(item)!==index
})

console.log(duplicate_values);