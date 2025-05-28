/*reverse digits of number 
ex => 7789 => 9877 
 */

function revereseDigit(n){
    let reverN = 0
    while(n > 0){
        let lastDigit = (n % 10)
        n = Math.floor(n / 10)
        reverN = (reverN * 10) + lastDigit
    }
    return reverN
}

console.log(revereseDigit(7789));
