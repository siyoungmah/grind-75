// Link: https://leetcode.com/problems/insert-interval/
// Difficulty: Medium 
// Time: 25 min

/* 
You are given an array of non-overlapping intervals intervals where 
intervals[i] = [starti, endi] represent the start and the end of the 
ith interval and intervals is sorted in ascending order by starti. You 
are also given an interval newInterval = [start, end] that represents 
the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted 
in ascending order by starti and intervals still does not have any 
overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

 
Example 1:
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 
Constraints:
0 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 105
intervals is sorted by starti in ascending order.
newInterval.length == 2
0 <= start <= end <= 105 
*/
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insertInterval = function(intervals: number[][], newInterval:number[]): number[][] {
  // break it down into two steps
  // step 1: insertion
  // step 2: merges

  // step 1: insertion
  // iterate through the array, and add the newInterval in the appropriate spot
  if(intervals.length === 0) return [newInterval];
  for(let i: number = 0; i < intervals.length; i++){
    if(newInterval[0] <= intervals[i][0]){
      if(newInterval[0] === intervals[i][0]){
        if(newInterval[1] > intervals[i][1]) intervals.splice(i + 1, 0, newInterval);
        break;
      }
      else{
        intervals.splice(i, 0, newInterval)
        break;
      } 
    }
    if(i === intervals.length - 1) intervals.push(newInterval);
  }

  // step 2: iterate through the array and merge
  const results: number[][] = intervals.splice(0, 1);
  for(let i: number = 0; i < intervals.length; i++){
    if(results[results.length - 1][1] >= intervals[i][0]){
      results[results.length - 1][1] = Math.max(results[results.length - 1][1], intervals[i][1]);
    }
    else results.push(intervals[i]);
  }
  return results;
};


module.exports = {insertInterval};