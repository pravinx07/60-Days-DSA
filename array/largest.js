//  Finde the largest element in the array

function largest(arr){
    let n = arr.length
    // arr.sort()
    // return arr[n-1]

    let larg = arr[0]
    for(let i = 0; i < n; i++){
        if(arr[i] > larg){
            larg = arr[i]
        }
    }
    return larg
}

let arr = [5,64,1,0,95]
console.log(largest(arr));
