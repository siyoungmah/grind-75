// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]
 
// Constraints:
// - The number of nodes in both lists is in the range [0, 50].
// - -100 <= Node.val <= 100
// - Both list1 and list2 are sorted in non-decreasing order.

// Difficulty: easy
// Time: 20 min
// Leetcode link: https://leetcode.com/problems/merge-two-sorted-lists/description/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

interface NodeType {
  val: number,
  next: null | NodeType
}

class ListNode implements NodeType {
  val: number;
  next: null | NodeType;

  constructor(val?: number, next?: NodeType){
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

const mergeTwoLists = function(list1: ListNode, list2: ListNode) {
  // edge-cases: undefined inputs
  if(!list1 && !list2) return null;
  if(!list1) return list2;
  if(!list2) return list1;
  
  // use a two-pointer system
  let p1: ListNode | null = list1;
  let p2: ListNode | null= list2;


  // figure out what to start with
  const mergedListHead: ListNode = new ListNode(); 
  let mergedList: ListNode = mergedListHead;
  if(p1.val < p2.val){
    mergedListHead.val = p1.val;
    p1 = p1.next;
  }
  else{
    mergedListHead.val = p2.val;
    p2 = p2.next;
  }

  while(p1 || p2){
    if(!p1) {
      mergedList.next = p2;
      break;
    }
    if(!p2){
      mergedList.next = p1;
      break;
    }

    if(p1.val < p2.val){
      mergedList.next = p1;
      p1 = p1.next;
      mergedList = mergedList.next;
    } else {
      mergedList.next = p2;
      p2 = p2.next;
      mergedList = mergedList.next;
    }
  }
  return mergedListHead;
};

// time: 22 min

module.exports = {ListNode, mergeTwoLists};