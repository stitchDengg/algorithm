import TreeNode from './二叉树遍历/144. 二叉树的前序遍历';

/* 
给定一个二叉树，判断它是否是高度平衡的二叉树。
本题中，一棵高度平衡二叉树定义为：
一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

*/


function isBalanced(root: TreeNode | null): boolean {
  function getDepth(node:TreeNode | null):number{
    // 递归终止条件
    if(!node) return 0;
    let leftDepth:number = getDepth(node.left);  //左
    if(leftDepth === -1) return - 1;
    let rightDepth:number = getDepth(node.right); // 右
    if(rightDepth === -1) return - 1;
    // 如果两树之差绝对值大于1
    if(Math.abs(leftDepth - rightDepth) > 1) return -1;
    return 1 + Math.max(leftDepth,rightDepth);
  }
  return getDepth(root) !== -1;
};