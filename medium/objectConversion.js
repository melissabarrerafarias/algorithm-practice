// Write a function that converts an object into an array of keys and values.

// Example: 
// objectToArray({
//     D: 1,
//     B: 2,
//     C: 3
//   }) ➞ [["D", 1], ["B", 2], ["C", 3]]
  
//   objectToArray({
//     likes: 2,
//     dislikes: 3,
//     followers: 10
//   }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

function objectToArray(object) {

    const entries = Object.entries(object);
    console.log(entries)
}
objectToArray({ likes: 2, dislikes: 3, followers: 10 })
// objectToArray({D: 1, B: 2, C: 3}); 

// const object1 = {
//     a: 'somestring',
//     b: 42
//   };
  
//   for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
//   }
