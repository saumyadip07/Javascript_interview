// 20.Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )


var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3,3,3];

let count=0
let prev_count=0
let val=arr1[0]
for(let i=0;i<arr1.length;i++){
    count=1
    for(let j=i+1;j<arr1.length;j++){
        if(arr1[i]===arr1[j]){
            
            count++;
        }

        if(count>prev_count){
            val=arr1[i]
            prev_count=count;
        }
    }
}

console.log(`${val} has most frequesncy of ${prev_count}`);