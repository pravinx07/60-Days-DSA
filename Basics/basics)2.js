/*Logarithamic time o (log n) */

// function binarySearch(arr, target) {
//   let low = 0, high = arr.length - 1;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (arr[mid] === target) return mid;
//     else if (arr[mid] < target) low = mid + 1;
//     else high = mid - 1;
//   }
//   return -1
// }

// let arr = [1,2,3,4,5,6]
// let t = 7
// console.log(binarySearch(arr, t));

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}


console.log(isPrime(11));
