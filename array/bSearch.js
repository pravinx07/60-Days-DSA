//  704. Binary Search
// arr = [1,2,3,4,5,6] target = 5 
// return index of target arr else -1 

// function binarySearch(arr, target){
//     for(let i = 0; i < arr.length; i++)
//     {
//         if(target === arr[i]) return i

//     }
//     return -1
// }

function binarySearch(arr, target){
    let low = 0
    let high = arr.length - 1;

    while(low <= high){
        let mid = Math.floor((low + high) / 2)

        if(arr[mid] === target) return mid;
        else if(arr[mid] < target) low = mid + 1
        else high = mid - 1
    }
    return -1
}

let arr = [1,2,3,4,5,6]
console.log(binarySearch(arr, 2));
