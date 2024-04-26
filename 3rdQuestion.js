/*3.Write a JavaScript function that reverses a number.
Example x = 32243;
Expected Output : 34223 */



let x=32243;

function reverse_number(x){
    let num=0
    while(x!==0){

    let remainder=x%10;
    num=num*10+remainder;

    x=Math.floor(x/10);
 }

    return num


}

console.log(reverse_number(x));



