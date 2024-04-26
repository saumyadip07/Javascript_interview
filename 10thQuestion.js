//  Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Class'
// Expected Output : 'Development'

let str="Web Development Class"

function longest_word(str){

    let arr=str.split(" ")
    let longest="";
    for(let word of arr){
         if(word.length>longest.length){
            longest=word
         }
    }

    return longest
}

console.log(longest_word(str))