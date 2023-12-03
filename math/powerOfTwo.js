// given a number n determine if it is a power of 2 or not

// an interger is power of two if there exist an integer x such that n == 2x


// isPowerOfTwo(1) = true (2^0)
// isPowerOfTwo(2) = true (2^1)
// isPowerOfTwo(5) = false


function isPowerOfTwo(n) {
    if (n < 1) {
        return false
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n = n / 2
    }
    return true
}

console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(2)) // true
console.log(isPowerOfTwo(5)) // false
console.log(isPowerOfTwo(9)) // false
console.log(isPowerOfTwo(12)) // false
console.log(isPowerOfTwo(22)); // false
console.log(isPowerOfTwo(26)); // false
console.log(isPowerOfTwo(24)); // false
console.log(isPowerOfTwo(32)); // false


// o(logn)