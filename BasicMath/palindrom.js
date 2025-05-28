/*
check the given number is palindrom or not 
ex => 121 == reverse(121) return true or false
 */


function isPallindrom(n){
    // let isPalin = Number(n.toString().split("").reverse().join(""))
    // if(n === isPalin) return true
    // return false
    let reverN = 0
    let dup = n
    while(n > 0){
        let lastDigit = (n % 10)
        reverN = (reverN * 10) + lastDigit
        n = Math.floor(n / 10)
    }
    return reverN === dup ? true:false
}

console.log(isPallindrom(121));
console.log(isPallindrom(-121));
console.log(isPallindrom(10));

