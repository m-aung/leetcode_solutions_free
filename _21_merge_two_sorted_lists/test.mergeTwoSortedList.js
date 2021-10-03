import { mergeTwoLists } from './mergeTwoSortedList';

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
// example 1
const numList1 = [1, 2, 4],
  numList2 = [1, 3, 4];

const makeLinkedList = (arr) => {
  let list = new ListNode();
  let curNode = list;
  let nextNode = list.next;
  const test = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
  for (let i = 0; i < arr.length; i++) {
    curNode.val = arr[i];
    nextNode = arr[i + 1] ? new ListNode(arr[i + 1]) : null;
    curNode.next = nextNode;
    curNode = curNode.next;
  }
  return list;
};

// making linked lists
const lL1 = makeLinkedList(numList1);
const lL2 = makeLinkedList(numList2);

// create validator function to check whether it is valid linked list or not
function validator(initital, expected) {
  for (num of initial) {
  }
}

console.log(lL1);
console.log(lL2);

console.log(mergeTwoLists(lL1, lL2));
