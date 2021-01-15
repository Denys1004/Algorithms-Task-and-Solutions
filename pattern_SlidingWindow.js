// Sliding Window
// useful when we keeping track of subset of data in a larger set of data.
// used when you have array or string and you need to find the longest sequence of the unique characters
// or when you need to calculate maximum sum of subarray

// The idea is we make a single window (it can be a single variable, or subarray, or another string), and we move that window depending on condition.

// Example 1
// Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
// The function should calculate the maximum sum of n consecutive elements in the array. 
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) //10
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) //17
// maxSubarraySum([4, 2, 1, 6], 1) //6
// maxSubarraySum([4, 2, 1, 6, 2], 4) //13
// maxSubarraySum([], 4) //null

// 1. The idea is: lets say we have ([1, 2, 3, 4, 4], 3).  At the begining we sum togeter first 3 numbers and store sum into a variable Sum
// [1, 2, 3, 4, 4]
//  ^ ^ ^

// 2. To slide window over and see sum of the next 3 numbers we can from sum отнять 1 и добавить 4
// [1, 2, 3, 4, 4]
//      ^ ^ ^

function maxSubarraySum(arr, num){
    if(arr.length < num ){
        return null;
    }
    let maxSum = 0;
    let tempSum = 0;

    for(let i = 0; i<num; i++){    // 1. Sum together first num numbers:
        maxSum = maxSum + arr[i];
    }
    tempSum = maxSum;

    for(let i = num; i<arr.length; i++){ // 1. Starting new loop from the next number after first n numbers that we already sum together
        tempSum = tempSum - arr[i-num] + arr[i] // 2. here we calcilating sum of the next three, by minus first num and add next in line 
        if(tempSum > maxSum){
            maxSum = tempSum;
        }
    }
    return maxSum;
}

maxSubarraySum([1, 2, 3, 4, 4], 2)