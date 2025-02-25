/*
Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = 3.33333.. which is truncated to 3.
Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = -2.33333.. which is truncated to -2.
 
 */

// function divide(dividend,divisor){
//     if(dividend === divisor) return 1;
//     let sign = true

//     if(dividend >= 0 && divisor < 0) sign = false
//     if(dividend < 0 && divisor > 0) sign =  false

//     let n = Math.abs(dividend)
//     let d = Math.abs(divisor)
//     divisor = Math.abs(divisor)
//     let questient = 0;

//     while(n >= d){
//         let count = 0;

//         while(n >= (d << (count + 1))){
//             count++
            
//         }
//         questient += 1 << count;
//         n -= d << count
//     }
//     // if(questient === (1 << 31) && sign){
//     //     return Math.max()
//     // }
//     // if(questient === (1 << 31) && !sign){
//     //     return Math.min()
//     // }
//     // if (questient === (1 << 31)) {
//     //     return sign ? (1 << 31) - 1 : -(1 << 31);
//     // }

//    return sign ? questient : -questient
// }
function divide(dividend, divisor) {
    if (dividend === divisor) return 1; // Edge case where both are equal

    let sign = !(dividend < 0 ^ divisor < 0); // Determine if the result should be positive

    let n = Math.abs(dividend);
    let d = Math.abs(divisor);
    let quotient = 0;

    // Find the largest shift where divisor * 2^count is still <= dividend
    while (n >= d) {
        let count = 0;

        while (n >= (d << (count + 1))) {
            count++;
        }

        quotient += 1 << count; // Add power of 2 to quotient
        n -= d << count;        // Subtract divisor * 2^count
    }

    // Handle overflow case for 32-bit signed integer
    if (quotient === (1 << 31)) {
        return sign ? (1 << 31) - 1 : -(1 << 31);
    }

    return sign ? quotient : -quotient;
}

// Test cases
console.log(divide(10, 3));   // Output: 3
console.log(divide(-8, 3));   // Output: -2
console.log(divide(7, -3));   // Output: -2
console.log(divide(-2147483648, -1));  // Output: 2147483647 (to prevent overflow)
console.log(divide(100, 5));  // Output: 20


// console.log(divide(10,3));
// console.log(divide(-8,3));
// console.log(divide(-2147483648,-1));

