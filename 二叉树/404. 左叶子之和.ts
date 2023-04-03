
import TreeNode from "./二叉树遍历/144. 二叉树的前序遍历";

/* 
给定二叉树的根节点 root ，返回所有左叶子之和。
*/
// 递归法
/* function sumOfLeftLeaves(root: TreeNode | null): number {
  let midValue:number = 0;
  if(!root) return 0;
  if(!root.left && !root.right) return 0;
  //后序遍历
  let leftValue =  sumOfLeftLeaves(root.left);  //左
  let rightValue =  sumOfLeftLeaves(root.right);  //右
  if(root.left && !root.left.left && !root.left.left){
    //此时找到目标节点
    midValue =  root.left.val;
  }
  return leftValue + midValue + rightValue;
}; */


// 迭代法

function sumOfLeftLeaves(root: TreeNode | null): number {
  //使用层次遍历
  let res = 0;
  let helpQueue:TreeNode[] = [];
  if(!root) return res
  helpQueue.push(root);
  while(helpQueue.length){
    let temp:TreeNode = helpQueue.shift()!;
    if(temp.left && !temp.left.left && !temp.left.right){
      res += temp.left.val;
    }
    temp.left && helpQueue.push(temp.left);
    temp.right && helpQueue.push(temp.right);
  }
  return res;
};