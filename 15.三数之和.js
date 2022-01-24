/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 双指针
  if (!Array.isArray(nums)) return;
  const len = nums.length;
  if (len < 3) return [];
  const result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    let start = i + 1;
    let end = len - 1;
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 剪枝优化，当与前一个元素相同时，则跳过
    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      if (sum === 0) {
        result.push([nums[i], nums[start], nums[end]]);
        while (start < end && nums[start] === nums[start + 1]) {
          // 剪枝优化
          start++;
        }
        while (start < end && nums[end] === nums[end - 1]) {
          // 剪枝优化
          end--;
        }
        start++;
        end--;
      } else if (sum < 0) {
        start++;
      } else {
        end--;
      }
    }
  }
  return result;
};
// @lc code=end
