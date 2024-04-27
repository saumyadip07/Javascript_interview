// 28.Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

let array = [NaN, 0, 15, false, -22, '',undefined, 47, null]
function remove_falsy(array){

     let new_array=array.filter((item)=>{
       if(item!==NaN || item!==0 || item!=="" || item!==false || item!==undefined || item!==null){
        return item
       }
    
     })

     return new_array;
}
let result=remove_falsy(array)
array=result;
console.log(array);