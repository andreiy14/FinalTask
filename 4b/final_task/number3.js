//Creating the bblSort function
 function bblSort(arr){
     
 for(var i = 0; i < arr.length; i++){
     
   // Last i elements are already in place  
   for(var j = 0; j < ( arr.length-1 ); j++){
       
     // Checking if the item at present iteration 
     // is greater than the next iteration
     if(arr[j] > arr[j+1]){
         
       // If the condition is true then swap them
       var temp = arr[j]
       arr[j] = arr[j + 1]
       arr[j+1] = temp
     }
   }
 }
 // Print the sorted array
 let odd_numbers = arr.filter(elem => elem %2 != 0)
 let even_numbers = arr.filter(elem => elem %2 == 0)
 console.log(arr);
 console.log(odd_numbers)
 
 console.log(even_numbers)
}
  
  
// This is our unsorted array
var arr = [2, 24, 32, 22, 31, 100, 56, 21, 99, 7, 5, 37, 97, 25, 13, 11];
  
  
// Now pass this array to the bblSort() function
bblSort([2,24,32,22,31]);