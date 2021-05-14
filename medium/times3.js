// Create a function that takes three collections of arguments and returns the sum of the product of numbers.

// Examples
// product(1,2)(1,1)(2,3) ➞ 8
// // 1 * 1 * 2 + 2 * 1 * 3

// product(10,2)(5,0)(2,3) ➞ 100
// // 10 * 5 * 2 + 2 * 0 * 3

// product(1,2)(2,3)(3,4) ➞ 120
// // 1 * 2 * 3 + 2 * 3 * 4

// product(1,2)(0,3)(3,0) ➞ 0
// // 1 * 0 * 3 + 2 * 3 * 0

function product(arg1, arg2, arg3) {

    let firstProduct = arg1[0] * arg1[1]; 
    let secondProduct = arg2[0] + arg2[1]; 
    let thirdProduct = arg3[0] * arg3[1]
    
    return firstProduct * secondProduct * thirdProduct
}

console.log(product([1, 2], [2, 3], [3, 4]));

// product(1,2)(1,1)(2,3)s