import TreeNode from '../二叉树遍历/144. 二叉树的前序遍历';

/* 
给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。

*/

// 迭代法
/* function maxDepth(root: TreeNode | null): number {
  let helpQueue:TreeNode [] = [];
  let deep:number = 0;
  if(!root)  return deep;
  helpQueue.push(root);
  while(helpQueue.length){
    deep += 1;
    for(let i = 0,size = helpQueue.length;i < size;i ++){
      let node:TreeNode = helpQueue.shift()!;
      if(node.left) helpQueue.push(node.left);
      if(node.right) helpQueue.push(node.right);
    }
  }
  return deep;
};   */


// 递归法
function maxDepth(root: TreeNode | null): number {
  if(root == null) return 0;
  let leftDepth:number = maxDepth(root.left);
  let rightDepth:number = maxDepth(root.right);
  console.log(Math.max(leftDepth,rightDepth));
  return 1 + Math.max(leftDepth,rightDepth);
};  
