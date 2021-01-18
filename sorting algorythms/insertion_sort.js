// insertion_sort
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
            arr[j] // comparint cur value to prev
        }

    }
}

insertion_sort([2, 1, 9, 76, 4])