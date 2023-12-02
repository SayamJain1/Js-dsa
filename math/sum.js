// retrun sum all the natural number from 1 to n 
// example n = 3 output should be 6

function sum(n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result = result + i
    }
    return result
}

console.log(sum(3)); //6 => 3+2+1
console.log(sum(4)); //10
