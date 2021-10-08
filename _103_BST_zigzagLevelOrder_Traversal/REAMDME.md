# Question

> Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

## Pseudo Code

    The key is even levels tranverse from R-L nodes and odd levels from L-R
    Output is a nested array 2D
    We can use array as double-ended queue data structure, "Deque"
    Every time we are at even levels we push from the back using array.push()
    On the other hand, we add from the front using array.unshift() at odd levels.
    Finally we return the resulting array

## Sketch
