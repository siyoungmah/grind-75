// if typescript argument is present, add '/typescript' subfolder to required filepath
const version = process.argv[3] ? `/${process.argv[3]}` : '';

const {ListNode, mergeTwoLists} = require(`../challenges${version}/merge-two-lists.js`);

describe('mergeTwoLists tests', () => {

  it('merges two sorted lists', () => {
    const list1 = new ListNode(1);
    list1.next = new ListNode(2);
    list1.next.next = new ListNode(4);
    
    const list2 = new ListNode(1);
    list2.next = new ListNode(3);
    list2.next.next = new ListNode(4);
    const mergedList = mergeTwoLists(list1, list2);
    expect(mergedList.val).toEqual(1);
    expect(mergedList.next.val).toEqual(1);
    expect(mergedList.next.next.val).toEqual(2);
    expect(mergedList.next.next.next.val).toEqual(3);
    expect(mergedList.next.next.next.next.val).toEqual(4);
    expect(mergedList.next.next.next.next.next.val).toEqual(4);
  });

  it('handles both undefined inputs', () => {
    const mergedList = mergeTwoLists();
    expect(mergedList).toBeNull();
  });

  it('handles one undefined input', () => {
    const mergedList = mergeTwoLists(undefined, new ListNode(0));
    expect(mergedList.val).toEqual(0);
    expect(mergedList.next).toEqual(null);
  });
});