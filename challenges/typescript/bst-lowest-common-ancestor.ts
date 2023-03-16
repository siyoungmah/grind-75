// Link: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
// Difficulty: Easy
// Time: 20 min

/* 
Given a binary search tree (BST), find the lowest common 
ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest 
common ancestor is defined between two nodes p and q as the 
lowest node in T that has both p and q as descendants (where 
we allow a node to be a descendant of itself).”

Example 1:
      6
    /  \
  2      8
 / \    / \
0  4   7   9
   /\
  3 5
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

Example 2:
      6
    /  \
  2      8
 / \    / \
0  4   7   9
   /\
  3 5
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

Example 3:
  2
 /
1
Input: root = [2,1], p = 2, q = 1
Output: 2
 
Constraints:
[] The number of nodes in the tree is in the range [2, 105].
[] -109 <= Node.val <= 109
[] All Node.val are unique.
[] p != q
[] p and q will exist in the BST. */

// Definition for a binary tree node.
import type { TreeNode } from '../../TreeNode';

// class TreeNode {
//   val: number;
//   left: null | TreeNode;
//   right: null | TreeNode;

//   constructor(val: undefined | number, left?: undefined | TreeNode, right?:undefined | TreeNode){
//     this.val = (val === undefined ? 0 : val);
//     this.left = (!left ? null : left);
//     this.right = (!right ? null : right);
//   }
// }

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root: TreeNode, p: TreeNode, q:TreeNode): TreeNode {
    
};

module.exports = { lowestCommonAncestor};