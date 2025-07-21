// 1004: "Max Consecutive Ones III"

function longestOnes(nums, k) {
    let left = 0, maxLen = 0, zeros = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zeros++;

        while (zeros > k) {
            if (nums[left] === 0) zeros--;
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}


console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));
