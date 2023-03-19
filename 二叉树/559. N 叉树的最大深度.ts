import {Node} from './层次遍历/429.N叉树的层序遍历';
/* 
给定一个 N 叉树，找到其最大深度。

最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

N 叉树输入按层序遍历序列化表示，每组子节点由空值分隔（请参见示例）。


*/

// 递归方法
function maxDepth(root: Node | null): number {
  if(root == null) return 0;
  let depth:number = 0;
  root.children.forEach(item => {
    depth = Math.max(depth,maxDepth(item));
  })
  return depth + 1;
};