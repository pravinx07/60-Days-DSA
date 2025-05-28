/*
Find the armstrong number
ArmStrong Number if addition of Number of digits  cube  === that number
 ex => 153 => 1 ** 3 + 5 ** 3 + 3 ** 3 = 153
*/

function isArmStrong(n){
    let dupli = n
    let sum = 0

    while(n > 0){
        let lastDigit = (n % 10)
        sum = sum + (lastDigit ** 3)
        n = Math.floor(n / 10)
    }
    return sum === dupli ? true:false
}

console.log(isArmStrong(371));
console.log(isArmStrong(153));
console.log(isArmStrong(115));

