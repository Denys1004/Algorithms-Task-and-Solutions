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