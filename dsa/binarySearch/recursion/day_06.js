/*
Implement pow(x, n), 
which calculates x raised to the power n
 (i.e., xn).
 Example 1:

Input: x = 2.00000, n = 10
Output: 1024.00000
Example 2:

Input: x = 2.10000, n = 3
Output: 9.26100
Example 3:

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
 
 */

//  var myPow = function(x, n) {
//     return Math.pow(x,n)
// };

// console.log(myPow(2.00000, -2));


// function pow(x,n){
//     return x ** n;
// }
// console.log(pow(2.00000, -2));

// 

function pow_2(x,n){
    let ans = 1.0;
    let nn = n
    if(nn<0) nn = -1 * nn;

    while(nn){
        if(nn % 2){
            ans = ans * x
            nn = nn - 1;
        }else{
            x =x * x
            nn = nn/2;
        }
    }
    if(n < 0) ans = 1.0 / ans;
    return ans;
}
console.log(pow_2(2.00000, -2));
