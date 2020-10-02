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