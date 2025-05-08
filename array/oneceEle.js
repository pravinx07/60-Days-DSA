/*
Find the number that apears once & other number twice
arr [1,1,2,3,3,4,4]
num = 2 that appears only once & other are twice
 */

/*
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
*/

/*
function numberApearsOnce(arr){
    let map = new Map()
    for(let i = 0; i < arr.length; i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i]) + 1)
        }else{
            map.set(arr[i],1)
        }
    }
    for(let [key,value] of map){
        if(value === 1) return key
    }
    return null
}
let arr = [1,1,2,3,3,4,4]
// let arr1 = [1,1]
console.log(numberApearsOnce(arr));
*/


function numberApearsOnce(arr){
    let xor = 0
    for(let i = 0; i < arr.length; i++){
      xor ^= arr[i]
    }
    return xor
}

let arr = [1,1,2,3,3,4,4]
let arr1 = [1,1]
console.log(numberApearsOnce(arr));