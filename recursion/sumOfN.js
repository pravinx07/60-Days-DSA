/*
sum of first n numbers 
1 to 5 => 1 + 2 + 3 + 4 + 5 => 15
 */

/*

// parameterized recursion
function sumOfN(i,sum){
    if(i < 1 ){
        console.log(sum);
        return
        }
    sumOfN(i-1,sum+i)

}

sumOfN(3,0)
*/

// functional recursion
function sumOfN(n){
   if(n === 0) return 0
   return n + sumOfN(n-1)
}

console.log(sumOfN(3));
console.log(sumOfN(4));
console.log(sumOfN(5));
