/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 滑动窗口，保证每个窗口里的字母都是唯一的
  // 没有重复字母时，调整右边界
  // 当窗口出现重复字母时，调整左边界
  const length = s.length;
  if (!length) return 0;
  const map = new Map();
  let left = 0;
  let max = 0;
  for (i = 0; i < length; i++) {
    const item = s.charAt(i);
    if (map.has(item)) {
      // 出现重复字母，调整左边界，直至窗口中没有重复字母
      left = Math.max(left, map.get(item) + 1);
    }
    map.set(item, i);

    max = Math.max(max, i - left + 1);
  }
  return max;
};
// @lc code=end
