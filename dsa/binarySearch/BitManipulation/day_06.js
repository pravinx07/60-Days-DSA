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
