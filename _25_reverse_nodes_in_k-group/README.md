# Question

> Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

> k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

> You may not alter the values in the list's nodes, only nodes themselves may be changed.

> **_Difficulty_** : _Hard_

## Thoughts before Coding

    Brute Force Approach
    Since linked list is a recursive tree structure, the brute force approach is using recursion with tranverse tree search. The easies way is to tranverse search algorithum with insertion in the beginning

    We can do the following steps iteratively
    There will be 3 pointers;
    Pointer 1: the head of the sub-list of the original linked list
    Pointer 2: the head of the reversed linked list(the returning linked list) initialize as null
    Pointer 3: to tracking the traversing order of the original list

    1 --> 2 --> 3 --> 4 --> 5  k = 2
                |
                |
               \ /
    2 --> 1 --> 4 --> 3 --> 5

    pointer 1 starts from head of the original list
    pointer 3 starts from the head of the original list and at the end of each iteration the pointer 3 is set to next of the current node
    Use a counter to track the tranverse steps. We keep adding into sub-list(head.next) until we meet one of the conditions below.
    Condition 1: Once the counter === k, we pass it into reverse function to do the reverse work and return the sub-list. Finally, set the counter to 0 again. Pointer 3 is set to next node
    Condition 2: If the counter is less than k and we have reached the tail of the linked list, we return the current sub-list
    Otherwise, set pointer 3 to next node and continue iterating the entire list
    For the reverse function,
    Make a head node with value of null to store the reversed linked list(new head) and a shallow copy of sub-list(list)
    Iteration depends on the k value which means we keep adding new nodes from the front until the list length is equal to k value.
    On each iteration, we swap the next node to the head node using temporary variables. For example, when reversing [1,2] sub-list, the very first thing we do is to store the next node which we are modifying later on to track the iteration. Therefore, we store the next node of (list) as (next_node). After that, we re-assign next node of (list) to be current (new head) where in this iteration it is null because there is no head node yet(this is the part of swaping as well). In other words, this next node of the (list) will becomes the head of reversed list. As we envision how to reverse using tranverse and insertion at the beginning, we start inserting at the front of the node. Now we re-assign the head(new_head) to be current sub-list(list). Frankly, the (new_head) is completely swapped with the entire reversed/ swapped linked list. Then, we move on to next node where we temporaray stored as (next_node) by re-assigning the (list) to it. Of course, we need to decrement the k value because we already added one node to the reverse list
    new_head = null // assumed as end of the line
    list = sub_list // shallow copied
    list = ListNode {
              val:1,
              next: {
                val:2,
                next:null
                }
              }
    iterate until k values is equal to zero
      1st iteration,
      next_node = list.next // to track the next node
      next_node ===> ListNode {val:2, next: null}

      list.next becomes new_head which is null
      list = {val:1, next: null}

      new_head = list // ListNode {val:1, next: null}
      and then move to next pointer second node
      list = next_node
      list ===> ListNode {val:2, next: null}

      reduce k value

## Pseudo Code

    Reverse Function reverseMe
    input: ListNode subList , number p
    output: ListNode reversedNode

    shallow copy --> list = subList
    head node --> reversedNode = null

    loop until we have reversed p nodes
      store next node --> nextNode = list.next
      assign head node --> list.next = reversedNode
      inserting at the front --> reversedNode = list
      move on to next node --> list = nextNode
      reduce the p value --> p--
    return reversedNode

    // this is recursive structure
    track the pointer --> counter = 0
    shallow copy --> list = head

    loop until counter reaches k and list still valid (not the last node)
      list goes to last node --> list = list.next
      increasing counter --> counter ++

    Once counter === k
      reverse the current list --> let reversedHead = reverseMe(head, k)
      move on to the next node recursively --> head.next = reverseKGroup(list,k)

## Sketch
