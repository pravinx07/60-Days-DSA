// 735  asteroid

// function asteroid(arr){
//     let n = arr.length;
//     let change = true
//     while(change){
//         change = false
//         for(let i = 0; i < n -1;i++){
//             if(arr[i] > 0 && arr[i+1] < 0){
//                let left = arr[i]
//                let right = arr[i+1]
//                if(Math.abs(left) > Math.abs(right)){
//                  arr.splice(i+1, 1)
//                }else if(Math.abs(left) < Math.abs(right)){
//                 arr.splice(i , 1)
//                }else{
//                 arr.splice(i, 2)
//                }
//                change = true
//                break
//             }
//         }
//     }
//     return arr

//  }

function asteroid(arrs) {
  let stack = [];

  for (let arr of arrs) {
    let destroy = false;
    while (stack.length > 0 && stack[stack.length - 1] > 0 && arr < 0) {
      let top = stack[stack.length - 1];
      if (Math.abs(arr) > top) {
        stack.pop();
      } else if (Math.abs(arr) === top) {
        stack.pop();

        destroy = true;
        break;
      }else{
        destroy = true;
        break
      }
    }
    if(!destroy){
        stack.push(arr)
    }
  }

  return stack
}


let arr = [5, 10, -5];
let arr3 = [8,-8]
let arr4 = [10, 2 , -5]
console.log(asteroid(arr4));
