// if typescript argument is present, add '/typescript' subfolder to required filepath
const version = process.argv[3] ? `/${process.argv[3]}` : '';

const {TreeNode, invertTree} = require(`../challenges${version}/invert-tree.js`);

describe('invertTree tests', () => {
  // [4,2,7,1,3,6,9]
  it('works', () => {
    const bst1 = new TreeNode(4);
    bst1.left = new TreeNode(2);
    bst1.right = new TreeNode(7);
    bst1.left.left = new TreeNode(1);
    bst1.left.right = new TreeNode(3);
    bst1.right.left = new TreeNode(6);
    bst1.right.right = new TreeNode(9);

    const inverted1 = invertTree(bst1);
    expect(inverted1.val).toEqual(4);
    expect(inverted1.left.val).toEqual(7);
    expect(inverted1.right.val).toEqual(2);
    expect(inverted1.left.left.val).toEqual(9);
    expect(inverted1.left.right.val).toEqual(6);
    expect(inverted1.right.left.val).toEqual(3);
    expect(inverted1.right.right.val).toEqual(1);
  });

  it('works for undefined/null inputs', () => {
    const invertedNull = invertTree();
    expect(invertedNull).toBeNull();
  });

  it('works for a single node tree', () => {
    const invertedSingleNode = invertTree(new TreeNode(1));
    expect(invertedSingleNode.val).toEqual(1);
    expect(invertedSingleNode.left).toBeNull();
    expect(invertedSingleNode.right).toBeNull();
  })
});