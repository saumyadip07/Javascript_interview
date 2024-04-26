/*
6.Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5
*/

let str='The quick brown fox'


function count_vowel(str){
    let count=0
    for(let char of str){
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'||char==='A'||char==='e'||char==='I'||char==='O'||char==='U'){
            count++;
        }
    }

    return count
}

console.log(count_vowel(str))