/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const reverseMe = (subList, p) => {
    let reversedNode = null; // bcoz no nodes added
    let list = subList; // shallow copied

    while (p > 0) {
      // tracking the next node passed by value
      let nextNode = list.next;

      // swap the current nodes in the reversed list with current next node
      list.next = reversedNode;
      // inserting at the front by re-assigning the node with the current sub-list
      reversedNode = list;

      // change the sub-list to next node to move on to next one
      list = nextNode;

      p--; // keeping track of nodes to be reversed
    }
    return reversedNode;
  };

  // counter to track the pointer
  let counter = 0;
  let list = head;

  // let see if the given linked list nodes is less than k nodes tranversing
  while (counter < k && list) {
    // moving to next node
    list = list.next;
    counter++;
  }
  if (counter === k) {
    console.log(counter, '>>>', head, list);
    // reverse the list and get the head of reversed list with k valued nodes only
    let reversedHead = reverseMe(head, k);
    console.log(reversedHead);
    // move on to next node by using the sub-list
    head.next = reverseKGroup(list, k);
    return reversedHead;
  }
  return head;
};

exports.module = { reverseKGroup };
