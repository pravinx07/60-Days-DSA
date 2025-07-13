function nextGreatestElement(arr){
    let n = arr.length
    let stack = []
    let nge = Array(n).fill(-1)

    for(let i = 2 * n - 1; i >= 0; i--){
        while(stack.length > 0 && stack[stack.length - 1] <= arr[i % n]){
            stack.pop()
        } 
        if(i < n){
            nge[i] = stack.length === 0 ? -1 : stack[stack.length - 1]
        }
        stack.push(arr[i % n])
    }

    return nge
}

let arr = [1,2,1]
let arr2 = [3,10,4,2,1,2,6,1,7,2,9]
console.log(nextGreatestElement(arr2));  //10,-1,6,6,2,6,7,7,9,9,10
