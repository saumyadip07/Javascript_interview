// 34.Write a JavaScript program to convert an asynchronous function to return a promise.


let promise=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        let result=true
        if(!result){
            resolve("The result is promising")
        }
        else{
            reject("The result is not promising")
        }
    },1000)
})

promise.then((res)=>{
   
     console.log(res);
}).catch((err)=>{
    console.log(err);
})