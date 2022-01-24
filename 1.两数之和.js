/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const result = [];
    const cacheMap = new Map();
    for (let i = 0 ; i < nums.length; i++) {
        const current = nums[i];
        const diff = target - current; // 计算差值
        if (cacheMap.has(diff)) {
            const index = cacheMap.get(diff);
            if (index !== i) {
                // 如果map中有diff对应的记录，并且不是自己，那一定是差值
                result.push(index, i);
            }
        } else {
            cacheMap.set(current, i);
        }
    }
    return result;
};
// @lc code=end
