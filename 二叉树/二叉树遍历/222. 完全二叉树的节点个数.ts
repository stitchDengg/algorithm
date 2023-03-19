

/* 
给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。

完全二叉树 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，
其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。
若最底层为第 h 层，则该层包含 1~ 2h 个节点。
*/

import TreeNode from "./144. 二叉树的前序遍历";

// 按照普通二叉树递归法
/* function countNodes(root: TreeNode | null): number {
  if(!root) return 0;
  let leftNum = countNodes(root.left);
  let rightNum = countNodes(root.right);
  let num = leftNum + rightNum + 1;
  return num;
};
 */


// 按照普通二叉树迭代法（层次遍历）
/* function countNodes(root: TreeNode | null): number {
  let helpQueue:TreeNode[] = [];
  if(!root) return 0;
  helpQueue.push(root);
  let sum:number = 0;
  while(helpQueue.length){
    for(let i:number = 0,szie = helpQueue.length;i < szie;i ++){
      let node:TreeNode = helpQueue.shift()!;
      sum ++;
      if(node.left) helpQueue.push(node.left);
      if(node.right) helpQueue.push(node.right);
    }
  }
  return sum;
};
 */

/* 二叉树特性写法 */
function countNodes(root: TreeNode | null): number {
  if (root === null) return 0;
  let left: number = 0,
      right: number = 0;
  let curNode: TreeNode | null= root;
  while (curNode !== null) {
      left++;
      curNode = curNode.left;
  }
  curNode = root;
  while (curNode !== null) {
      right++;
      curNode = curNode.right;
  }
  if (left === right) {
      return 2 ** left - 1;
  }
  return 1 + countNodes(root.left) + countNodes(root.right);
};