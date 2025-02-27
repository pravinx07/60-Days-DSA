// /*You are given two integers L and R, your task is to find the XOR of elements of the range [L, R]. 
// Input: 
// L = 4, R = 8 
// Output:
// 8 
// Explanation:
// 4 ^ 5 ^ 6 ^ 7 ^ 8 = 8*/

// function oper1(n){
//    if(n % 4 === 1) return 1;
//    else if(n % 4 === 2) return n + 1;
//    else if (n % 4 === 3) return 0
//    else return n
// }
// // console.log(oper1(10));

// function xorOp(l,r){
//     // let ans = 0
//     // for(let i = l; i <= r; i++){
        
        
//     //     ans = ans ^ i
//     // }
//     // return ans
//    return oper1(l - 1) ^ oper1(r)
// }
// console.log(xorOp(4,8));
// console.log(xorOp(1,3));


// palinedrome

function isPalindrome(x){
   // let y  = parseInt(x.toString().split("").reverse().join(""))
   // if(x === y) return true
   // else return false
   if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversed = 0;
    let original = x;

    while (original > reversed) {
     
        reversed = reversed * 10 + (original % 10);
        console.log("first reversed",reversed);
        
        original = Math.floor(original / 10);
        console.log("first original :",original);
        
        
    }

    return original === reversed || original === Math.floor(reversed / 10);  
} 
console.log(isPalindrome(121)); 
// console.log(isPalindrome(131));
// console.log(isPalindrome(-121));
// console.log(isPalindrome(10));
