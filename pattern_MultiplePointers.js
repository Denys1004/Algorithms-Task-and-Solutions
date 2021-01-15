// List:
// 1: Return first pair, where sum on numbers == 0;
// 2: How many unique values in the given array?
// 3: Which is the longest Substring without repeating characters?
// 4: Are there a pair of numbers, which average == to given number?
// 5: Are there a repeating values in given arguments?

// Multiple Pointers - used when you have sorted array (from low to hight) and you need to find matching pair.
// IMPORTANT! Array of numbers should be sorted!


// Example 1. Return first pair where sum on numbers == 0;
// *****************************************************************************************************************
// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where sum is 0.
// Return an array that includes both values that sum to zero undefined if a pair doesn't exist.
// sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
// sumZero([1, 2, 3]) // undefined
// The logic is to have two poiners (from left and from right)
// 1. Creating two poiners left and right
// 2. Loop while left less than right, comparing if sum of left and right is =0 
// 3. This two условия need in order poiners move towards center:
        //  If sum bigger than 0 - subtract 1 from the right
        //  If sum less than 0 - add 1 to left
function sumZero(arr){
    let left = 0;
    let right = arr.length-1;
    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum ===0){
            return [arr[left], arr[right]];
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])


// Example 2. How many unique values in the array
// *****************************************************************************************************************
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the arraly, but it will be sorted.
// countUniqueValues([1, 1, 1, 3]) //2
// countUniqueValues([1, 2, 3, 4, 5, 12 ,14, 17]) //8
// countUniqueValues([]) //0
// countUniqueValues([-2, -1, 0, 1]) //4
// The logic is to have 2 ponters (i and j), and we'll start from the beginning of the array, i on position 0, j - on position 1
//      i
//    [1, 1, 1, 2, 3, 3, 4, 4, 5, 6]
//          j
// 1. Now we comparing i and j af they are the same, if they are the same we move j one step forward. if the same - j again moving forward
//      i
//    [1, 1, 1, 2, 3, 3, 4, 4, 5, 6]
//                 j
// 2. Now when we comparing i and j - they are different, and the idea is to movi i one step forward and put j value on position i 
// So now i looking at 2, and we moving j forward to look the next value.
//          i
//    [1, 2, 1, 2, 3, 3, 4, 4, 5, 6]
//                     j
// 3. We moving with this logic and what happens is all unique values will be at the beginning of the array 
// and length of the unique values would be index of i + 1 (now its index 5 + 1 = 6, means we have 6 unique values)
//                         i
//    [1, 2, 3, 4, 5, 6, 4, 4, 5, 6]
//                                        j
function countUniqueValues(arr){
    let i = 0;
    for(var j=1; j<arr.length; j++ ) { // only j going through entire loop
        if(arr[i] !== arr[j]){ // if they not equal we moving i forward and put value of j into position of i, otherwise j will be moving forward because of loop
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}
countUniqueValues([1, 1, 1, 2, 3, 3, 4, 4, 5, 6]);


// Example 3. Which is the longest Substring without repeating characters.
// *****************************************************************************************************************
function lengthOfLongestSubstring(...args){
    let arr = args;
    if(typeof args[0] ==='string' ){
        arr = arr[0].split('')
    }
    let longest = 0;
    let count = 1;
    let obj={};
    let i = 0;

    //   i
    //  p   w   a   k        //  4
    //             j

    for(let j =1; j<arr.length; j++){
        if((arr[i]) !== arr[j]){
            if(arr[j] in obj){ // checking if they in the object
                obj = {};
                count = 1;
                i++;
                j = i;
            }else{
                count +=1;
                obj[arr[i]] = 1;
                obj[arr[j]] = 1;
                if(count > longest){
                    longest = count;
                }
            }
        }else{
            i++;
            j = i;
        }

    }
    console.log(longest);
    return longest
}

// lengthOfLongestSubstring('pwaka') // 4
// lengthOfLongestSubstring(1, 3, 4, 2, 2, 1, 6) // 4



// Longest Substring Without Repeating Characters.
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
var lengthOfLongestSubstring = function(s) {
    if( s.length == 0 || typeof s !== 'string' ) {
        return 0;
    } 
    if(s.length  == 1){
        return 1; 
    }
    let hashTable = {}; //our hashTable to hold our characters and index;
    let longestSubstringLength = 0; //length of longest substring
    let start = 0; //start index
    let length = s.length; //length of the array.

    //convert our strings to an array;
    const strings = s.split('');

    //iterate over the array
    for(let i = 0; i < length; i++) {
    //if the character exist and the value of the character is greater or equal to our start index
        if(hashTable[strings[i]] !==undefined && hashTable[strings[i]] >= start) {
    //change the value of start to one higher than the value of our current character 
            start = hashTable[strings[i]] + 1
        }
    //add the current index and it's value to the hashTable
        hashTable[strings[i]] = i;
    //find the length of the longest substring by comparing the value with the value of the current index minus the start value plus 1
        longestSubstringLength = Math.max(longestSubstringLength, (i-start + 1))
    }
    return longestSubstringLength;
}
lengthOfLongestSubstring('pwwkew')


// Example 4: Are there a pair of numbers, which average == to passing number
// *****************************************************************************************************************
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array, 
// where the average of the pair equals the target average. There may be more than one pair that matches the average target.
// averagePair([1, 2, 3], 2.5) // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
// averagePair([-1, 0, 3, 4, 5, 6], 2.5) // false
// averagePair([], 4) // false

function averagePair(arr, num){
    let i = 0;
    for(let j=1; j<arr.length; j++){
        if((arr[i] + arr[j])/2 !== num){
            if(j == arr.length-1){
                i++;
                j = i;
            }
        }else{
            return true;
        }
    }
    return false;
}

// averagePair([1, 2, 3, 4, 5, 6], 2.5) 
// averagePair([], 4) 
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
averagePair([-1, 0, 3, 4, 5], 4.1)



// Example 5: Are there a same numbers in passing arguments (duplicated)
// *****************************************************************************************************************
// Implement a function called,  areThereDuplicates  which accepts a variable number of arguments, and checks whether there are any duplicates 
// among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
function areThereDuplicates(...args){
    let values = args.sort();
    let i = 0;
    for(let j = 1; j<values.length; j++){
        if(values[i] ===  values[j]){
            return true;
        }else{
            if(j == values.length-1){
                i++;
                j = i;
            }
        }
    }
    return false;
}

areThereDuplicates('a', 'b', 'c', 'a')
areThereDuplicates('a', 'b', 'c', 'd')
areThereDuplicates(4, 5, 1, 2, 2) // true