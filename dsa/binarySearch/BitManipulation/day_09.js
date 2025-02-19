/*Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.

 

Example 1:

Input: n = 1
Output: true
Explanation: 20 = 1
Example 2:

Input: n = 16
Output: true
Explanation: 24 = 16
 */

function binary(n){
    res = ""
    while(n > 0){
        if(n % 2 == 1) res += "1";
        else res += "0";
        n = Math.floor(n / 2)
        // console.log(res);
        
    }
    // reverse(res)
    let result = parseInt(res.split("").reverse().join(""))
    // console.log(result & n - 1);
    if(n <= 0) return false;
    return (result & result - 1)
    
    // if()
}
console.log(binary(4));
