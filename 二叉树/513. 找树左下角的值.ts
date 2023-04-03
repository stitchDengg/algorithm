
/* 
给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。

假设二叉树中至少有一个节点。
*/
import TreeNode from "./二叉树遍历/144. 二叉树的前序遍历";

function findBottomLeftValue(root: TreeNode | null): number {
  let helpQueue:TreeNode []  = [];
  let res:number = 0;
  if(!root) return res;
  helpQueue.push(root);
  while(helpQueue.length){
    for(let i =0,size = helpQueue.length;i < size;i ++){
      let temp:TreeNode = helpQueue.shift()!;
      if(i === 0) res = temp.val;
      temp.left && helpQueue.push(temp.left);
      temp.right && helpQueue.push(temp.right)
    }
  }
  return res;
};