// Frequency Counter 
// The logic is, if we have 2 arrays or strings we braking them down to the objects and comparing them
// 1. From each array we creating objects, which tells us how many times each value is in that array (constructing one iteration over each array) 
// 2. Then we do one more loop over any object, and for each item we comparing if we have corresponding item in other object
// 3. We need to make sure that key from obj1 is an key in obj2, AND how many of this key we have in obj1 should be same qty in obj2

// Example 1:
// *****************************************************************************************************************
// Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. 
// The frequency of values must be the same. For example:
//same([1, 2, 3], [4, 1, 9])  => true
//same([1, 2, 3], [1, 9])  => false
//same([1, 2, 1], [4, 4, 1])  => false (must be same frequency)
//same([1, 2, 1], [4, 1, 1])  => true 
function same(arr1, arr2){
    if(arr1.length !== arr2.length){ // if 2 arrays have a different length we don't need to compare
        return false;
    }
    let frequencyCounter1 = {} // creating two objects
    let frequencyCounter2 = {}
    // we looping through each array once and it’s going to count of frequency of individuals values in the arrays. For example:
    // frequencyCounter1 = {1:1, 9:1, 4:2, 11:1} it contains one number 1, two numbers four, one number nine, one number 11
    for(let val of arr1){//loping through each val
        //frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1  // adding 1 to frequencyCounter1 if val already there, otherwise initialise it to 1
        if(val in frequencyCounter1){
            frequencyCounter1[val] += 1;
        }else{
            frequencyCounter1[val] = 1;
        }
    }
    for(let val of arr2){
        // frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
        if(val in frequencyCounter2){
            frequencyCounter2[val] += 1;
        }else{
            frequencyCounter2[val] = 1;
        }
    }
    for(let key in frequencyCounter1){ // we looping over the object 1
        if(!(key ** 2 in frequencyCounter2)){   // if key squared in counter1 is a key in counter2 Ex: if count1 key 2, we asking is there a key 4 in count 2
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){ // here we checking if the values correspond: if we have two 2s in count1, we should have two 4s in count 2
            return false
        }
    }
    return true
}
same([1,2,3,2,5], [9,1,4,4,11])	



// Example 2:
// *****************************************************************************************************************
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


// Example 3:
// *****************************************************************************************************************
// Write a function called  sameFrequency. 
//Given two positive integers, find out if the two numbers have the same frequency of digits.
sameFrequency(3589578, 5879385) // true
sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false

function sameFrequency(num1, num2){
    num1 = num1.toString()
    num2 = num2.toString()
    if(num1.length !== num2.length){
        return false;
    }
    let obj1 = {};
    let obj2 = {};
    for(let i = 0; i<num1.length; i++){
        if(num1[i] in obj2){
            obj2[num1[i]] += 1;
        }else{
            obj2[num1[i]] = 1;
        }
    }

    for(let j = 0; j<num1.length; j++){
        if(num2[j] in obj1){
            obj1[num2[j]] += 1;
        }else{
            obj1[num2[j]] = 1;
        }
    }

    for(let key in obj1){
        if(!(key in obj2)){
            return false
        }
        if(obj1[key] !== obj2[key]){
            return false
        }
    }
    return true
}


// Example 4:
// *****************************************************************************************************************
// Implement a function called,  areThereDuplicates  which accepts a variable number of arguments, and checks whether there are any duplicates 
// among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

function areThereDuplicates() {
    let obj = {};

    for(let i in arguments){
        let value = arguments[i]
        if(value in obj){
            obj[value] += 1;
        }else{
            obj[value] = 1;
        }
    }

    for(let val in obj){
        if(obj[val] > 1){
            return true;
        }
    }
    return false;
}

areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true