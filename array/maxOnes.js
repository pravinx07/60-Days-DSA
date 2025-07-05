// 485 Maximum consecutive ones 
//  ex => [1,1,0,1,1,1]  => max Conesecutive ones is 3 times


function maxOnes(arr){
    let count = 0
    let maxCount = 0

    for(let n of arr){
        if ( n === 1) {
            count ++
            maxCount = Math.max(count, maxCount)
        }else {

            count = 0
        }
    }
    return maxCount
}

let arr = [1,1,0,1,1,1]  
let arr1 = [1,1,1,1]  



console.log("Maximum consecutive ones is: ",maxOnes(arr1));
