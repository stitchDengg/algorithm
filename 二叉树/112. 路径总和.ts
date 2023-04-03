


import TreeNode from './二叉树遍历/144. 二叉树的前序遍历';


function hasPathSum(root: TreeNode | null, targetSum: number): boolean {

  function travesal(root:TreeNode | null,count:number):boolean{
    if(!root) return false;
    //递归出口
    if(!root.left && !root.right && count === 0) return true; //找到了合适的边
    if(!root.left && !root.right) return false; //没找到合适的边
    if(root.left){
      if(travesal(root.left,count - root.left.val)) return true;
    }
    if(root.right){
      if(travesal(root.right,count - root.right.val)) return true;
    }
    return false;
  }
  return travesal(root,targetSum);
};