// Remove duplicate form the array 

/*
1.Bruteforce approch => use set ds
2. Optimal => 2 Pointer
 */

/*
function removeDuplicate(arr){
    let set = new Set()
    for(let i = 0; i < arr.length; i++){
        set.add(arr[i])
    }
    return set
}

let arr = [1,1,1,1]
let arr1 = [0,1,2,4,9]
let arr3 = []
console.log(removeDuplicate([1,1,2,2,3,3]));
console.log(removeDuplicate(arr));
console.log(removeDuplicate(arr1));
console.log(removeDuplicate(arr3));
*/

function removeDuplicate(arr){
    let n = arr.length
    if(n === 0) return 0;
    let i = 0
    for(let j = 1; j < n; j++){
        if(arr[j] !== arr[i]){
            arr[i+1] = arr[j]
            i++
        }
    }
    return (i+1)
}

let arr = [1,1,2,2,3,3]
let arr1 = [1,1,1,1]
let arr4 = []
let arr3 = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicate(arr));
console.log(removeDuplicate(arr1));
console.log(removeDuplicate(arr3));
console.log(removeDuplicate(arr4));




