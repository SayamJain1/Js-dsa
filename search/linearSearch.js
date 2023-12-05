function linearSearch(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return i
        }
    }
    return -1
}


console.log(linearSearch([1, 2, 3, 4], 3)) // 2
console.log(linearSearch([3, 9, 3, 6], 7)) // -1

// o(n)