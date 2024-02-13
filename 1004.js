var longestOnes = function(nums, k) {
    let left = 0, right = 0;
    let maxLength = 0;

    while (right < nums.length) {
        if (nums[right] === 0) {
            k--;
        }

        while (k < 0) {
            if (nums[left] === 0) {
                k++;
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    }

    return maxLength;
};

// 슬라이딩 윈도우