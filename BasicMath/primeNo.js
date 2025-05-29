/*check the number is prime or not
 prime number=> number have only two factor 1 and itself
 */

 function isPrim(n){
    let count = 0;
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            count++
        }
    }
    if(count === 2) return true
    return false
 }

 console.log(isPrim(6));
 