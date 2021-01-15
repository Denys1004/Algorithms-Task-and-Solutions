// it is when you go to each element one by one and checking if its the one

// js linear search is
indexof
includes
find
findIndex


// Example 1 
// This function accepts an array and a value
// Loop through the array and check if the current array element is equal to the value
// If it is, return the index at which the element is found
// If the value is never found, return -1

function findVal(arr, val){
    arr.forEach((item, index) => {
        if(item === val){
            console.log(`val is ${val} -  item is ${item} with index ${index}`);
            return index;
        }
    });
    return -1;
}

findVal([ 5, 8, 1, 100, 12, 3, 12 ], 12)            
