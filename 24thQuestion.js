// 24.Write a JavaScript program to find the leap years in a given range of years.



for(let year=2000;year<=2020;year++){

if((year%4===0 && year %100!==0)|| (year%400===0))
{
    console.log(`${year} is a leap year`);
}
else{
    console.log(`${year} is not a leap year`);
}
}