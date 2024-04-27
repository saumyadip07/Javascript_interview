// 37. Write a JavaScript program to get the minimum value of an array, after mapping each element to a value using the provided function


let arr=[100,150,45,32,165]

let small=arr.reduce((acc,curr)=>{
   
    val=curr<acc?curr:acc
    
    return val
},)

console.log(small);