for(var i=0; i<5;i++){   
    console.log(i);
 }
 // 0, 1, 2, 3, 4


 for(var i=0; i<5; i++)
 {
    i = i + 1;  
    console.log(i);
 }
// 1, 3, 5

 for(var i=0; i<5; i++)
 {
    i = i + 3; 
    console.log(i);
 }
// 3, 7


 function y(num1, num2){   
    return num1+num2;
 }
 console.log(y(2,3));
 console.log(y(3,5));
// 5, 8


 function y(num1, num2){
    console.log(num1);   
    return num1+num2;
 }
 console.log(y(2,3));
 console.log(y(3,5));
// 2, 5, 3, 8

 a = 15;
 console.log(a);
 function y(a){
    console.log(a);   
    return a;
 }
 b = y(10);
 console.log(b);
//  15, 10, 10

 a = 15;
 console.log(a);
 function y(a){
    console.log(a);   
    return a*2;
 }
 b = y(10);
 console.log(b);
 // 15, 10, 20

 function minToFront(arr) {
   var min = arr[0];
   var idx = 0;
   for (var i = 1; i < arr.length; i++){
       if (arr[i] < min) {
           min = arr[i];
           idx = i;
       }
   }
   for (var x = idx; x > 0; x--){
       var temp = arr[x];
       arr[x] = arr[x-1];
       arr[x-1] = temp;
   }
   return arr;
}
// lzkbxvcxlzkhjb
a = 15;
console.log(a);
function y(a){
   console.log(a);   
   return a*2;
}
b = y(10);
console.log(b);

// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
function pushFront(arr, value) {
	// move all values in array over
	for(let i = arr.length; i > 0; i--)
		arr[i] = arr[i-1]
	
	arr[0] = value;
}

// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
function popFront(arr) {
	const val = arr[0];
	for(let i = 0; i < arr.length; i++)
		arr[i] = arr[i + 1];
	arr.length = arr.length - 1;
}

// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. 
// You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
function insertAt(arr, idx, val) {
	for(let i = arr.length; i > idx; i--)
		arr[i] = arr[i-1]
	
	arr[idx] = val;
}

// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). 
// Think of popFront(arr) as equivalent to removeAt(arr,0).
function removeAt(arr, idx) {
   // shift array values right from idx
  toRemove = arr[idx];
  for(let i = idx; i < arr.length-1; i++) {
       arr[i] = arr[i+1];
   }
   arr.length = arr.length-1;
   return toRemove;
}