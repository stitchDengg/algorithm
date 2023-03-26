

/* 
给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
*/
import TreeNode from "./二叉树遍历/144. 二叉树的前序遍历";
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  
  if(!p && q) return false;
  else if(p && !q) return false;
  else if(!p && !q) return true;
  else if(p!.val != q!.val) return false;

  let left = isSameTree(p!.left,q!.left);
  let right = isSameTree(p!.right,q!.right);
  return left && right ? true : false;
};