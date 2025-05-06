/*  union of two arrays 
arr1 = [1,2,2,1,3,4]
arr2 = [1,3,2,4,5]
union = [1,2,3,4,5]

*/
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

