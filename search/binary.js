// search an element in sorted arr 

function binarySearch(arr, n) {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (n === arr[mid]) {
            return mid
        }
        if (n < arr[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
}

//  o(logn)

console.log(binarySearch([1, 3, 5, 7, 9], 9)) // 4
console.log(binarySearch([1, 3, 5, 7, 9], 3)) // 1

