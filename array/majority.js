/*
169. Majority Element
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 */

/*
function majority(arr){
    let n = arr.length
    for(let i = 0; i < n; i++){
        let cnt = 0
        for(j = 0; j < n; j++){
            if(arr[j] === arr[i]){
                cnt++
            }
        }
        if(cnt >= Math.floor(n/2)) return arr[i]
    }
    return -1
}


let arr = [2,2,1,1,1,2,2]
console.log(majority(arr));
*/

/*
function majorityEle(arr){
    let map = new Map
    for(let num of arr){
        let count = map.get(num) || 0
        map.set(num,count+1)
        if(map.get(num) > Math.floor(arr.length / 2)) return num
    }
    // console.log(map);
    
}

let arr = [2,2,1,1,1,2,2]
let arr2 = [6,5,5]
let arr3 = [10,9,9,9,10]
console.log("The Majority Element is:",majorityEle( arr3));
*/

function majorityEle(arr){
  let cnt = 0
  let el = null
  for(let i = 0; i < arr.length; i++){
    if(cnt === 0){
        cnt = 1
        el = arr[i]
    }else if(arr[i] === el){
        cnt++
    }else{
        cnt--
    }
  }
  let cnt1 = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === el) cnt1++
  }
  if(cnt1 > Math.floor(arr.length / 2) ) return el
  return -1
}

let arr = [2,2,1,1,1,2,2]
let arr2 = [6,5,5]
let arr3 = [10,9,9,9,10]
console.log("The Majority Element is:",majorityEle( arr));