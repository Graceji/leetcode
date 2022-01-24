/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let carray = 0;
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;
  const res = [];

  while (p1 >= 0 || p2 >= 0) {
    const n1 = p1 >= 0 ? +num1[p1] : 0;
    const n2 = p2 >= 0 ? +num2[p2] : 0;
    const sum = n1 + n2 + carray;
    res.unshift(sum % 10);
    carray = Math.floor(sum / 10);
    p1--;
    p2--;
  }
  if (carray > 0) {
    res.unshift(carray);
  }

  return res.join('');
};
// @lc code=end
