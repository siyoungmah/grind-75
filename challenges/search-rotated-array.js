// Link: https://leetcode.com/problems/search-in-rotated-sorted-array/
// Difficulty: Medium
// Time: 30 min

/* 
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot 
index k (1 <= k < nums.length) such that the resulting array is 
[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 

For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index 
of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 
Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:
Input: nums = [1], target = 0
Output: -1
 

Constraints:
1 <= nums.length <= 5000
-10^4 <= nums[i] <= 10^4
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-10^4 <= target <= 10^4 
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, index = 0) {
  // merge sort divide through half of the array each time
  // keep track of indices (starting index)
  // when cut into left & right, check min & max to determine which half to pursue
  
  // base cases
  if(nums.length === 1) return (nums[0] === target) ? index : -1;
  
  // divide
  const midIndex = Math.ceil(nums.length / 2);
  const leftMin = nums[0];
  const leftMax = nums[midIndex - 1];
  const rightMin = nums[midIndex];
  const rightMax = nums[nums.length - 1];  

  if(target <= leftMax && target >= leftMin) return search(nums.slice(0, midIndex), target, index);
  else if(target <= rightMax && target >= rightMin) return search(nums.slice(midIndex), target, index + midIndex);
  else if(leftMin > leftMax) return search(nums.slice(0, midIndex), target, index);
  else return search(nums.slice(midIndex), target, index + midIndex);
  
}

console.log(search([5, 1, 3], 1)); // 1
console.log(search([5, 1, 3], 0)); // 1
console.log(search([4,5,6,7,0,1,2], 0)); // 4
console.log(search([4,5,6,7,0,1,2], 1)); // 5