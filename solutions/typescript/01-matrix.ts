// Link: 
// Difficulty: Medium
// Time: 30 minutes

/* 
Given an m x n binary matrix mat, return the distance of 
the nearest 0 for each cell.

The distance between two adjacent cells is 1.

Example 1:
 [0,0,0],      [0,0,0],
 [0,1,0],  =>  [0,1,0],
 [0,0,0]       [0,0,0],

Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0,0],[0,1,0],[0,0,0]]

Example 2:
 [0,0,0],      [0,0,0],
 [0,1,0],  =>  [0,1,0],
 [1,1,1]       [1,2,1],
Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
Output: [[0,0,0],[0,1,0],[1,2,1]]
 

Constraints:
m == mat.length
n == mat[i].length
1 <= m, n <= 104
1 <= m * n <= 104
mat[i][j] is either 0 or 1.
There is at least one 0 in mat. 
*/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
// I think this works, but it's getting the time out on LeetCode :(
const updateMatrix = function(mat: number[][]): number[][] {
  // helper function for each mat index to check closest 0
  const checkIndex = (row:number, col:number):number => {
    if(mat[row][col] === 0) return 0;
    if(row === mat.length || col === mat[0].length) return Infinity;

    let bottom:number = Infinity;
    let right:number = Infinity;
 
    if(row < mat.length - 1) bottom = checkIndex(row + 1, col);
    if(col < mat[0].length - 1) right = checkIndex(row, col + 1);
    
    return 1 + Math.min(bottom, right);
  }
  for(let row:number = 0; row < mat.length; row++){
    for(let col:number = 0; col<mat[0].length; col++){
      let top: number = (0 < row) ? mat[row - 1][col] + 1: Infinity;
      let left: number = (0 < col) ? mat[row][col - 1] + 1: Infinity;
      mat[row][col] = Math.min(top, left, checkIndex(row, col));
    }
  }
  return mat;
};

module.exports = {updateMatrix};