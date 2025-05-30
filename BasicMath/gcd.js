/*Greates common Divisor
  9 => 1,3,9
  12 => 1,2,3,4,6,12
  ans = common and greatest is => 3
 */

  function findGCD(n1,n2){
    let gcd = 1
    for(let i = 1; i <= Math.min(n1,n2); i++){
        if(n1 % i === 0 && n2 % i === 0){
            gcd = i
        }
    }
    return gcd
  }

  console.log(findGCD(12,1));
  console.log(findGCD(9,12));
  console.log(findGCD(11,13));
  console.log(findGCD(20,40));
  