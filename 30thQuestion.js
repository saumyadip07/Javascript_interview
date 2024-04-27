// 30.Write a JavaScript function that merges two arrays and removes all duplicate elements.

let a=[1,2,3,4,5,6,7,8,9,10]
let b=[5,6,7,8,9,10,11,12,13,14,15]

function merge_two_Array(a,b){

let c=[...a,...b]



let arr=c.filter((item,index)=>{
 
     return c.indexOf(item)===index
})
return arr

}

console.log(merge_two_Array(a,b));