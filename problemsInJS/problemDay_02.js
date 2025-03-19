// Merge both arrays and objects

// wrieta js function that merges two objects or two arrays  print an error if the input are of different type

// conditon 1 for array
// conditon 2 for obj

// check ? Array
// isArray()

// Array.isArray(arr) && Array.isArray(arr2) => [...arr,...arr2]

// object ?
// type obj1 = "Object" &&  type obj2 = "Object" && !Array.isArray(arr) && !Array.isArray(arr2) => [...arr,...arr2]

// else  input are in different type
/*
function mergeData(input1, input2) {
  //   console.log(input1,input2);
  //   console.log(typeof input1);
  if (Array.isArray(input1) && Array.isArray(input2)) {
    const mergeArr = [...input1, ...input2];
    console.log(mergeArr);
  } else if (
    typeof input1 == "object" &&
    typeof input2 == "object" &&
    !Array.isArray(input1) &&
    !Array.isArray(input2)
  ) {
    let obj = {...input1,...input2}
    console.log( obj);
    
  } else {
    console.log("Invalid Data Type");
  }
}

mergeData([1, 2, 3, 4, 5], [6, 7, 9, 0]);
mergeData({ a: "1", b: "2" }, { c: "2", d: "34" });
mergeData(12,3,45)
*/

// 26 remove duplicate from sorted array
/*
function removeDuplicate(nums){
    let k = 1
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[k]){
            nums[k] = nums[i]
            k = k + 1
        }

    }
    return k
    
}

console.log(removeDuplicate([1,1,2]))*/

// reveresed string

// function reversedStr(str,start,end){
//   // let start = 0
//   // let end = str.length-1

//   while(start < end){
//     let temp = str[start]
//     str[start] = str[end]
//     str[end] = temp
//     start++
//     end--
//   }

// }
// let arr = ["p","r","a","v","i","n"]
// let result = reversedStr(arr,0, arr.length-1)

// console.log("reversed String is: ",arr);

// write a js function that takes an array of numbers and rweturn the maximum and minimum number values
/*
function maxAndMin(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  console.log(`Max Value in array is: ${max}`);
  console.log(`Min Value in array is: ${min}`);
}

// console.log(maxAndMin([1,2,3,5]));
maxAndMin([1, 2, 4, 58]);
maxAndMin([1, 2, 4, -2]);
*/



//write a function that takes n numbers of numbers as an input return the max and min from this numbers

function minAndMax(...arr){
  console.log(arr);
  
  let max = Math.max(...arr)  // used spread operator bcos its rest convert into array
  let min = Math.min(...arr)
  console.log(`max : ${max}, min : ${min}`);
  
}

minAndMax(1,23,4,6,7,9,789.86)