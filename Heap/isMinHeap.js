/*

Check if an array represents a min heap


0

100
Medium

Given an array of integers nums. Check whether the array represents a binary min-heap or not. Return true if it does, otherwise return false.



A binary min-heap is a complete binary tree where the key at the root is the minimum among all keys present in a binary min-heap and the same property is recursively true for all nodes in a Binary Tree.


Examples:
Input: nums = [10, 20, 30, 21, 23]

Output: true

Explanation: Each node has a lower or equal value than its children.*/


function isMinHeap(arr){
    let n = arr.length;

    for(let i = 0; i <= Math.floor((n - 2)/2); i++){
        let left = 2 * i + 1
        let right = 2 * i + 2

        if(left < n && arr[i] > arr[left]) return false

        if(right < n && arr[i] > arr[right] ) return false
    }

    return true
}


console.log(isMinHeap([1, 3, 5, 7, 9, 10])); // true ✅
console.log(isMinHeap([10, 15, 20, 17, 25])); // true ✅
console.log(isMinHeap([10, 9, 20])); // false ❌