// How to merge 2 SORTED arrays
// We have merge([1, 10, 50], [2, 14, 99, 100])
//  output should be [1, 2, 10, 14, 50, 99, 100]

// create an empty array, take a look at the smallest values in each input array
// While there are still values we haven't looked at...
    // If the value in the first array is smaller than the value in the second array, 
    // push the value in the first array into our results and move on to the next value in the first array.
    // if the value in the first array is larger than the value in the second array, 
    // push the value in the second array into our results and move on to the next value in the second array.
    // Once we finish one array, we just push all remaining values from the array that left 

// 1. Comparing first items
//      i                   j
//    [1, 10, 50]     [2, 14, 99, 100]
// [] - result

// 2. Which item smaller, pushing it into result array and shifting marker to the next item
//           i               j
//    [1, 10, 50]     [2, 14, 99, 100]
// [1] - result

// 3. Which item smaller, pushing it into result array and shifting marker to the next item ans so on...
//           i                    j
//    [1, 10, 50]     [2, 14, 99, 100]
// [1, 2] - result

// 4. When we hit end of the any array, we just pushing the rest of the remaining items since we now it is sorted
//                i                    j
//    [1, 10, 50]     [2, 14, 99, 100]
// [1, 2, 10, 14, 50, 99, 100] - result

function merge(arr1, arr2){
    let result = [];
    let i = 0; // creating pointers for each array
    let j = 0;

    while(i<arr1.length && j<arr2.length) { // while there is still data in both arrays
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++;
        }else{
            result.push(arr2[j])
            j++;
        }
    }
    // Here means we done with one of the arrays (we hit the end of it)
    // and now we need to grab whats left in other array and push to result:
    while(i<arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        result.push(arr2[j]);
        j++;
    }
    console.log(result);
    return result;
}
// merge([1, 10, 50], [2, 14, 99, 100])


// MERGE SORT
function mergeSort(arr){
    if(arr.length <=1) return arr;
    let mid = Math.floor(arr.length / 2);
    // let left = arr.slice(0, mid); // grabing array from 0 to mid point. 
    // let right = arr.slice(mid); // everything after mid point. 
    // But we need to call it recursevly in order to continue slicing array intil each array contain 1 item
    let left = mergeSort(arr.slice(0, mid)); 
    let right = mergeSort(arr.slice(mid)); 
    return merge(left, right)
}

mergeSort([9, 4, 6 ,7 ,2 ,7, 8, 1])