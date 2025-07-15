// 735  asteroid 

function asteroid(arr){
    let n = arr.length;
    let change = true
    while(change){
        change = false
        for(let i = 0; i < n -1;i++){
            if(arr[i] > 0 && arr[i+1] < 0){
               let left = arr[i]
               let right = arr[i+1]
               if(Math.abs(left) > Math.abs(right)){
                 arr.splice(i+1, 1)
               }else if(Math.abs(left) < Math.abs(right)){
                arr.splice(i , 1)
               }else{
                arr.splice(i, 2)
               }
               change = true
               break
            }
        }
    }
    return arr

 }


let arr = [5, 10, -5]
console.log(asteroid(arr));
