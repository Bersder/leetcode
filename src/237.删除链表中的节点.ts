/*
 * @lc app=leetcode.cn id=237 lang=typescript
 *
 * [237] 删除链表中的节点
 */

import { ListNode } from './model/node';

/**
 Do not return anything, modify it in-place instead.
 */
// @lc code=start
function deleteNode(root: ListNode): void {
  // 让被删除的节点顶替其下一个节点，然后删掉这个下一个节点
  root.val = root.next!.val;
  root.next = root.next!.next;
}
// @lc code=end
