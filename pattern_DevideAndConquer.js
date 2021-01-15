// pattern_Devide And Conquer
// The idea is to devide data set into smaller chunks and then repeating a process with a subset of data.

// Classic example is Binary Search:
// IMPORTANT ! ACEPTED ARRAY HAS TO BE SORTED!!
// Given a sorted array of integers, write a function called binarySearch, that accepts a value and
// returns the index where the value passed to the function is located. If value not found, return -1
// binarySearch([1, 2, 3, 4, 5, 6], 4)  // 3
// binarySearch([1, 2, 3, 4, 5, 6], 6)  // 5
// binarySearch([1, 2, 3, 4, 5, 6], 11)  // -1

// The logic is this: 
// lets say we have a sorted! array and we need to check if nubmer 470 in it
// 1. We would take a middle point and compare is 470 >= 56, if yes - we would ignore all left part

// [1, 2, 3, 4, 8, 12, 23, 34, 44, 54, 56, 108, 201, 302, 403, 450, 500] 
//                                                  ^

// 2. Then we would take right side, choose a miidle point, compare is 470 >= 302, if yes - we would ignore all left part
// [108, 201, 302, 403, 450, 500]                                         
//                   ^

// 3. And so on..


function binarySearch(array, val){
    let min = 0;
    let max = array.length - 1;
    while(min <=max){
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];

        if(currentElement < val){
            min = middle + 1;
        }else if(currentElement > val){
            min = middle - 1;
        }else{
            return middle;
        }
    }
    return -1;
}