function square (n) {
    console.log("Inside square function for n = "+n);
    return n * n;
}

function cube (n) {
    console.log("Inside cube function for n = "+n);
    return n * n * n;
}

// function sumOfSquares(a, b) {
//     let sq1 = square(a);
//     let sq2 = square(b);
//     console.log("Inside sumOfSquares function");
//     return sq1 + sq2;
// }

// function sumOfCubes(a, b) {
//     let sq1 = cube(a);
//     let sq2 = cube(b);
//     console.log("Inside sumOfCubes function");
//     return sq1 + sq2;
// }

function sumofOperation(a, b, operation) {
    let op1 = operation(a);
    let op2 = operation(b);
    console.log("Inside sumOfOperation function")
    return op1 + op2;
}

let result = sumofOperation(1, 2, square); // passing a function as 3rd paramater
console.log(result);