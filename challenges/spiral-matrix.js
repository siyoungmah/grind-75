// Link: https://leetcode.com/problems/spiral-matrix/
// Difficulty: Medium
// Time: 25 min

/**
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 * 
 * Example 1:
 * [1,2,3]
 * [4,5,6]
 * [7,8,9]
 * 
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [1,2,3,6,9,8,7,4,5]
 * 
 * Example 2:
 * [1, 2, 3, 4]
 * [5, 6, 7, 8]
 * [9,10,11,12]
 * 
 * Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * Constraints:
 * m == matrix.length 
 * n == matrix[i].length
 * 1 <= m, n <= 10
 * -100 <= matrix[i][j] <= 100
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralMatrix = (matrix) => {
  const results = [];

  // iterate through the matrix
  const iterateMatrix = (colFirst, colLast, rowFirst, rowLast) => {
    // console.log('colFirst: ', colFirst, ', colLast: ', colLast, ', rowFirst: ', rowFirst, ', rowLast: ', rowLast);
    // base cases 1: if first and last pointers swap or overlap
    if(colFirst >= colLast || rowFirst >= rowLast) {
      return results;
    }

    // base case 2: only one column left
    if(colLast - colFirst === 1){
      for(let i = rowFirst; i < rowLast; i++){
        results.push(matrix[i][colFirst]);
      }
      return results;
    }

    // base case 3: if only one row left
    if(rowLast - rowFirst === 1){
      for(let i = colFirst; i < colLast; i++){
        results.push(matrix[rowFirst][i]);
      }
      return results;
    }

    // go top-right,
    for(let i = colFirst; i < colLast - 1; i++){
      results.push(matrix[rowFirst][i]);
    }
    // right-down,
    for(let i = rowFirst; i < rowLast - 1; i++){
      results.push(matrix[i][colLast - 1]);
    }
    // down-left
    for(let i = colLast - 1; i > colFirst; i--){
      results.push(matrix[rowLast - 1][i]);
    }
    // left-up
    for(let i = rowLast - 1; i > rowFirst; i--){
      results.push(matrix[i][colFirst]);
    }
    return iterateMatrix(colFirst + 1, colLast - 1, rowFirst + 1, rowLast - 1);
  }
  // repeat for next inner square
  // this seems to be recursive. 
  return iterateMatrix(0, matrix[0].length, 0, matrix.length);
};

// TESTS
console.log(spiralMatrix([[1,2,3], [4,5,6], [7,8,9]]));
// console.log(spiralMatrix([[1,2,3,4], [5,6,7,8], [9,10,11,12]]));
// console.log(spiralMatrix([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]));
// console.log(spiralMatrix([[1,2,3], [4,5,6], [7,8,9], [10,11,12]]));
console.log(spiralMatrix([[1,2,3]]));
console.log(spiralMatrix([[1],[2],[3]]));
console.log(spiralMatrix([[1,2], [3,4]]));

