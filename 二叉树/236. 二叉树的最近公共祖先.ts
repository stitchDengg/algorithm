

/* 

给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，
满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
*/

import TreeNode from "./二叉树遍历/144. 二叉树的前序遍历";
/* 二叉树的最近公共祖先 */
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  // 递归出口
  if(root === null || root === p || root === q) return root;
  // 后序遍历
  let left:TreeNode | null = lowestCommonAncestor(root.left,p,q);
  let right:TreeNode | null = lowestCommonAncestor(root.right,p,q);
  
  if(left && right) return root;
  if(!left && right) return right;
  else if(left && !right) return left;
  else return null;
};

