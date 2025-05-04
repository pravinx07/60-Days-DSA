// Rotate array by d places 
// arr = [1,2,3,4,5,6,7] d = 3
// arr = [4,5,6,7,1,2,3]


function rotateArr(arr,d){
  let n = arr.length
  d = d % n
  let temp = []

  for(let i = 0; i < d; i++){
    temp[i] = arr[i]
  }

  for(let i = d; i < n; i++){
    arr[i-d] = arr[i]
  }
  for(let i = n - d; i < n; i++){
    arr[i] = temp[i - (n - d)]
  }
  return arr
}

let arr = [1,2,3,4,5,6,7]
let d = 8
console.log(rotateArr(arr,d));


