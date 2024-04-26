// 11.Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not?

function prime_or_not(num){
    let flag=true;

    for(let i=2;i<num;i++){
        if(num%i===0){
            flag=false
            break;
        }
    }

    if(flag){
        console.log("Prime");
    }
    else{
        console.log("Not Prime");
    }
}

prime_or_not(12)