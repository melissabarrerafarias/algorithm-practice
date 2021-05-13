//Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical,
// and false otherwise. The array will contain 4 elements.

// testJackpot(["@", "@", "@", "@"]) ➞ true

// testJackpot(["abc", "abc", "abc", "abc"]) ➞ true

// testJackpot(["SS", "SS", "SS", "SS"]) ➞ true

// testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false

// testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false


// this function works but not very intuitive
// function testJackpot(arr) {
//     let newArr = []; 

//     for ( i = 0; i < arr.length; i++ ) {
//         if (arr[i] === arr[0]) {
//             newArr.push(arr[i])
//         }
//     }

//     if (newArr.length === 4) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// this function is 'better' :) 
function testJackpot(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return false
        }
    }
    return true
}

console.log(testJackpot(["SS", "Ss", "SS", "SS"]));