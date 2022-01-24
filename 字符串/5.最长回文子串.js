/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const length = s.length;
  let max = "";
  const dp = Array.from(new Array(length), () => []);
  for (let len = 1; len <= length; len++) {
    for (let i = 0; i < length; i++) {
      let end = i + len - 1;
      if (end > length - 1) break;
      if (len === 1) {
        dp[i][end] = true;
      } else if (len === 2) {
        dp[i][end] = s[i] === s[end];
      } else {
        dp[i][end] = dp[i + 1][end - 1] && s[i] === s[end];
      }

      if (dp[i][end] && len > max.length) {
        max = s.slice(i, end + 1);
      }
    }
  }
  return max;
};
// @lc code=end
