// 38. Write a JavaScript program to create an object from the specified object, where all keys are in lowercase

let obj1={
    NAME:"Sam",
    ROLL:2,
    ADDRESS:"Kolkata"
}

let obj2=Object.assign(obj1);

console.log(obj2);

// for(let i in obj2){
//     obj2=i.toLowerCase()
// }

// console.log(obj2);

