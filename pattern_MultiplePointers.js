// Multiple Pointers - used when you have sorted array (from low to hight) and you need to find matching pair.
// IMPORTANT! Array of numbers should be sorted!


// Example 1
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


// Example 2
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