// Create a pure function that returns a new array containing the squares of
//  only the positive integers when an array of real numbers is passed to it.

// Your function should make use of `map` and `filter` instead of any `for` or 
// `while` loops or `forEach`.

function squareList(array) {
    return array.filter(n => n>0 && n%1===0).map(n => n*n)
}

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2])
console.log(squaredIntegers)
// → [25, 9]

l