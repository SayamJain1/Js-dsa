// given a number n determine if it is a prime number or not

// a prime number is a number greater than 1 that is not product of two smaller number.

// isPrime(5) = true (1*5 or 5*1)
// isPrime(4) = false (1*4 or 2*2 or 4*1)

function isPrime(n) {
    if (n < 2)
        return false
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false
    }
    return true
}

console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false
console.log(isPrime(6)); // false


// o(n)