// 496. Next Greater Element I

// function Nge(arr){
//     let newNge = []
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[j] >= arr[i]) {
//                 newNge[i] = arr[j] 
//                 break
//             }
//         }
        
//     }
//     return newNge
// }

// console.log(Nge([6,0,8,1,3]));


// let nextGreaterElement = (num1,num2) => {
//    let result = new Array(num1.length)

//    num1.forEach((x,index) => {
//      let tempArray = num2.slice(num2.indexOf(x) + 1,num2.length)
//      for(let i = 0; i < tempArray.length; i++){
//         if(tempArray[i] > x){
//             result[index] = tempArray[i]
//             break
//         }
//      }
//      if(result[index] === undefined) result[index] = -1
//    });
//    console.log(result);
// }

// nextGreaterElement([4,1,2],[1,3,4,2])
// nextGreaterElement([2,4],[1,2,3,4])


var nextGreaterElement = function(nums1, nums2) {
    const map = {}
    const stack = []

    nums2.forEach(n => {
        // console.log(n);
        while(stack.length > 0 && stack[stack.length - 1 ] < n){
            // console.log(map[stack.pop()]);
            
            console.log(map);
            map[stack.pop()] = n

        }
        stack.push(n)
        
    });
    return nums1.map(n=>map[n] || -1)
}

console.log(nextGreaterElement([4,1,2],[1,3,4,2]));
