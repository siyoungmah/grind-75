
export class TreeNode {
    val: number;
    left: null | TreeNode;
    right: null | TreeNode;
  
    constructor(val?: number, left?: TreeNode, right?: TreeNode){
      this.val = (val === undefined ? 0 : val);
      this.left = (!left ? null : left);
      this.right = (!right ? null : right);
    }
}