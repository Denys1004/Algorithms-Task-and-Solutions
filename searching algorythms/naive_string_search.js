// Naive String Search
// Used for searching for substring in the larger string

// Example 1
// ********************************************************************************
// Suppose you want to count the number of times a smaller string appears in a longer string
// A straightforward approach involves checking pairs of characters individually

//  we hve string - "wowomgzomg"
//  And we need to check if sumstring - "omg" in there 

// Basic solution:
// 1. Checking if first letter match to first letter,  Id doesnt match we move sumstring further:
//   v
//  "w o w o m g z o m g"
//  "o m g"
//   ^

// 2. And comparing with second, and if there a match we moving to the next character:
//       v
//  "w o w o m g z o m g"
//      "o m g"
//       ^

// 3. And comparing second characters, if no match we moving substring further:
//          v
//  "w o w o m g z o m g"
//      "o m g"
//          ^

// 4. And comparing second characters, if no match we moving substring further:
//          v
//  "w o w o m g z o m g"
//         "o m g"
//          ^

//             v
//  "w o w o m g z o m g"
//            "o m g"
//             ^

// Idea is:
// Loop over the longer string
// Loop over the shorter string
// If the characters don't match, break out of the inner loop
// If the characters do match, keep going
// If you complete the inner loop and find a match, increment the count of matches
// Return the count
function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){ // 1. Looping over big string 
        for(var j = 0; j < short.length; j++){ // 2. Looping over small string 
            if(short[j] !== long[i+j]){ // 3.When comparing index of big should be increasing as index of small, thats why we have long[i+j]
                break;
            }
            if(j=== short.length-1){  // 4. If we made to the last character of the small string, trhat means there is the match. How we can check it? Compare what is j: 
                count++;
            }
        }
    }
    console.log(`Found ${count} matches!`);
    return count;
}

naiveSearch("lorie loledlolarinelol", "pop")

// is_there_a_small_string("wowomgzomg", "omg")