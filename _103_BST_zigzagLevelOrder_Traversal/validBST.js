/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return []; // edge cases
  const levels = [];
  // recursively call
  const runBFS = (root, level) => {
    // if the level list has the same node as the level add a new array
    if (levels.length === level) levels.push([]);
    // R-L push FIFO
    if (level % 2 === 0) levels[level].push(root.val);
    // L-R push FILO
    else {
      levels[level].unshift(root.val);
    }
    // tranverse left nodes
    if (root.left) runBFS(root.left, level + 1);
    // tranverse right nodes
    if (root.right) runBFS(root.right, level + 1);
  };
  // invoke recursive function
  runBFS(root, 0);
  // returning the array
  return levels;
};
