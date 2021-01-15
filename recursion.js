// Recursion - a function that calls itself
// The call stack - when function is called its placed on the top of the call stack (stack data structure), 
//                        and when its done it removes function from the TOP
// Base Case - the condition when the recursion ends
function countDown(num){
    if(num <= 0){
        console.log("all done");
        return;
    }
    console.log(num);
    num--;
    countDown(num)
}
countDown(3)

// SAMPLE 2
function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num - 1);
}
sumRange(3)
// what happens:
    // returns 3 + sumRange(2)
        // returns 2 + sumRange(1)
            // returns 1


// SAMPLE 3
// Factorial
//  4! read 'four factorial' and  equal to 4 * 3 * 2 * 1
// NON Recursive solution:
function factorial(num){
    let total = 1;
    for(let i = num; i>1; i--){
        total = total * i;
    }
    console.log(total);
    return total;
}
factorial(4)

// Recursive solution:
function factorial(num){
    if(num === 1) return 1;
    console.log(num * factorial(num-1));
    return num * factorial(num-1)
}
factorial(4)



// EXAMPLE 1
// **********************************************************************
function collectOddValues(arr){
    let result = [];

    function helper(helpInput){
        if(helpInput.length === 0){
            return;
        }
        if(helpInput[0]%2 !== 0){ // if its Odd
            result.push(helpInput[0])
        }
        
        helper(helpInput.slice(1))
    }
    helper(arr)
    console.log(result);
    return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7])


// let a = [1, 2, 3, 4, 5, 6, 7];
// console.log(a);
// let b = a.slice(1);
// console.log(b);