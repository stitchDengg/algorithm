


/* 

给定二叉搜索树（BST）的根节点 root 和一个整数值 val。

你需要在 BST 中找到节点值等于 val 的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 null 。


*/

import TreeNode from "../二叉树遍历/144. 二叉树的前序遍历";

/* 递归法 */
/* function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if(!root) return null;
  if(root.val === val) return root;
  let res:TreeNode | null;
  if(val > root.val){
    res = searchBST(root.right,val);
  }
  if(val < root.val){
    res = searchBST(root.left,val);
  }
  return res!;
};
 */

/* 迭代法 */
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  while(root){
    if(root.val === val){
      return root;
    }else if(root.val > val){
      root =  root.left;
    }else{
      root =  root.right;
    }
  }
  return null;
};