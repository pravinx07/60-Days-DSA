// converting decimal to binary

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
