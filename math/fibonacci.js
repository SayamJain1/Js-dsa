// given a number n find the first n element of the fibonacci swquence. 

// fibonacci sequence is a sequence in which a number is sum of two preceding numbers. 

// first two number iin sequence is 0 and 1.

// fibonacci(2) = [0, 1]
// fibonacci(3) = [0, 1, 1]
// fibonacci(7) = [0, 1, 1, 2, 3, 5, 8] 


function fibonacci(n) {
    const sequence = [0, 1]
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 2] + sequence[i - 1]
    }
    return sequence
}

console.log(fibonacci(2)) // [0, 1]
console.log(fibonacci(3)) // [0, 1, 1]
console.log(fibonacci(7)) // [0, 1, 1, 2, 3, 5, 8] 

// o(n)