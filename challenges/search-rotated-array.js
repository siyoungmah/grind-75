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
var search = function(nums, target) {
  // merge sort divide through half of the array each time
  // keep track of indices (starting index)
  // when cut into left & right, check min & max to determine which half to pursue
  
  // helper function to binary search through the array without creating more arrays
  const searchWithIndex = (start, end) => {
    console.log(nums.slice(start, end));
    if(end - start === 1) return (nums[start] === target) ? start : -1;

    const midIndex = Math.floor((start + end) / 2);
    const leftMin = nums[start];
    const leftMax = nums[midIndex - 1];
    const rightMin = nums[midIndex];
    const rightMax = nums[end - 1];

    // check for normal left, normal right conditions first
    // then, check if left is a mixed array, if not, right is the mixed array
    if(target <= leftMax && target >= leftMin) return searchWithIndex(start, midIndex);
    else if(target <= rightMax && target >= rightMin) return searchWithIndex(midIndex, end);
    else if(leftMin > leftMax) return searchWithIndex(start, midIndex);
    else return searchWithIndex(midIndex, end);
  }

  return searchWithIndex(0, nums.length);
}

// console.log(search([5, 1, 3], 1)); // 1
// console.log(search([5, 1, 3], 0)); // -1
// console.log(search([4,5,6,7,0,1,2], 0)); // 4
// console.log(search([0,1,2,4,5,6,7], 1)); // 5
// console.log(search([1,2,4,5,6,7,0], 1)); // 5
// console.log(search([2,4,5,6,7,0,1], 1)); // 5
// console.log(search([4,5,6,7,0,1,2], 1)); // 5
// console.log(search([5,6,7,0,1,2,4], 1)); // 5
// console.log(search([6,7,0,1,2,4,5], 1)); // 5
// console.log(search([7,0,1,2,4,5,6], 1)); // 5