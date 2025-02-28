/*iven an array arr. Your task is to find the minimum and maximum elements in the array.
Input: arr[] = [3, 2, 1, 56, 10000, 167]
Output: 1 10000
Explanation: minimum and maximum elements of array are 1 and 10000. */

// function minAndMax(arr){
   
// }

// console.log(minAndMax(1,2,3,4));


// function isAnagram(s1,s2){
//     s1 = s1.split("").reverse().join("")
//     return s1
// }
// console.log(isAnagram("geeks","kseeg"));
// // console.log(isAnagram("allergy","allergic"));
// // console.log(isAnagram("g","g"));


//  count evn and odd numbers
 
function countEvnAndOdd(arr){
    let evenCnt = 0
        let oddCnt = 0
        
        for(let i = 0; i < arr.length; i++){
            if(arr[i] % 2 === 0) evenCnt++
            else oddCnt++
        }
        let str = [oddCnt ,evenCnt]
        return [...str]
}

console.log(countEvnAndOdd([1, 1]));

