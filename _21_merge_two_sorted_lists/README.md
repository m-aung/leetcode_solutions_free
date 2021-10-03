# Question

> Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

> **_Difficulty_** : _Easy_

## Thoughts before Coding

    Since this is Linked List each node has two children called value and next in our case; val, next.
    The input will be Listnode of l1 and l2
    which means they will have two children for each node
    Important: we are comparing values to values.
    There will be three possible cases:
    1. Both of the ListNodes can be empty nodes
    2. Either one of the ListNode can be empty, in this case we return the one that is not empty.
    3. They might have same values on both Lists.

    The best way to solve Linked Lists is to use recursion because linked lists deeply nested array like data structure. You can either go from start or end of the linked list depending on whether it is singly or doubly linked list. In this case, we have only one pointer next which means we have singly linked list.

    from Example

      1 --->  2 --->  4  | l1
      |- 1    |- 2    |- 4
         |- 2    |- 4    |- null

      for ListNode l1 where it's "value" 1, the "next" would be 2 which means it is pointing to 2.

      1 --->  3 --->  4  | l2
      |- 1    |- 3    |- 4
         |- 3    |- 4    |- null

      The list is already been sorted so we can start either one of the linked lists. I'm gonna start from l1

      let say:
        we use two pointer algorithm, DFS
        one pointer in first list and second pointer in second list, we go deep into the end of the list until the both pointer reach null
        {val:1, next:2}{val:1, next:3}
          |- 1 === 1; therefore
          |- {val:1, next:2}{val:3, next:4}
          return second list l2
            |- 1 < 3; therefore
            |- {val:2, next:4}{val:3, next:4}
            return first list l1
              |- 2 < 3; therefore
              |- {val:4, next: null}{val:3, next:4}
              return first list l1
                |- 4 > 3; therefore
                |- {val:4, next: null}{val:4, next:null}
                return second list l2
                  |- l2 becomes null therefore return l1
                  |- {val:4, next: null}

|                                       |
| :-----------------------------------: |
|          {val:4, next: null}          |
| {val:4, next: null}{val:4, next:null} |
|  {val:4, next: null}{val:3, next:4}   |
|    {val:2, next:4}{val:3, next:4}     |
|    {val:1, next:2}{val:3, next:4}     |
|    {val:1, next:2}{val:1, next:3}     |

                {
                  val:1,
                  next: {
                    val:1,
                    next:{
                      val:2,
                      next:{
                        val:3,
                        next:{
                          val:4,
                          next:{
                            val:4,
                            next:null
                          },
                        },
                      },
                    },
                  }
                }

## Pseudo Code

    Since we are using recursion, the run time would be in stack order
    Time Complexity: O(m) + O(n) === O(m+n) where m is the nodes of l1 and n is nodes of l2
    Space Complexity: O(m+n)

## Sketch
