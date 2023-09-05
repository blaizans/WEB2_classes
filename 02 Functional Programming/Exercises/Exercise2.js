// Use the `reduce` method to “flatten” an array of arrays into a single 
// array that has all the elements of the original arrays.


let arrays = [[1, 2, 3], [4, 5], [6]]
console.log(arrays.reduce((current, next) => [...current, ...next], []))
// Your code here.
// → [1, 2, 3, 4, 5, 6]