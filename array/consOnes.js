/**
 maximum consecutive ones 
  arr = [1,1,0,1,1,1,0,1,1]
  ans = 3 => bcos consecutives ones are 3
 */

  function consecutiveOnes(arr){
    let cnt = 0
    let maxi = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 1){
            cnt++
            maxi = Math.max(maxi,cnt)
        }else{
            cnt = 0
        }
    }
    return maxi
  }

  let arr = [1,1,0,1,1,1,0,1,1]
  let arr1 = [0,1,1,1,0,0,0]
  let arr2 = [1]

  console.log(consecutiveOnes(arr2))
  