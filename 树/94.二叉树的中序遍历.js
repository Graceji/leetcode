/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // const result = [];
  // if (!root) return result;

  // function inorder(node) {
  //     if (!node) return;
  //     node.left && inorder(node.left);
  //     result.push(node.val);
  //     node.right && inorder(node.right);
  // }
  // inorder(root);
  // return result;
  //   颜色标记法;
  const result = [];
  const stack = [];
  if (!root) return result;
  stack.push({
    color: "white",
    node: root,
  });
  while (stack.length) {
    const { node, color } = stack.pop();
    if (color === "gray") {
      result.push(node.val);
    } else {
      node.right && stack.push({ color: "white", node: node.right });
      stack.push({
        color: "gray",
        node,
      });
      node.left && stack.push({ color: "white", node: node.left });
    }
  }
  return result;
};
// @lc code=end
