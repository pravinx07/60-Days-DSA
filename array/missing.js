//  find missing value in array
// arr = [1,2,4,5] N = 5
 // num = 3 is missing

/*
 function missingVal(arr,m){
    let n = arr.length
    let flag = 0
    for(let i = 1; i <= n; i++){
        for(let j = 0; j < n - 1; j++){
            if(arr[j] === i) 
                flag = 1
                 break
        }
    }
    if(flag === 0) return 
 }


 let arr = [1,2,4,5]
 let m = 5
 console.log(missingVal(arr,m));
 
*/

/*
function missingVal(arr,m){
    let n = arr.length
    let hash = new Map()
    // console.log(hash);
    for(let i = 0; i < n -1; i++){
        hash[arr[i]] = 1
        // console.log(hash[i]);

    }
    for(let i = 1; i < n; i++){
        
        if(hash[i] === 0){
            return i
        }
    }
    
 }


 let arr = [1,2,4,5]
 let m = 5
//  console.log(missingVal(arr,m));
missingVal(arr,m)

*/

// missing valur

function missingVal(arr,n){
    // let n = arr.length
    let m = n - 1
    let xor1 = 0
    let xor2 = 0
    for(let i = 0; i < m; i++){
        xor2 = xor2 ^ arr[i]
        xor1 = xor1 ^ (i + 1)
    } 
    xor1 ^= n

    return xor1 ^ xor2
     
    let sum1 = (n*(n + 1))/2
    console.log(sum1);
    
    let sum2 = 0
    for(let i = 0; i < arr.length; i++){
        sum2 += arr[i]
        console.log(sum2);
        
    }
    return sum1 - sum2
}

let arr = [1,2,4,5]
let n = 5
console.log(missingVal(arr,n))
