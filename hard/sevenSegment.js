// Given an array of words, return the longest word which can fit on a 7 segment display.
// Letters which do not fit on a 7 segment display are k, m, v, w and x.
// Therefore, do not count words which include these letters.
// Examples
// longest7SegmentWord(["knighthood", "parental", "fridge", "clingfilm"]) ➞ "parental"

// longest7SegmentWord(["coding", "crackers", "edabit", "celebration"]) ➞ "celebration"

// longest7SegmentWord(["velocity", "mackerel", "woven", "kingsmen"]) ➞ ""

// Notes
// All words will be given in lowercase.
// Return an empty string if no words are eligible (see example #3).

function longest7SegmentWord(arr) {
    let conditions = ["k", "m", "v", "w", "x"];
    let sevenSegment = []

    for (i = 0; i < arr.length; i++) {
        if (!conditions.some(letter => arr[i].includes(letter))) {
            sevenSegment.push(arr[i]);
        }
    }
    
    let longest = '';
   
    for (let i = 0; i < sevenSegment.length; i++) {
        
        if (sevenSegment[i].length > longest.length) {
            longest = sevenSegment[i];
        }
            
    }

    return longest
}

// or with regex 

function longest7SegmentWord(arr) {
    return arr.filter(word => !/[kmvwx]/i.test(word)).sort((a, b) => b.length - a.length)[0] || "";
}

console.log(longest7SegmentWord(["coding", "crackers", "edabit", "celebration"]));

