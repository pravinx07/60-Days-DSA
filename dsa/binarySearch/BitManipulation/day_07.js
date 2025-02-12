// swap two numbers without using third variable

function swapTwoNumbers(a,b){
    a = a ^ b 
    b = a ^ b  // (a ^ b) ^ b = a
    a = a ^ b; // (a ^ b) ^ a = b
    console.log(a,b);
    
}

// console.log(swapTwoNumbers(2,3))
swapTwoNumbers(2,3)