/*
Find the number that apears once & other number twice
arr [1,1,2,3,3,4,4]
num = 2 that appears only once & other are twice
 */

function numberApearsOnce(arr){
    for(let i = 0; i < arr.length; i++){
        let num = arr[i]
        let cnt = 0
        for(let j = 0; j < arr.length; j++){
            if(arr[j] === num) cnt++
        }
        if(cnt === 1) return num
    }
    return -1
}

let arr = [1,1,2,3,3,4,4]
let arr1 = [1,1]
console.log(numberApearsOnce(arr1));
