/*  union of two arrays 
arr1 = [1,2,2,1,3,4]
arr2 = [1,3,2,4,5]
union = [1,2,3,4,5]

*/
/*
function unionOfArr(arr1,arr2){
    let n = arr1.length
    let m = arr2.length
    let set = new Set()
    let union = []

    for(let i = 0; i < n; i++){
        set.add(arr1[i])
    }
    for(let i = 0; i < m; i++){
        set.add(arr2[i])
    }
    
    for(el of set){
        union.push(el)
    }
    return union
}


let arr1 = [1,2,2,1,3,4]
let arr2 = [1,3,2,4,5]
console.log("Union Of Two Arrays:" , unionOfArr(arr1,arr2))

*/

//  two pointer approch optimal

/*
function unionOfTwoArr(arr1,arr2){
    // arr1.sort()
    // arr2.sort()
    let n = arr1.length
    let m = arr2.length
    let i = 0
    let j = 0
    let union = []

    while(i < n && j < m){
        if(arr1[i] <= arr2[j]){ 

            if(union.length === 0 || union[union.length - 1] !== arr1[i]){
                union.push(arr1[i])
            }
            i++
        }else{
            if(union.length === 0 || union[union.length - 1] !== arr2[j]){
                union.push(arr2[j])
            }
            j++
        }
    }

    while(j < m){
        if(union.length === 0 || union[union.length - 1] !== arr2[j]){
            union.push(arr2[j])
        }
        j++
    }

    while(i < n){
        if(union.length === 0 || union[union.length - 1] !== arr1[i]){
            union.push(arr1[i])
        }
        i++
    }

    return union
}

let arr1 = [1,2,2,3,3,4]
let arr2 = [1,3,3,4,5]
console.log("Union Of Two Arrays:" , unionOfTwoArr(arr1,arr2))

*/

function unionOFTwoArray(arr1,arr2){
    return [...new Set([...arr1,...arr2])]
}

let arr1 = [1,2,2,3,3,4]
let arr2 = [1,3,3,4,5]
console.log("Union Of Two Arrays:" , unionOFTwoArray(arr1,arr2))
