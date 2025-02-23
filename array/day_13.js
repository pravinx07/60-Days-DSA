/*350. Intersection of Two Arrays II
Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
*/

function interSectionOfTwoArr(nums1,nums2){
//    arr1.sort()
//     arr2.sort()
//    let i = 0; // for arr1
//    let j = 0; // for arr2
//   let result = []
//   while(i < arr1.length && j < arr2.length){
//     if(arr1[i] == arr2[j]){
//         result.push(arr1[i])
//         i++;
//         j++
//     }else if(arr1[i] < arr2[j]){
//        i++
//     }else{
//         j--
//     }
//   }
//   return result
nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    
    let i = 0, j = 0;
    const result = [];
    
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            result.push(nums1[i]);
            i++;
            j++;
        }
    }
    
    return result;
}
console.log(interSectionOfTwoArr([1,2,2,1],[2,2]));
console.log(interSectionOfTwoArr([4,9,5],[9,4,9,8,4]));

