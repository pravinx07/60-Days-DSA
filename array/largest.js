//  Finde the largest element in the array

function largest(arr){
    let n = arr.length
    if(arr.length == 0 || arr.length == 1) return arr;
    arr.sort((a, b) => a - b)
    return arr[n-1]

    let larg = arr[0]
    for(let i = 0; i < n; i++){
        if(arr[i] > larg){
            larg = arr[i]
        }
    }
    return larg
}

let arr = [-4, -5, -6, -1, 0]
let arr2 = [1,2,12,9, 60]
console.log(largest(arr2));
