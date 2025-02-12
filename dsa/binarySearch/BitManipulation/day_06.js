// converting decimal to binary

/*
function decimalToBinary(n){
    res = ""
    while(n > 0){
        if(n % 2 == 1) res += "1";
        else res += "0";
        n = Math.floor(n / 2)
        // console.log(res);
        
    }
    // reverse(res)
    return res.split("").reverse().join("")
}

console.log(decimalToBinary(10));
console.log(decimalToBinary(11));
*/

// binary to decimal

/*
function binaryToDecimal(num){
  let len = num.length;
  let decimalValue  = 0
  let pow = 1
    for(i = len - 1; i >= 0; i--){
        if(num[i] === '1'){
         decimalValue += pow
        }
        pow *= 2
    }
    return  decimalValue
}

console.log(binaryToDecimal('1010'));
console.log(binaryToDecimal('1110'));
*/

// Given two binary strings a and b, 
// return their sum as a binary string.

// function addBinary(a,b){
//     let add = ""
//     a = a.split("")
//     b = b.split("")
//     for(let i = 0; i < a.length; i++){
//         for(j = 0; j < b.length; j++){
           
//         }
//     }
//     return add
    
// }
 
// console.log(addBinary("11","1"));


// add 1 to the array
// Input: digits = [1,2,3]
/*
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4]
*/

function plusOne(arr){
    // return arr
    // sum = 0
    // arr = parseInt(arr.join(""))
    // sum = arr + 1;
    
    // return sum
    
    // arr = arr.split("")
    // for(let i = 0; i < arr.length; i++){
    //     sum = arr[n - 1] + 1
    // }
    // return sum
    
   return (arr.length  ) + 1
    
    
}
console.log(plusOne([1,2,3]));
