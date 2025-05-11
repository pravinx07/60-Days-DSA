/*sort an array of 0s,1s and 2s 
arr = [0,2,1,0,0,1,2,0,1,2]
arr = [0,0,0,0,1,1,1,2,2,2]
 */

/*
function sortArry(arr) {
  let n = arr.length;
  let cnt0 = 0;
  let cnt1 = 0;
  let cnt2 = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) cnt0++;
    else if (arr[i] === 1) cnt1++;
    else cnt2++;
  }
  for (let i = 0; i < cnt0; i++) arr[i] = 0;
  for (let i = cnt0; i < cnt0 + cnt1; i++) arr[i] = 1;

  for (let i = cnt0 + cnt1; i < n; i++) arr[i] = 2;

  return arr;
}

let arr = [0, 2, 1, 0, 0, 1, 2, 0, 1, 2];

console.log(sortArry(arr));
*/

function sortArr(arr){
    let n = arr.length
    let low = 0 ,mid = 0, high = n - 1

    while(mid <= high){
        if(arr[mid] === 0){
            [arr[low],arr[mid]] = [arr[mid],arr[low]]
            low++
            mid++
        }else if(arr[mid] === 1) {
            mid++
        }else{
            [arr[mid],arr[high]] = [arr[high],arr[low]]
            high--
        }
    }
    return arr
}

let arr = [0, 2, 1, 0, 0, 1, 2, 0, 1, 2];

console.log(sortArr(arr));