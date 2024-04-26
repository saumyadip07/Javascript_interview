// 2.Write a JavaScript program to remove specified elements from the right of a given array of elements.?


let arr=[1,2,3,4,5,6,2,3,10,25]

let elements=[2,3]
remove_from_last(arr,elements)

function remove_from_last(arr,elements){

    for(let element of elements){
    let last_index=arr.lastIndexOf(element)

    arr.splice(last_index,1)
    }
    console.log(arr);
}