/*
sum of first n numbers 
1 to 5 => 1 + 2 + 3 + 4 + 5 => 15
 */


function sumOfN(i,sum){
    if(i < 1 ){
        console.log(sum);
        return
        }
    sumOfN(i-1,sum+i)

}

sumOfN(3,0)