// Remove duplicate form the array 

/*
1.Bruteforce approch => use set ds

 */

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



