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
const updateMatrix = function(mat) {
  const m = mat.length,
    n = mat[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) continue;
      mat[i][j] = Infinity;
      if (i - 1 >= 0) mat[i][j] = Math.min(mat[i][j], 1 + mat[i - 1][j]);
      if (j - 1 >= 0) mat[i][j] = Math.min(mat[i][j], 1 + mat[i][j - 1]);
    }
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (mat[i][j] === 0) continue;
      if (i + 1 < m) mat[i][j] = Math.min(mat[i][j], 1 + mat[i + 1][j]);
      if (j + 1 < n) mat[i][j] = Math.min(mat[i][j], 1 + mat[i][j + 1]);
    }
  }

  return mat;
};

module.exports = {updateMatrix};