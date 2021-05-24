function addTwoDigits(n) {
    const num = n.toString();
    let solution = parseInt(num[0]) + parseInt(num[1]); 
    return solution
}

console.log(addTwoDigits(29))