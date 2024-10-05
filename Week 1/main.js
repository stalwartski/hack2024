function calculateArithmetic(a, b, fn){
    const ans = fn(a, b);
    return ans;
}

function sum(a, b){
    return a + b;
}

const value = calculateArithmetic(8, 5, sum);
console.log(value);