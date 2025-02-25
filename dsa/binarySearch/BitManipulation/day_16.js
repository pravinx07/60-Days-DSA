/*
You are given a number n. Find the total count of set bits for all numbers from 1 to n
setBit = 1

 */

// function countSetBit(n){
//     let binary
//     for(let i = 0; i < n; i++){

//          binary = i.toString(2).padStart(4,0)
//         // console.log(i);
//         }
//      return binary;
// }
// console.log(countSetBit(4));


/*A bit flip of a number x is choosing a bit in the binary representation of x and flipping it from either 0 to 1 or 1 to 0.
Input: start = 10, goal = 7
Output: 3
Explanation: The binary representation of 10 and 7 are 1010 and 0111 respectively. We can convert 10 to 7 in 3 steps:
- Flip the first bit from the right: 1010 -> 1011.
- Flip the third bit from the right: 1011 -> 1111.
- Flip the fourth bit from the right: 1111 -> 0111.
It can be shown we cannot convert 10 to 7 in less than 3 steps. Hence, we return 3.
Example 2: */
function bitFlip(start, goal) {
  let ans = start ^ goal;

  let count = 0;

  while (ans > 0) {
    count += ans & 1;
    ans >>= 1;
  }
  return count;
}

console.log(bitFlip(10,7));
console.log(bitFlip(3,4));

