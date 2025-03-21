// Reverse an Array

function reverseArr(arr,i,j){
    let n = arr.length;
    // let i = 0
    // let j = n - 1
    // console.log(arr);
    while (i < j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp 
        i++
        j--
       
        
    }
    
    
}
let arr = [1,2,3,4,5]
let result = reverseArr(arr,0,arr.length - 1)
console.log(arr);
