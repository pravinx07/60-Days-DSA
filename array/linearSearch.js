// linear search in array and return index  
//  arr = [1,2,3,4,5,6] target = 4
// ans = 3

function linearSearch(arr,t) {
    for(i in arr){
        if(arr[i] === t) return i
    }
    return -1
}

let arr = [1,2,3,0,5,6]
let t = 4
console.log(linearSearch(arr,t))
