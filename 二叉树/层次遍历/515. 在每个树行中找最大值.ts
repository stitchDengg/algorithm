
/* 

! 给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。
*/
import TreeNode from "../144. 二叉树的前序遍历";

function largestValues(root: TreeNode | null): number[] {
  let resArr:number[] = [];
  let helpQueue:TreeNode[] = [];
  if(root == null) return resArr;
  helpQueue.push(root);
  while(helpQueue.length){
    let max = -Number.MAX_VALUE;
    for(let i = 0,size = helpQueue.length;i < size; i ++){
      let node:TreeNode = helpQueue.shift()!;
      if(node.val > max) max =node.val; 
      if(node.left) helpQueue.push(node.left);
      if(node.right) helpQueue.push(node.right);
    }
    resArr.push(max);
  }
  return resArr;
};