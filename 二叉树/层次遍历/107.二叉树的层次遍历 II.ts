import TreeNode from "../144. 二叉树的前序遍历";

/* 

给你二叉树的根节点 root ，返回其节点值 自底向上的层序遍历 。 
（即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
*/

function levelOrderBottom(root: TreeNode | null): number[][] {
  let resArr:number [][]= [];
  let helpQueue:TreeNode[] = [];
  let tempArr:number[] = [];
  if(root == null) return resArr;
  helpQueue.push(root);
  while(helpQueue.length > 0){
    let size = helpQueue.length;
    for(let i = 0;i < size;i ++){
      let node:TreeNode = helpQueue.shift()!;
      tempArr.push(node.val);
      if(node.left) helpQueue.push(node.left);
      if(node.right) helpQueue.push(node.right);
    }
    resArr.push(tempArr);
    tempArr = [];
  }

  return resArr.reverse();
};