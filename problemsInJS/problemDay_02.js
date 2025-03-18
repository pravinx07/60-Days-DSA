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

console.log(removeDuplicate([1,1,2]))