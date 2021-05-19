// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of 
// characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str) {
    let charArr = []; 

    for (i = 0; i < str.length; i++) {
        let firstChar = str[i]; 
        let secondChar = str[i+1]
        if (typeof(secondChar) == 'undefined') {
            secondChar = '_'
        }
        // console.log(typeof(secondChar))
        let pair = firstChar + secondChar;
        charArr.push(pair)
        i++
    }
    return charArr
}

console.log(solution('abcde')); 