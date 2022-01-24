/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
  // const result = [];
  // if (!root) return result;

  // function postorder(node) {
  //     if (!node) return;
  //     node.left && postorder(node.left);
  //     node.right && postorder(node.right);
  //     result.push(node.val);
  // }
  // postorder(root);
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
      stack.push({
        color: "gray",
        node,
      });
      node.right && stack.push({ color: "white", node: node.right });
      node.left && stack.push({ color: "white", node: node.left });
    }
  }
  return result;
};
// @lc code=end
