// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If 
// there are no strings containing numbers, return an empty array.

// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

// numInStr(["abc", "abc10"]) ➞ ["abc10"]

// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

// numInStr(["this is a test", "test1"]) ➞ ["test1"]

// Bonus: Try solving this without regex.

function numInStr(arr) {
    let newArr = []; 

    let condition = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; 

    for (i = 0; i < arr.length; i++) {
        if (condition.some(num => arr[i].includes(num))) {
            newArr.push(arr[i]); 
        }
    }
    return newArr
}

console.log(numInStr(["abc", "abc10"]))