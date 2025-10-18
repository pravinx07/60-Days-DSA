/*
509. Fibonacci Number
Example 1:
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:
Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:
Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
*/

// 1. Top-Down Approch => recursion

let dp = {}

function fibbonacci(n){
  if(n <= 1) return n;

  if(!dp[n]){
    dp[n] = fibbonacci(n - 1) + fibbonacci(n - 2)
  }
  return dp[n]
}
let n = 3
console.log(fibbonacci(n));


// 2. Bottom Up approch

function fib(n){

// base condition
 let dpArr = [0,1]

 // [0,1,1,2,3,5,8,13]
 // calculate sum from base condition and return last element
 for(let i = 2; i <= n; i++){
    dpArr[i] = fib(n - 1) + fib(n - 2)
 }

 // return last element that is sum of all
 return dpArr[n]
}

console.log(fib(n));


