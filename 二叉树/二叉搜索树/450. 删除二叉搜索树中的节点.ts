/* 
给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，
并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

一般来说，删除节点可分为两个步骤：

首先找到需要删除的节点；
如果找到了，删除它。

*/

import TreeNode from "../二叉树遍历/144. 二叉树的前序遍历";
// 递归法
/* function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if(!root) return null;
  if(root.val === key) {
    // 找到对应结点的情况
    //1。如果两个子节点都不存在
    if(!root.left && !root.right) return null;
    //2.如果右节点存在，左节点不存在
    if(!root.left && root.right) return root.right;
    //3.如果左节点存在，右节点不存在
    if(root.left && !root.right) return root.left;
    //4.如果两边节点都存在
    if(root.left && root.right){
      let curNode:TreeNode = root.right;
      while(curNode.left !== null) {
        curNode = curNode.left;
      }
      curNode.left = root.left;
      return root.right;
    }
  }
  if(key > root.val) root.right =  deleteNode(root.right,key);
  if(key < root.val) root.left =  deleteNode(root.left,key);
  return root;
} */

//迭代法
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  function removeNode(node: TreeNode): TreeNode | null {
    if (!node.left && !node.right) return null;
    if (!node.right) return node.left;
    if (!node.left) return node.right;
    let curNode: TreeNode = node.right;
    while (curNode.left) {
      curNode = curNode.left;
    }
    curNode.left = node.left;
    return node.right;
  }
  if (!root) return root;
  let cur: TreeNode | null = root;
  let parent: TreeNode | null = null;
  while (cur) {
    if (key > cur.val) {
      parent = cur;
      cur = cur.right;
    } else if (key < cur.val) {
      parent = cur;
      cur = cur.left;
    } else {
      break;
    }
  }
  if (cur === null) return root;
  if (parent === null) return removeNode(cur);
  if (key > parent.val) {
    parent.right = removeNode(cur);
  } else {
    parent.left = removeNode(cur);
  }
  return root;
}
