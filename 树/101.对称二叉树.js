/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // 方法一：递归
  // left 和 right 不等，或者 left 和 right 都为空
  // 递归的比较 left.left 和 right.right，递归比较 left.right 和 right.left
  //   if (!root) return true;
  //   function check(left, right) {
  //     if (!left && !right) return true;
  //     if (!left || !right) return false;
  //     if (left.val !== right.val) return false;
  //     return check(left.left, right.right) && check(left.right, right.left);
  //   }
  //   return check(root.left, root.right);
  // 方法二：迭代
  if (!root) return true;
  const queue = [];

  queue.push(root.left);
  queue.push(root.right);

  while (queue.length) {
    const left = queue.shift();
    const right = queue.shift();

    if (!left && !right) continue;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;

    queue.push(left.left);
    queue.push(right.right);
    queue.push(left.right);
    queue.push(right.left);
  }

  return true;
};
// @lc code=end
