//Create a function that counts the integer's number of digits.

// count(318) ➞ 3
 
// count(-92563) ➞ 5
 
// count(4666) ➞ 4

// count(-314890) ➞ 6

// count(654321) ➞ 6

// count(638476) ➞ 6

function count(num) {
    let integerCount = 0; 
    numArr = num.toString()
    for (i = 0; i < numArr.length; i++ ) {
        integerCount++;
    }
    return integerCount
   
}

console.log(count(4666))