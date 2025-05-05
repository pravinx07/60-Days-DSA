// Move zeros to the end
//  arr = [1,0,4,0,0,4,2,4,6] => [1,4,4,2,4,6,0,0,0]

function moverZeros(arr) {
  let n = arr.length;
  let temp = [];

  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      temp.push(arr[i]);
    }
  }


  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }
  let noOfSz = temp.length;
  for (let i = noOfSz; i < n; i++) {
    arr[i] = 0;
  }
  return arr;
}

let arr = [1, 3, 0, 2, 4, 0, 3, 0, 2];
moverZeros(arr);
console.log("Move Zeros: ",arr);
