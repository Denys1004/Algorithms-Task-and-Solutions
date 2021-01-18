// Buble sort idea is:
// When you looping over whole array comparing in i > i+1 and swap if so,
// The biggest number will be at the end. And every time biggest number goes to the end as a buble. 
//   v   v - swap
// [ 9, 7, 4, 10]

//       v  v - swap
// [ 7, 9, 4, 10]

//           v   v - NOswap
// [ 7, 4, 9, 10]

// Optimized BubbleSort with noSwaps
function bubbleSort(arr){
    var noSwaps;
    for(var i = arr.length; i > 0; i--){
        noSwaps = true;
        for(var j = 0; j < i - 1; j++){
        if(arr[j] > arr[j+1]){
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            noSwaps = false;         
        }
        }
        if(noSwaps) break;
    }
    return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);