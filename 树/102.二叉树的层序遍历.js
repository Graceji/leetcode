/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = [];
    if (!root) return result;
    const queue = [];
    queue.push(root);

    while (queue.length) {
        const len = queue.length;
        const level = [];
        for (i = 0 ; i < len; i++) {
            const node = queue.shift();
            level.push(node.val);

            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        result.push(level);
    }
    return result;
};
// @lc code=end

