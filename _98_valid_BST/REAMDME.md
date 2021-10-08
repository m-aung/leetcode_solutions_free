# Question

> Given the root of a binary tree, determine if it is a valid binary search tree (BST).
>
> A valid BST is defined as follows:
>
> The left subtree of a node contains only nodes with keys less than the node's key.
> The right subtree of a node contains only nodes with keys greater than the node's key.
> Both the left and right subtrees must also be binary search trees.

## Pseudo Code

    A tree has two nodes : left and right
    Left node is less than right node
    All nodes has valid bst nodes
    This is a recursive structure, we can use BFS to validate the tree

    Base case: return true either left node or right node is null
    Set up a min and max boundary initialized as null
    Two conditions will return false value:
      1. when there is max value and the current node is greater than max
      2. when there is min value and the current node is less than min
    Recursively call on both nodes
    node.left = isValidBST(node.left,min,max = node.val)
    node.right = isValidBST(node.right, min = node.val, max)
    otherwise return true

    You can either use the recursive approach with or without helper function

## Sketch
