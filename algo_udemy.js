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
        if(val in frequencyCounter1){
            frequencyCounter1[val] += 1;
        }else{
            frequencyCounter1[val] = 1;
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
