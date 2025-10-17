/*135. Candy
There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
You are giving candies to these children subjected to the following requirements:
Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.
Example 1:
Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
Example 2:
Input: ratings = [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.

*/
var candy = function(arr) {
    let n = arr.length;
    let ltr = Array(n).fill(1);

    for(let i = 1; i < n; i++){
        if(arr[i] > arr[i - 1]){
            ltr[i] = ltr[i - 1] + 1;
        }
    }

    let rtl = Array(n).fill(1);
    for(let i = n - 2; i >= 0; i--){
        if(arr[i] > arr[i + 1]){
            rtl[i] = rtl[i + 1] + 1;
        }
    }

    let ans = 0
    for(let i = 0; i < n; i++){
        ans = ans + Math.max(ltr[i],rtl[i])
    }
    return ans;
};


let ratings = [1,0,2]
console.log(candy(ratings));
