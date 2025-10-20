/*
70. Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 
 */

let dp = {}

function fibbonacci(n){
  if(n <= 2) return n;

  if(!dp[n]){
    dp[n] = fibbonacci(n - 1) + fibbonacci(n - 2)
  }
  return dp[n]
}
let n = 12
console.log(fibbonacci(n));


// 2. Bottom Up approch

function fib(n){

// base condition
 let dpArr = [0,1, 2]

 // [0,1,1,2,3,5,8,13]
 // calculate sum from base condition and return last element
 for(let i = 3; i <= n; i++){
    dpArr[i] = fib(n - 1) + fib(n - 2)
 }

 // return last element that is sum of all
 return dpArr[n]
}

console.log(fib(n));


