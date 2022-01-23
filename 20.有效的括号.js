/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 解题思路：
  // 当遍历到括号的左半边的时候，把括号的右半边压栈，
  // 当遍历到括号右半边的时候，就把栈顶的元素弹出，
  // 然后再和遍历的符号比较看是否一样
  const stack = [];
  const brackets = s.split("");

  for (let item of brackets) {
    if (item === "(") {
      stack.push(")");
    } else if (item === "[") {
      stack.push("]");
    } else if (item === "{") {
      stack.push("}");
    } else if (stack.length === 0 || stack.pop() !== item) {
      return false;
    }
  }
  return stack.length === 0;
};
// @lc code=end
