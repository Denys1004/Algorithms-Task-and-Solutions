// Frequency Counter 
// The logic is, if we have 2 arrays or strings we braking them down to the objects and comparing them
// 1. From each array we creating objects, which tells us how many times each value is in that array (constructing one iteration over each array) 
// 2. Then we do one more loop over any object, and for each item we comparing if we have corresponding item in other object
// 3. We need to make sure that key from obj1 is an key in obj2, AND how many of this key we have in obj1 should be same qty in obj2


// Example 2:
// Given two strings, write a function to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema formed from iceman 
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram('awesome', 'awesom') // false

function validAnagram(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let val of arr1){
        if(val in frequencyCounter1){
            frequencyCounter1[val] +=1;
        }else{
            frequencyCounter1[val] =1;
        }
    }
    for(let val of arr2){
        if(val in frequencyCounter2){
            frequencyCounter2[val] +=1;
        }else{
            frequencyCounter2[val] =1;
        }
    }
    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false
        }
        if(frequencyCounter1[key] !== frequencyCounter2[key]){
            return false
        }
    }
    return true
}

validAnagram('anagram', 'nagaram') // true
validAnagram('awesome', 'awesomi') // false



