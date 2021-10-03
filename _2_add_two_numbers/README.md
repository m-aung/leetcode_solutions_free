# Question

> You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

> You may assume the two numbers do not contain any leading zero, except the number 0 itself.

## Thoughts before Coding

    Linear Search Algorithm

    from Example
                      1  | carry
      2 --->  4 --->  3  | l1
      5 --->  6 --->  4  | l2
      _________________
      7 --->  0 --->  8

    For the first column,
      2 is value of current node of lL1 and 5 is value of current node of lL2
      7 is the sum of 2 and 5 which will be the value of current node of returning Linked List
      there is nothing to carry for next node
    for the second one,
      Repeat the same steps as first column.
      This time the sum is over 10. Thus we need to carry the second digit (1) to the next node.
    for the last column,
      the sum of 2 linked list nodes are added with the carry value (1)
    Finally return the Linked List(in our case the node)
    Since this is a node structure we can use recursion.
    Before considering recursively,
      1. Is our iteration relying on each other. In our case the deepest node needs carry validation from the previous nodes.
      2. What is our base case? Our base case would be existance of either one of both Linked Lists.

## Pseudo Code

    Assign node = null initailly
    Since we are adding new argument(carry) in the recursive call,
    we will instantiate carry = arguments[2] since l1 and l2 are 0 and 1 indexed elements in arguments array.
    base case:
      When l1 || l2 exist
        if(l1 exists)
          num1 = l1.val else 0
          nextNum1 = l1.next else null

        if(l2 exists)
          num2 = l2.val else 0
          nextNum2 = l2.next else null

        total =  num1 + num2 + carry // carry can be true or false in binary 1 or 0 however some node engine can't process that so it is much safer to use the ternary operator true ? 1 : 0 instead of using arithmatic operator with boolean

      assign node to new ListNode(total % 10) // only the remainders
      which means
          2
          5
         ___
          7  <-- is the value of the current node. We need next node to be point at current node.next where node.next = addTwoNumbers(nextNum1, nextNum2, total >= 10) .

      This is where recursion comes in.
        New l1 and l2 are the next node of current node. That is why we set base case is the validation of l1 and l2. l1 and l2 will becomes null at the very last node
        node.next is creating another node which will be the same process as base case:

      after the recursive function is fully invoked which means the l1 or l2 are no longer exist, we can return the node(ListNode)

      Yet, we need to consider the carry probablity at the very end.
      if the carry exist at the end we need to add a new node which will be come
      node = new ListNode(1) because carry is always 1 which is the 1st digit of 10
      Example:

        9 --->  9 --->  9 --->  9 --->  9 --->  9 --->  9
        9 --->  9 --->  9 --->  9  ---> 0 --->  0 --->  0
        __________________________________________________________
        8 --->  9 --->  9 --->  9 --->  0 --->  0 --->  0 --->  1

      8 is node.value and 9 is the node.next in the 1st recursive call
      ....
      On second last recursive call,
      0 is node.value(last zero) and null is the node.next.
      On the last call,
      We don't need another recursive call bcoz both l1 and l2 are null however
      We still have carry = true so we need to add a new node.
      Therefore, we assign node=new listNode with the value of 1 and since this is the last node, there is no node.next. Thus, we assign node.next = null
      Then we return the node like all the itreations.
      Finally we will have array of values of all the nodes
      [8,9,9,9,0,0,0,1]

## Sketch
