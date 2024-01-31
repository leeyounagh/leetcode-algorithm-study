/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let tempSum = 0; 
    let maxSum = -Infinity; 

   for (let i = 0; i < k; i++) {
       tempSum += nums[i];
   }
   maxSum = tempSum; 


   for (let i = k; i < nums.length; i++) {
       tempSum = tempSum - nums[i - k] + nums[i]; 
       maxSum = Math.max(maxSum, tempSum); 
   }

   return maxSum / k; 
};