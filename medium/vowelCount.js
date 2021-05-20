// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(word) {
    let vowelCount = 0; 
    const vowels = ['a', 'e', 'i', 'o', 'u']

    for (i = 0; i < word.length; i++) {
        if (vowels.some(vowel => word[i].includes(vowel))) {
            vowelCount++
        }
    }
    return vowelCount
}

console.log(getCount('abracadabra'))