//  704. Binary Search
// arr = [1,2,3,4,5,6] target = 5 
// return index of target arr else -1 

function binarySearch(arr, target){
    for(let i = 0; i < arr.length; i++)
    {
        if(target === arr[i]) return i

    }
    return -1
}

let arr = [1,2,3,4,5,6]
console.log(binarySearch(arr, 8));
