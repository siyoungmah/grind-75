// if typescript argument is present, add '/typescript' subfolder to required filepath
const version = process.argv[3] ? `/${process.argv[3]}` : '';

const {TreeNode, lowestCommonAncestor} = require(`../challenges${version}/bst-lowest-common-ancestor.js`);

describe('lowestCommonAncestor tests', () => {
  const bst = new TreeNode(6);
  bst.left = new TreeNode(2);
  bst.left.left = new TreeNode(0);
  bst.left.right = new TreeNode(4);
  bst.left.left.left = new TreeNode(3);
  bst.left.left.right = new TreeNode(5);
  bst.right = new TreeNode(8);
  bst.right.left = new TreeNode(7);
  bst.right.right = new TreeNode(9);

  it('works when the lowest common ancestor is the root', () => {
    const t1 = new TreeNode(2);
    const t2 = new TreeNode(8);
    expect(lowestCommonAncestor(bst, t1, t2)).toEqual(bst);

    const bst2 = new TreeNode(2);
    bst2.left = new TreeNode(1);
    const t3 = new TreeNode(2);
    const t4 = new TreeNode(1);
    expect(lowestCommonAncestor(bst2, t3, t4)).toEqual(bst2);
  });

  it('works when the lowest common ancestor it not the root', () => {
    const t1 = new TreeNode(2);
    const t2 = new TreeNode(4);
    expect(lowestCommonAncestor(bst, t1, t2)).toEqual(bst.left);
  });
})