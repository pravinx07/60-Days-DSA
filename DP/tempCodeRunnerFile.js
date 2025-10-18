

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
