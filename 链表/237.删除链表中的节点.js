/*
 * @lc app=leetcode.cn id=237 lang=javascript
 *
 * [237] 删除链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // 思路分析：
    // 要在链表中删除一个节点时，一般的操作是：
    // 1. 修改要删除节点的上一个节点的指针
    // 2. 将该指针指向要删除节点的下一个节点
    // 但是此题中没有告知上一个节点
    // 所以要找一个可以知道上一个节点的节点，把它变成要删除的节点，然后删除
    // 例如：4 -> 5 -> 1 -> 9
    // 将5的下一个节点的值赋值给5，把它变成一个不需要删除的节点，这样就会变成 4 -> 1 -> 1 -> 9,
    // 这样一来，第二个1和第三个1，无论删除哪个都可以达到效果
    // 第二个节点不好删除，那就删除第三个，因为可以获取它的上一个节点
    node.val = node.next.val;
    node.next = node.next.next;
};
// @lc code=end

