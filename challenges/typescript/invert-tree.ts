/**
 * Given the root of a binary tree, invert the tree, and return its root.
 * 
 * Example 1: 
 * Input: root = [4,2,7,1,3,6,9]
 * Output: [4,7,2,9,6,3,1]
 * 
 * Example 2: 
 * Input: root = [2,1,3]
 * Output: [2,3,1]
 * 
 * Example 3:
 * Input: root = []
 * Output: []
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 */

/**
 * Difficulty: Easy
 * Time: 15 minutes
 * Link: https://leetcode.com/problems/invert-binary-tree/
 */

interface TreeType {
  val: number,
  left: null | TreeType,
  right: null | TreeType
}


// Definition for a binary tree node.
class TreeNode implements TreeType {
  val: number;
  left: null | TreeType;
  right: null | TreeType;

  constructor(val: undefined | number, left?: undefined | TreeType, right?:undefined | TreeType){
    this.val = (val === undefined ? 0 : val);
    this.left = (!left ? null : left);
    this.right = (!right ? null : right);
  }
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function(root: TreeType): TreeType {

};