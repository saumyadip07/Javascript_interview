// 17.Write a JavaScript program to find the Armstrong numbers of 3 digits

let number=153;
let num=number
// console.log(num);
let count=0;
while(num!=0){
    
    count=count+1
    num=Math.floor(num/10)
}

num=number;
let remain=0
let result=0

while(num!=0){
    remain=num%10;
  

    result=result+Math.pow(remain,count)

    num=Math.floor(num/10);
}

if(result===number){
    console.log(`${number} is an armstrong number`);
}
else{
    console.log(`${number} is not an armstrong number`);
}