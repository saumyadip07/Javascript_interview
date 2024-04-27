/*26.There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13]

*/
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
let sum=[];
let i,j=0

if(array1.length<array2.length){
    let newArr2=array2.slice(0,array1.length)
for( i=0,j=0;i<array1.length,j<newArr2.length;i++,j++){

     
       sum.push(array1[i]+array2[j])

    
}

newArr2=array2.slice(array1.length)

for(let i of newArr2)
sum.push(i)
}


else if(array2.length<array1.length){
    let newArr1=array1.slice(0,array2.length)
for( i=0,j=0;i<array1.length,j<newArr1.length;i++,j++){

     
       sum.push(array1[i]+array2[j])

    
}

newArr1=array1.slice(array2.length)

for(let i of newArr1)
sum.push(i)
}


console.log(sum);