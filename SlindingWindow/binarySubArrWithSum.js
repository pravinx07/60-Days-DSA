var numberOfSubarrays = function(nums, goal) {
    return atmost(nums, goal) - atmost(nums, goal-1)
    

    function atmost(nums, goal){
        if(goal < 0) return 0; 
        let l = 0; let sum = 0; let res = 0;
        for(let r = 0; r < nums.length; r++){
               sum += (nums[r] % 2)
               while(sum > goal && l <= r){
                sum -= (nums[l] % 2)
                l++
               }
               res += r - l + 1
        }
        return res
    }
    
};


let arr = [1,0,1,0,1]
let arr2 = [0,0,0,0,0]
let goal = 0
console.log(numberOfSubarrays(arr2, goal));
