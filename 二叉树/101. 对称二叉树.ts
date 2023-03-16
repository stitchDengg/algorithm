
/* 
给你一个二叉树的根节点 root ， 检查它是否轴对称。
*/
import TreeNode from "./二叉树遍历/144. 二叉树的前序遍历";
/* 递归法*/
/* function isSymmetric(root: TreeNode | null): boolean {


  function diff(left:TreeNode | null,right:TreeNode | null):boolean{
    if(left != null && right == null) return false;
    else if(left == null && right != null) return false;
    else if(!left && !right) return true;
    else if(left!.val != right!.val) return false;

    // 此时进入递归逻辑
    let leftDiff:boolean = diff(left!.left,right!.right);   //左树左 右树右
    let rightDiff:boolean = diff(left!.right,right!.left);   //左树右 右树左
    return leftDiff && rightDiff ? true : false;    //左树中 右树中
  }
  if(!root) return false;
  return diff(root.left,root.right);
}; */


/* 迭代法 */
function isSymmetric(root: TreeNode | null): boolean {
  let helpQueue:(TreeNode | null) []  = [];
  if(!root) return true;
  helpQueue.push(root.left);
  helpQueue.push(root.right);
  while(helpQueue.length > 0){
    let leftNode:TreeNode = helpQueue.shift()!;
    let rightNode:TreeNode = helpQueue.shift()!;
        // 如果两方都为null
    if(!leftNode && !rightNode){
      continue;
    }
     //如果是一方为null  或者值不想等
    if(!leftNode || !rightNode || (leftNode.val != rightNode.val)){
      return false;
    }
    helpQueue.push(leftNode.left);
    helpQueue.push(rightNode.right);
    helpQueue.push(leftNode.right);
    helpQueue.push(rightNode.left);
  }
  return true;
};