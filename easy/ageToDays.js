// Create a function that takes the age in years and returns the age in days.
// Examples
// calcAge(65) ➞ 23725
// calcAge(0) ➞ 0
// calcAge(20) ➞ 7300

function calcAge(years) {
    let result = years * 365; 

    console.log(result); 
    return result;
}

calcAge(20)