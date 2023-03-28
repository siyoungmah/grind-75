// Link: https://leetcode.com/problems/3sum/
// Difficulty: Medium
// Time: 30 min

/* 
Given an integer array nums, return all the triplets 
[nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, 
and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets
does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:
3 <= nums.length <= 3000
-105 <= nums[i] <= 105 
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums: number[], target: number): number[][] {
  // const cache: {[index: number]: {}} = {};
  // const results: number[][] = [];
  // // iterate through the input array using two pointers
  // for(let i:number = 0; i < nums.length - 1; i++){
  //   for(let j:number = i + 1; j < nums.length; j++){
  //     const key:number = target - (nums[i] + nums[j]);
  //     // if(cache[nums[j]]) results.push([key, nums[i], nums[j]]);
  //     // else if(!Object.hasOwn(cache, key)){
  //     //   cache[key] = { [nums[i]]: nums[i], [nums[j]]: nums[j] }; 
  //     // }
  //     if(Object.hasOwn(cache, key)){
  //       // console.log(cache);
  //       // console.log('key: ', key, ', i: ', nums[i], ', j: ', nums[j]);
  //       if((key === nums[i] || key === nums[j])) results.push([key, nums[i], nums[j]]);
  //       else if(cache[nums[i]] || cache[nums[j]]) break;
  //       else results.push([key,nums[i], nums[j]]);
  //     }
  //   }
  //   cache[nums[i]] = true;
  // }
  // return results;
  const findTriplets = function(arr: number[], target: number): number[] {
    
  }
};

console.log(threeSum([0,0,0,0], 0));
console.log(threeSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
console.log(threeSum([-1,0,1,2,-1,-4], 0));
module.exports = {threeSum};