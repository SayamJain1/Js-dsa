function recursiveFactorial(n) {
    if (n === 0) {
        return 1
    }
    return n * recursiveFactorial(n - 1)
}

console.log(recursiveFactorial(5))

// n = 5
// false
// 5*4          
// 4*3          20 * 3
// 3*2          60 * 2
// 2*1          120 * 1
// 0 return 1