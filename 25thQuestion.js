/*25.Write a JavaScript program to perform a binary search.
Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
Sample array :
var items = [1, 2, 3, 4, 5, 7, 8, 9];
Expected Output :
console.log(binary_Search(items, 1)); //0
console.log(binary_Search(items, 5)); //4 */



var items = [1, 2, 3, 4, 5, 7, 8, 9];

function binary_Search(items,key){
     let left=0;
     let right=items.length-1
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(items[mid]===key){
            return mid;
        }
        if(items[mid]<key){
            left=mid+1
        }
        else{
            right=mid-1
        }
    }
    return -1;


}

console.log(binary_Search(items,8));
