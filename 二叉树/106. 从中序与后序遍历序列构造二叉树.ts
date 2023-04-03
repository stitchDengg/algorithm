import TreeNode from './二叉树遍历/144. 二叉树的前序遍历';


/* 
给定两个整数数组 inorder 和 postorder ，
其中 inorder 是二叉树的中序遍历， 
postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。
*/
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {

  //1.递归出口 如果后序数组不存在则返回null
  if(postorder.length === 0) return null;

  //2.拿到后序最后一个元素，就是当前的中间节点
  let nodeVal:number = postorder.pop()!;
  let node:TreeNode = new TreeNode(nodeVal);

  //叶子结点
  if(postorder.length === 1) return node;

  //3.找切割点
  let index:number = inorder.indexOf(nodeVal);

  //4.切割中序数组，得到中序左数组和右数组
  let leftInorder:number [] = inorder.slice(0,index);
  let rightInorder:number [] = inorder.slice(index + 1);

  //5.切割后序数组
  let leftPostorder:number [] = postorder.slice(0,index);
  let rightPostorder:number [] = postorder.slice(index);

  node.left = buildTree(leftInorder,leftPostorder);
  node.right = buildTree(rightInorder,rightPostorder);

  return node;
};