// insertion_sort
// Used when data comes in live, and you sorting it at the moment
// The idea to loop over the array, take element and compare to the left side and insert inro correct position.
// Comparing 3 and 5. Shod 3 be before 5 or after? Before, so insert 3 before.
//           v
// [ 5,     3,      4,      1]

// Next comparing 4 with left
//                    v
// [ 3,     5,      4,      1]

function insertion_sort(arr){
    for(let i = 1; i<arr.length; i++){ // we 
        let cur_val = arr[i];
        for(let j=i-1; i>=0 && arr[j] >cur_val; i--){ // comparing with previous items
            arr[j+1] = arr[j] // value  moving forward to its position
        }// after this loop we found correct spot for cur_val
        arr[j+1] = cur_val; // inserting this val into 

    }
}

insertion_sort([2, 1, 9, 76, 4])