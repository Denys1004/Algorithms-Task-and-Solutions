// Binary search is a much faster form of search
// IMPORTANT! Works only with SORTED ARRAYS
// Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time

// Example1
// Is there number 15 in array?

// [ 1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19 ]
//                           ^

// Binary Search Pseudocode:
// This function accepts a sorted array and a value
// Create a left pointer at the start of the array, and a right pointer at the end of the array
// While the left pointer comes before the right pointer:
// Create a pointer in the middle
// If you find the value you want, return the index
// If the value is too small, move the left pointer up
// If the value is too large, move the right pointer down
// If you never find the value, return -1


function findNum(arr, num){
    let left_index = 0;
    let right_index  = arr.length-1;
    if(num > arr[arr.length-1]){
        console.log("Number too big");
        return -1;
    }
    if(num < 0){
        console.log("Number too small");
        return -1;
    }
    if(num === arr[0] || num === arr[arr.length-1]){
        console.log("FOUND IT!");
        return num;
    }

    while(left_index < right_index){
        let middle_index = Math.floor((left_index+right_index)/2)
        if(arr[middle_index] === num){
            console.log(`Found it!!!!!!!!!!! Number ${num} under index ${middle_index} and number ${arr[middle_index] }`);
            return arr[middle_index];
        }
        if(arr[middle_index] < num){
            left_index = middle_index;
        }
        if(arr[middle_index] > num){
            right_index = middle_index;
        }
    }
    console.log("Nothing found");
    return -1;
}

findNum([ 1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19, 25, 26, 30 ], 30)