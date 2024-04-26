// 8.Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4


let arr=[5,4,3,2,1]

function find_Second(arr){
    arr.sort((a,b)=>{
         return a-b
    })

    let second_lowest=arr[1];
    let second_greatest=arr[arr.length-2]

    let result=[];
    result.push(second_lowest,second_greatest)

    return result.toString()
}

console.log(find_Second(arr))

