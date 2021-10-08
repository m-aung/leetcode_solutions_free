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
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root) return true;
  const low = arguments[1];
  const high = arguments[2];

  if ((low != null && root.val <= low) || (high != null && root.val >= high))
    return false;

  return (
    isValidBST(root.left, low, root.val) &&
    isValidBST(root.right, root.val, high)
  );

  //? With Helper function
  const helpMe = (node, low, high) => {
    if (!node) return true;

    if ((low != null && node.val <= low) || (high != null && node.val >= high))
      return false;

    return (
      helpMe(node.left, low, node.val) && helpMe(node.right, node.val, high)
    );
  };
  return helpMe(root, null, null);
};
