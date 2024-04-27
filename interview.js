// 1)Write a function that takes an array of numbers and returns a new array where each element is doubled.

// let arr=[1,2,3,4,5]

// function double(arr){
//     let doubleArr=arr.map((item)=>{
//           return item*2;
//     })
//     return doubleArr
// }

// console.log(double(arr));


// 2)Create a function that takes an array of numbers and returns a new array containing only the even numbers

// let arr=[1,2,3,4,5,6,7,8,9,10]

// function even_number(arr){
//     let even=arr.filter((item)=>{
//            return item%2==0
//     })
//     return even
// }

// console.log(even_number(arr));


// 3)Implement a function that calculates the sum of all the elements in an array using the reduce function.

// let arr=[1,2,3,4,5,6,7,8,9,10];

// function sum_of_All(arr){
//     let sum=arr.reduce((acc,curr)=>{
//           return acc+=curr
//     },0)

//     return sum
// }

// console.log(sum_of_All(arr));



// 4)Write a function that finds the maximum value in an array of numbers using the reduce function.

// let arr=[12,25,49,11,10,36]

// function maximumNumber(arr){
//     let maximum=arr.reduce((acc,curr)=>{
//            return curr>acc?curr:acc
//     },arr[0])
//     return maximum
// }

// console.log(maximumNumber(arr));


// 5)Implement a function that takes an array of numbers and returns a new array containing only the prime numbers using the filter function.

// let arr=[12,7,49,11,10,17]

// function primeNumbers(arr){
//     let prime=arr.filter((item)=>{
//           let flag=1;
//          for(let i=2;i<item;i++){
//               if(item%i==0){
//                 flag=0;
//                 break;
//               }
              
//          }
//          if(flag)
//          return item;
//     })
//     return prime
// }

// console.log(primeNumbers(arr));



// 6)Create a function that takes an array of objects and sorts them based on a specified property using the sort function.

// let cities = [
//     { name: 'Los Angeles', population: 3792621 },
//     { name: 'New York', population: 8175133 },
//     { name: 'Chicago', population: 2695598 },
//     { name: 'Houston', population: 2099451 },
//     { name: 'Philadelphia', population: 1526006 },
//     { name: 'India', population: 1626006 },
//     { name: 'California', population: 1726006 },
//     { name: 'Buston', population: 1826006 },
//     { name: 'Paris', population: 1926006 },
//     { name: 'France', population: 2026006 }
//   ];


// function sort_with_population(cities){
//    cities.sort((a,b)=>{
//       return a.population-b.population
//    })
   
// }

// sort_with_population(cities);
// console.log(cities);




// 7)Write a function that removes duplicate values from an array using the filter function.

// let arr=[1,5,8,3,5,1,6]

// function remove_dublicate(arr){
//     let removedArr=arr.filter((item,index)=>{
//           return arr.indexOf(item)===index
//     })
//     return removedArr
// }

// console.log(remove_dublicate(arr));



// 8)Write a function that accepts any number of arguments and returns their sum using the rest parameter.

// function sumation(...num){
//     let sum=0
//     for(let i of num){
//         sum+=i
//     }
//     return sum

// }

// console.log(sumation(1,5,6,7))



// 9)Create a function that takes any number of arguments (numbers) and calculates the average using the rest parameter.

// function average(...thisArg){
//     let sum=0;
//     let len=thisArg.length

//     for(let i of thisArg){
//         sum+=i
//     }

//     let avg=sum/len;
//     return avg

// }

// console.log(average(5,4,6,8,9));



// 10)Implement a function that takes a variable number of arguments and returns the largest number using the rest parameter.

// function largest(...values){
//     let maximum=0;
//     for(let i of values){
//         if(i>maximum){
//             maximum=i
//         }

//     }
//     return maximum
// }

// console.log(largest(5,4,6,88,1,336));



// 11)Write a function that takes a variable number of arrays as arguments and returns a single array containing all the elements from the input arrays, using the rest parameter.

// function mergeArrays(...arr){
//     let newArr=[...arr];
//      return newArr.flat(Infinity)
// }

// console.log(mergeArrays([1,2,3],[4,5,6],[7,8,9]))


// 12)Implement a function that takes a variable number of string arguments and returns an array containing only the strings with a length greater than a specified value using the rest

// function array_contains_str(...str){
//    let arr=str.filter((curr)=>{
  
//          return curr.length>7
//    },)

//     return arr;
// }

// console.log(array_contains_str("Maharastra","West Bengal","Bihar","Punjab","Uttar Pradesh"));



// 13)Edit in array of object  property without changing original array of object.

// let cities = [
//     { name: 'Los Angeles', population: 3792621 },
//     { name: 'New York', population: 8175133 },
//     { name: 'Chicago', population: 2695598 },
//     { name: 'Houston', population: 2099451 },
//     { name: 'Philadelphia', population: 1526006 },
//     { name: 'India', population: 1626006 },
//     { name: 'California', population: 1726006 },
//     { name: 'Buston', population: 1826006 },
//     { name: 'Paris', population: 1926006 },
//     { name: 'France', population: 2026006 }
//   ];


// let newCity=cities.map((city,index)=>{
   
//        return {name:city.name,population:index+1}

// })

// console.log(newCity);
// console.log(cities); 
`  `