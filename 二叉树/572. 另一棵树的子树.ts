/* 

给你两棵二叉树 root 和 subRoot 。检验 root 中是否包含和 subRoot 
具有相同结构和节点值的子树。如果存在，返回 true ；否则，返回 false 。
二叉树 tree 的一棵子树包括 tree 的某个节点和这个节点的所有后代节点。tree 也可以看做它自身的一棵子树。
*/
import TreeNode from "./二叉树遍历/144. 二叉树的前序遍历";
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {

  function compare(root1:TreeNode,root2:TreeNode):boolean{
    if(!root1 && root2) return false;
    else if(root1 && !root2) return false;
    else if(!root1 && !root2) return true;
    else if(root1!.val != root2!.val) return false;
    
    let left = compare(root1.left!,root2.left!);
    let right = compare(root1.right!,root2.right!);
    return left && right ? true : false;
  }

  if(!subRoot) return true;
  if(!root) return false;
  return isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot) || compare(root,subRoot);
};
