// upper bound

/*
smallest index such that arr[ind] > k
 */

function upperBound(arr,k){
    let n = arr.length;
    let low = 0;
    let high = n - 1;
    ans = n;

    while(low <= high){
        let mid = Math.floor((low + high) / 2)

        if(arr[mid] > k) {

            ans = mid
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
    return ans;
}

console.log(upperBound([1,2,3,4,5,6,7,8],3));
