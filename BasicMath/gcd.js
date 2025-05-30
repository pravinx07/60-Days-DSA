/*Greates common Divisor
  9 => 1,3,9
  12 => 1,2,3,4,6,12
  ans = common and greatest is => 3
 */

  /*
  function findGCD(n1,n2,n3){
    let gcd = 1
    for(let i = 1; i <= Math.min(n1,n2,n3); i++){
        if(n1 % i === 0 && n2 % i === 0){
            gcd = i
        }
    }
    return gcd
  }

  console.log(findGCD(12,1,2));
  console.log(findGCD(9,12,24));
  console.log(findGCD(11,13,17));
  console.log(findGCD(20,40,60));
  */
  

  function findGCD(n1,n2){
    while(n1 > 0 && n2 > 0){
        if(n1 > n2) n1 = n1 % n2
        else n2 = n2 % n1
    }
    if(n1 === 0) console.log(n2);
    else console.log(n1);
    
    
  }


  findGCD(9,12)
  findGCD(11,13)
  findGCD(20,40)