// // Given an array, reverse its elements
// Example:
// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]


function reverseArr(arr){
    // let stack = []
    let newArr = []
    for(let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i])
    }
    return newArr

    // for(let i = 0; i < arr.length; i++){
    //     stack.push(arr[i])
    // }
    // for(let i = 0; i < arr.length; i++){
    //     arr[i] = stack.pop()
    // }
    // return arr

    // let left = 0;
    // let right = arr.length - 1;
    // while(left < right){
    //     [arr[left], arr[right]] = [arr[right], arr[left]]
    //     left++;
    //     right--;
    // }
    // // return arr.reverse((a, b) => a - b)
    // return arr
}

let arr = [1, 2, 3, 4, 5]
console.log(reverseArr([...arr]));

// console.log(arr);
