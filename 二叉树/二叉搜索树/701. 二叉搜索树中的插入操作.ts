
/* 
给定二叉搜索树（BST）的根节点 root 和要插入树中的值 value ，
将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。 输入数据 保证 ，
新值和原始二叉搜索树中的任意节点值都不同。
注意，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。
 你可以返回 任意有效的结果 。

*/
/* 迭代法 */
import TreeNode from "../二叉树遍历/144. 二叉树的前序遍历";
/* function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if(!root) return new TreeNode(val);
  let node:TreeNode | null = root;
  //需要记录上一个结点否则无法赋值
  let parentNode:TreeNode= root;
  while(node){
    parentNode = node;
    if(val > node.val){
      node = node.right;
    }else if(val <= node.val){
      node = node.left;
    }
  }
  let newNode = new TreeNode(val);
  if(val < parentNode.val) parentNode.left = newNode;
  else parentNode.right = newNode;
  return root;
}; */

/* 递归法 */
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if(!root) return new TreeNode(val);
  if(val < root.val){
    root.left = insertIntoBST(root.left,val);
  }
  if(val > root.val){
    root.right = insertIntoBST(root.right,val);
  }
  return root;
}