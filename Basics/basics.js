/*
count even numbers in the array
 */

function countEven(arr){
    let count = 0
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2 === 0) count++
    }
    return count
}

let arr = [1, 2, 4, 7, 10]

console.log(countEven(arr));
