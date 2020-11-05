// Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. 
// The frequency of values must be the same. For example:
//same([1, 2, 3], [4, 1, 9])  => true
//same([1, 2, 3], [1, 9])  => false
//same([1, 2, 1], [4, 4, 1])  => false (must be same frequency) 
//same([1, 2, 1], [4, 1, 1])  => true  





// ANAGRAMS. An example:
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// validAnagram(‘aaz’, ‘zza’) - false
// validAnagram(‘anagram’, ‘nagaram’) - true
// validAnagram(‘awesome’, ‘awesome’) - false

// So take two strings and compare if they contain same 
function isAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    let frequencyCounter1 = {} // creating two objects
    let frequencyCounter2 = {}

    for(let val of str1){//loping through each val
        if(frequencyCounter1[val]){
            frequencyCounter1[val] += 1; 
        }else{
            frequencyCounter1[val] = 1; 
        }
    }

    for(let val of str2){//loping through each val
        if(frequencyCounter2[val]){
            frequencyCounter2[val] += 1; 
        }else{
            frequencyCounter2[val] = 1; 
        }
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    // main logic
    for(let key in frequencyCounter1){ // we looping over the object 1
        if(!(key in frequencyCounter2)){   // if key in counter1 is a key in counter2 
            return false
        }
        if(frequencyCounter2[key] !== frequencyCounter1[key]){ // here we checking if the values corespond
            return false
        }
    }
    return true

}

isAnagram('anagram', 'nagaram');
isAnagram('aaz', 'zza');
isAnagram('awesome', 'awesom');
