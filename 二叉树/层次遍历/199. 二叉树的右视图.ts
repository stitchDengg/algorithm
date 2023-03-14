import TreeNode from "../144. 二叉树的前序遍历";

/* 
! 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
*/

function rightSideView(root: TreeNode | null): number[] {
  let res:number [] = [];
  let helpQueue:TreeNode[] = [];
  if(!root) return res;
  helpQueue.push(root);
  while(helpQueue.length){
    for(let i = 0,size = helpQueue.length;i < size;i ++){
      let node:TreeNode = helpQueue.shift()!;
      if(i == size - 1) res.push(node.val);
      if(node.left)  helpQueue.push(node.left);
      if(node.right)  helpQueue.push(node.right);
    }
  }
  return res;
};