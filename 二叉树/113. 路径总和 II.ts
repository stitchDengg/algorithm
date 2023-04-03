import TreeNode from './二叉树遍历/144. 二叉树的前序遍历';

/* 
给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 
从根节点到叶子节点 路径总和等于给定目标和的路径。
叶子节点 是指没有子节点的节点。

*/


function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  let res:number[][] = [];
  function travesal(node:TreeNode,path:number[],count:number):void{
    if(!node.left && !node.right && count === 0){
      res.push([...path]);
    }
    if(node.left){
      count -= node.left.val;
      path.push(node.left.val);
      travesal(node.left,path,count);
      path.pop();
      count += node.left.val;
    }
    if(node.right){
      count -= node.right.val;
      path.push(node.right.val);
      travesal(node.right,path,count);
      path.pop();
      count += node.right.val;
    }
  }
  if(!root) return res;
  let path:number[] = [];
  path.push(root.val);
  travesal(root,path,targetSum - root.val);
  return res;
};