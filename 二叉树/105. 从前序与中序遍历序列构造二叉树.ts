import TreeNode from './二叉树遍历/144. 二叉树的前序遍历';


/* 
给定两个整数数组 preorder 和 inorder ，
其中 preorder 是二叉树的先序遍历， 
inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
*/


function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if(preorder.length === 0) return  null;
  let nodeVal:number= preorder.shift()!;
  let node:TreeNode = new TreeNode(nodeVal);

  let index:number = inorder.indexOf(nodeVal);
  node.left = buildTree(preorder.slice(0,index),inorder.slice(0,index));
  node.right = buildTree(preorder.slice(index),inorder.slice(index + 1));
  return node;
};