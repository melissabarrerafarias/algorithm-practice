// JavaScript has a beautiful built -in function sort that sorts an iterable, usually an array of numbers, sorting them in 
// ascending order, but using a block you can sort the iterable in different ways.

// Create a function that takes an array of integers as an argument and returns the same array in ascending order.Using sort() 
// would be easy, but for this challenge YOU have to sort the array creating your own algorithm.

// Examples
// sortArray([2, -5, 1, 4, 7, 8]) ➞ [-5, 1, 2, 4, 7, 8]

// sortArray([23, 15, 34, 17, -28]) ➞ [-28, 15, 17, 23, 34]

// sortArray([38, 57, 45, 18, 47, 39]) ➞ [18, 38, 39, 45, 47, 57]

//pseudocode
// first find the largest number in the array 
// then 

function sortArray(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    // flip numbers in array
                    let temp = arr[j];
                    
                    arr[j] = arr[j + 1];

                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
}


console.log(sortArray([38, 57, 45, 18, 47, 39])); 

// video that helped me understand : https://www.youtube.com/watch?v=IAeLoGzU4RE