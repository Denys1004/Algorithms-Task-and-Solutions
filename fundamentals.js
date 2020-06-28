// Page 20 of the book

/*
Countdown
Create a function that accepts a number as an input. Return a new array that counts down by one, from
the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?
*/
function arrayFromGivenNumToZero(num){
    let arr = [];
    if(num<0){
        return 'Given negative number'
    }
    for(i=num; i>=0; i--){
        arr.push(i);
    }
    return arr;
}
console.log(arrayFromGivenNumToZero(10))


/*
Print and Return
Your function will receive an array with two numbers. Print the first value, and return the second.
*/
function printFirstReturnSecondValFromGivenArr(arr){
    console.log(arr[0]);
    return arr[1];
}
console.log(printFirstReturnSecondValFromGivenArr([10, 9, 8, 5]))


/*
First Plus Length
Given an array, return the sum of the first value in the array, plus the array’s length. What happens if
the array’s first value is not a number, but a string (like "what?") or a boolean (like false).
*/
function firstPlusLength(arr){
    let sum = arr[0]+ arr.length;
    return sum
}
console.log(firstPlusLength([10, 9, 8, 5]))
console.log(firstPlusLength(['Fuck', 9, 8, 5]))


/*
Values Greater than Second
For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.
*/
function greaterThanSecond(arr){
    let second = arr[1];
    let howmany = 0;
    for(i=0; i<arr.length; i++){
        if(arr[i]>second){
            console.log(arr[i]);
            howmany = howmany+1;
        }
    }
    return howmany;
}
console.log(greaterThanSecond([1,3,5,7,9,13]))


/*
Values Greater than Second, Generalized
Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. 
Print how many values this is. What will you do if the array is only one element long?
*/
function greaterThanSecond(arr){
    if(arr.length==1){
        return 'Add more values to your array'
    }
    let second = arr[1];
    let newArr= [];
    for(i=0; i<arr.length; i++){
        if(arr[i]>second){
            newArr.push(arr[i])
        }
    }
    return newArr;
}
console.log(greaterThanSecond([1,3,5,7,9,13]))
console.log(greaterThanSecond([5]))


/*
This Length, That Value
Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.
*/
function thisLengthThatValue(lengthNum, valNum){
    let arr = [];
    for(i=0; i<lengthNum; i++){
        arr.push(valNum);
    }
    return arr;
}
console.log(thisLengthThatValue(5, 'Fuck'))


/*
Fit the First Value
Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!";
if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".
*/
function fitTheFirstVal(arr){
    if(arr[0] > arr.length){
        console.log('Too big!');
    }else if(arr[0] < arr.length){
        console.log('Too small!');
    }else{
        console.log('Just right!');
    }
}
fitTheFirstVal([3, 5, 7, 9])
fitTheFirstVal([3, 5, 7])
fitTheFirstVal([10, 5, 7, 9])


/*
Fahrenheit to Celsius
Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit, 
and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.
*/
function fahrenheitToCelsius(farDegrees){
    let celcDegrees = (farDegrees-32) * 5/9
    return celcDegrees.toFixed(3)
}
console.log(fahrenheitToCelsius(350));


/*
Celsius to Fahrenheit
Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns
the equivalent temperature expressed in Fahrenheit degrees.
*/
function celsiusToFahrenheit(celcDegrees){
    let farDegrees =  (celcDegrees * 9/5) + 32;
    return farDegrees.toFixed()
}
console.log(celsiusToFahrenheit(150));


/*
(optional) Do Fahrenheit and Celsius values equate at a certain number? Scientific calculation can be complex, 
so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), 
checking whether it is equal to the corresponding Fahrenheit value.
*/
function certainNum(num){
    let celcDegrees;
    let farDegrees;
    for(i=num; i>-100; i--){
        celcDegrees = (i-32) * 5/9;
        farDegrees =  (i * 9/5) + 32;
        if(celcDegrees == farDegrees){
            return i
        }
        console.log(i);
        
    }
}
certainNum(200);

// function numToOther(num){
//     let celcDegrees = (num-32) * 5/9;
//     let farDegrees =  (num * 9/5) + 32;
//     console.log(num + ' to Celcium would be: ' + celcDegrees);
//     console.log(num + ' to Farenheit would be: ' + farDegrees);
// }

// numToOther(-20)


/*
Swap Toward the Center
Given array, swap first and last, third and third-to- last, 
etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true]. Change [1,2,3,4,5,6] to [6,2,4,3,5,1]
*/
function swapTowardsThecCenter(arr){
    for(i=0; i<Math.floor(arr.length/2); i++){
        if(arr[i]%2 == 0){
            continue
        }
        let temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    return arr
}
console.log(swapTowardsThecCenter([1,2,3,4,5,6]));


/*
Reverse Array
Given array, write a function to reverse values, in-place. 
Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].
*/
function reverseArray(arr){
    for(i=0; i<Math.floor(arr.length/2); i++){
        let temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    return arr
}
console.log(reverseArray([1,2,3,4,5,6]));

/*
Only Keep the Last Few
Stan learned something today: that directly decrementing an array’s .
length immediately shortens it by that amount. Given array arr and number X, 
remove all except the last X elements, and return arr (changed and shorter). 
Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it.
*/
function keepTheLastThree(arr, num){
    let newArr = []
    for(i=arr[arr.length-1-num]; i<arr.length; i++){
        newArr.push(arr[i])
    }
    return newArr
}
console.log(keepTheLastThree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));



/*
Math Help
Cartman doesn’t really like math; he needs help. You are given two numbers – 
coefficients M and B in the equation Y = MX + B. Build a function to return the X-intercept 
(his older cousin Fiaz wisely reminds him that X-intercept is the value of X where Y equals zero; 
Cartman just snorts in his general direction).
*/

X = (Y-B)/M


// Poor Kenny
// Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days, 
// there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes, 25 blizzards and 30 meteors (for 100 days total). 
// If these probabilities continue, write whatHappensToday() to print a day’s outcome.

let decade = {
    'volcanos': 10,
    'tsunamis' : 15,
    'earthquakes' : 20,
    'blizzards' : 25,
    'meteors' : 30
}

// What Really Happened?
// Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated to the chance of another. 
// Change whatHappensToday() function to create whatReallyHappensToday(). In this new function test for each disaster independently, 
// instead of assuming exactly one disaster will happen. In other words, with this new function, all five might occur today – or none. 
// Maybe Kenny will survive!


// Soaring IQ
// Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student, Bogdan, entered with a modest IQ of 101. 
// Let’s say that during a 14-week bootcamp, his IQ rose by .01 on the first day, then went up by an additional .02 on the second day, 
// then up by .03 more on the third day, etc. all the way until increasing by .98 on his 98th day (the end of 14 full weeks). 
// What is Bogdan’s final IQ?


// Letter Grade
// Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade, given an integer representing a score from 0 to 100? 
// Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’. 
// For example, given 88, you should log "Score: 88. Grade: B". Given the score 61, log the string "Score: 61. Grade: D".


// More Accurate Grades
// For an additional challenge, add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores, 
// and “+” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+). 
// Given 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. Grade: D-" .