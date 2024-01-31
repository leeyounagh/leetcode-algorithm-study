/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let left = 1,
    right = 1;
  let n = nums.length;
  let output = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    output[i] = left;
    left *= nums[i];
  }

  for (let j = n - 1; j >= 0; j--) {
    output[j] *= right;
    right *= nums[j];
  }

  return output;
  //   투포인터 활용
};
