/* 
给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
差值是一个正数，其数值等于两值之差的绝对值。
*/

import TreeNode from "../二叉树遍历/144. 二叉树的前序遍历";

function getMinimumDifference(root: TreeNode | null): number {
  let helpArr: number[] = [];
  function recur(root: TreeNode | null): void {
    if (!root) return;
    recur(root.left);
    helpArr.push(root.val);
    recur(root.right);
  }
  recur(root);
  let minDIff = Infinity;
  for (let i = 1; i < helpArr.length; i++) {
    let tempDiff = helpArr[i] - helpArr[i - 1];
    if (minDIff > tempDiff) {
      minDIff = tempDiff;
    }
  }
  return minDIff;
}
