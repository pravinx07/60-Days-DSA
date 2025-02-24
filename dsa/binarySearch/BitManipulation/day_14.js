/* clearing the i th bit 
  n & ~(1 << i)
 */
/*
  function clearBit(n,i){
    res = ''
    while(n > 0){
        if(n % 2 === 1) res += "1"
        else res += "0"
        n = Math.floor(n / 2)
    }
    
    let result = parseInt(res.split("").reverse().join(""))
    return result & ~(1 << i)
  }

  console.log(clearBit(13,2));
  */

function clearIthBit(n,i){
    let clear = n & ~(1 << i)

    let binaryBefore = n.toString(2).padStart(4
        ,0)
    let binaryAfter = clear.toString(2).padStart(4,0)

    console.log(`Before: ${binaryBefore}`);
    console.log(`After: ${binaryAfter}`);
    
    return clear
}
console.log(clearIthBit(13,2));
