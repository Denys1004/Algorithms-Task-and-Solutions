// Selection sort
// The idea is to loop through the whole array, find the index of the smallest item, and swap this item with index 1,
// the loop again over find second smallest  index and swap it with index 2 and so on...
//    i                       sm
// [ 5,     3,      2,      1]
// [ 1,     3,      2,      5]

//            i      sm
// [ 1,     3,      2,      5]
// [ 1,     2,      3,      5]

function selection_sort(arr){
    for(let i=0; i<arr.length; i++){
        let min = i; // new loop starting with first index as min
        for(let j=i+1; j<arr.length; j++){ // looking for index of the smallest item
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(i !== min){ // we need to swap only when i not equal to index of the smallest item (means thet i is a smallest item, what the point to swam samw element) 
            let temp = arr[i]; // swaping arr[i] with smallest item
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    console.log(arr);
    return arr;
}
selection_sort([5, 3, 2, 1])