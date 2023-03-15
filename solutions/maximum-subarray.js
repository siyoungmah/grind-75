/**
 * Link: https://leetcode.com/problems/maximum-subarray/
 * Difficulty: Medium
 * Time: 20 minutes
 */

/**
 * Given an integer array nums, find the subarray with the largest 
 * sum, and return its sum.
 * 
 * Example 1:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 * 
 * Example 2:
 * Input: nums = [1]
 * Output: 1
 * Explanation: The subarray [1] has the largest sum 1.
 * 
 * Example 3:
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 * Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 * 
 * Constraints:
 * 1 <= nums.length <= 105
 * -104 <= nums[i] <= 104
 * 
 * Follow up: If you have figured out the O(n) solution, try coding 
 * another solution using the divide and conquer approach, which is 
 * more subtle.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSubArray = function(nums) {
  // divide and conquer method
  // input: arr: number[], l:left index, r: right index
  const findMax = (l, r) => {
    if(l === r) return nums[l];

    const mid = Math.floor((l + r) / 2);
    const leftSum = findMax(l, mid);
    const rightSum = findMax(mid + 1, r);
    const mergedSum = findMergedSum(l, r);
    return Math.max(mergedSum, leftSum, rightSum);
  }
 
  const findMergedSum = (left, right) => {  
    let sum = 0;
    let maxLSum = -Infinity;
    const mid = Math.floor((left + right) / 2);
    
    for(let i = mid; i >= left; i--){
      sum += nums[i];
      maxLSum = Math.max(maxLSum, sum);
    }
    sum = 0
    let maxRSum = -Infinity;
    for(let i = mid + 1; i <= right; i++){
      sum += nums[i];
      maxRSum = Math.max(maxRSum, sum);
    }
    return maxLSum + maxRSum;
  }

  return findMax(0, nums.length - 1);
};

// dynamic programming method
var maximumSubArrayDP = function(nums) {
  let currentSum= 0;
  let highestSum = -Infinity;
  for(let i = 0; i < nums.length; i++){
    currentSum += nums[i];
    highestSum = Math.max(highestSum, currentSum);
    if(currentSum < 0) currentSum = 0;
  }
  return highestSum;
};

module.exports = {maximumSubArray};