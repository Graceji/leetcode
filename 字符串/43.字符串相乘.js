/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  // 解题思路：
  // 有两个指针i, j在num1和nums2上游走，计算乘积，
  // 同时将乘积叠加到res的正确位置上
  // 如何将乘积叠加到res的正确位置上?即如何通过i,j计算res的对应索引
  // res最多有m + n位，num1[i]和nums2[j]的乘积对应的就是
  // res[i + j]和res[i + j + 1]这两个位置
  const m = num1.length;
  const n = num2.length;
  const res = new Array(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const multiply = +num1[i] * +num2[j];
      const p1 = i + j;
      const p2 = i + j + 1;
      const sum = multiply + res[p2];
      res[p2] = sum % 10;
      res[p1] += Math.floor(sum / 10);
    }
  }

  while (res[0] === 0) {
    res.shift();
  }

  return res.length ? res.join('') : '0'
};
// @lc code=end
