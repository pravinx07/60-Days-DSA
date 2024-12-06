/* set is a data structure where each element are unique and not repeted
 new Set(arr)
*/

const { set } = require("mongoose")

// 1. write a program to remove duplicate element from the array\

// function removeDuplicate(arr){

//     return new Set(arr)
// }

// const arr = [1,2,3,4,2,1,3,5,7,7]
// console.log(removeDuplicate(arr));


// 2.write a program to find the intersection of two arr

// function findInterSection(arr1,arr2){
//     const unique = new Set(arr1)
//     const result = arr2.filter((item)=>{
//         return unique.has(item)
//     })
//     return result

// }

// const arr1 = [1,2,3,4,5,6]
// const arr2 = [9,7,0,1,2,3,4]

// const find = findInterSection(arr1,arr2)
// console.log(find);


// 3.write a program to check if one set is subset of another

/*function subEtArr(arr1,arr2){
  const set1 = new Set(arr1)
  const set2 = new Set(arr2)
  const isSubset = [...set2].every((item)=>{
    return set1.has(item)
  })
  return isSubset
}

const arr1 = [1,2,3]
const arr2 = [1,2]
const result = subEtArr(arr1,arr2)
console.log(result);
*/

// 4. write a program to find the union of two arr

/*function combineArr(arr1,arr2){
  return new Set([...arr1,...arr2])
}
 
const arr1 = [1,2,3]
const arr2 = [3,4,5,6,7,1]
const result = combineArr(arr1,arr2)
console.log(result);
*/


// 5. write a program to find the differenced between two arr


function diffArr(arr1,arr2){
   const set1 = new Set(arr1)
    const set2 = new Set(arr2)
    const result = [...set1].filter((item)=>{
        return !set2.has(item)
    })
    return result 
}

const arr1 = [1,2,3,4,5,6,7]
const arr2 = [1,2,4,5,6,7]

const result = diffArr(arr1,arr2)

console.log(result);
