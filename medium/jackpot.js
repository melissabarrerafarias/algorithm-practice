//Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical,
// and false otherwise. The array will contain 4 elements.

// testJackpot(["@", "@", "@", "@"]) ➞ true

// testJackpot(["abc", "abc", "abc", "abc"]) ➞ true

// testJackpot(["SS", "SS", "SS", "SS"]) ➞ true

// testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false

// testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false

function testJackpot(arr) {
    let newArr = []; 

    for ( i = 0; i < arr.length; i++ ) {
        if (arr[i] === arr[0]) {
            newArr.push(arr[i])
        }
    }

    if (newArr.length === 4) {
        return true
    }
    else {
        return false
    }
}

console.log(testJackpot(["abc", "abc", "abc", "abc"]));