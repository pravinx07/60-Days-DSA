// factorail of numbers 
// 4 => 4 * 3 * 2 * 1 => 24


function fact(n){
    if(n === 1) return 1
    console.log(n, " ");
    
    return n * fact(n - 1)
 }


 console.log(fact(4));
 