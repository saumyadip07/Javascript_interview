// 14.Write a JavaScript conditional statement to find the largest of five numbers.


function largest(...num){
    let largest=0
    for(let i of num){
        if(i>largest){
            largest=i
        }
    }

    return largest
}

let result=largest(14,52,31,11,2)
console.log(`Largest number is ${result}`);