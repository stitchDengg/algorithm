import TreeNode from "./二叉树遍历/144. 二叉树的前序遍历";

/*
给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。
 */
// 递归法，注意和最大深度的区别
/* function minDepth(root: TreeNode | null): number {
  if(root == null) return 0;

  if(root.left && !root.right){
    return 1 + minDepth(root.left);
  }
  if(!root.left && root.right){
    return 1 + minDepth(root.right);
  }
  return 1 + Math.min(minDepth(root.left),minDepth(root.right));
}; */


// 迭代法（层次遍历)
function minDepth(root: TreeNode | null): number {
  let helpQueue:TreeNode[] = [];
  if(!root) return 0;
  helpQueue.push(root);
  let depth:number = 1;
  while(helpQueue.length){
    for(let i = 0,size = helpQueue.length;i < size;i ++){
      let node:TreeNode = helpQueue.shift()!;
      if(node.left){
        helpQueue.push(node.left);
      }
      if(node.right){
        helpQueue.push(node.right);
      }
      if(!node.left && !node.right){
        return depth;
      }
    }
    depth += 1;
  }
  return depth;
};