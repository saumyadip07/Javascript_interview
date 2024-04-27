// 29. Write a JavaScript function to sort the following array of objects by title value.


let arrayOfObjects = [
    { title: "Zebra" },
    { title: "Apple" },
    { title: "Cat" },
    {title:"Robert"}
]




function sorting(arrayOfObjects){

return arrayOfObjects.sort((a,b)=>{
    
    if(a.title < b.title)
    return -1
    if(a.title>b.title)
    return 1
   return 0
})

}

console.log(sorting(arrayOfObjects));

