// given an integer n find factorial of it 
//  factorial of a number is product of all the less then or equal to n integers 

// factorial of 0 is 1

// factorial(4) = 4*3*2*1 = 24
// factorial(6) = 6*5*4*3*2*1 = 720 


function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i
    }
    return result
}

console.log(factorial(4)) // 4*3*2*1 = 24
console.log(factorial(6)) // 6*5*4*3*2*1 = 720 
console.log(factorial(12)) // 12*11*10*9*8*7*6*5*4*3*2*1 = 479001600


// o(n)

