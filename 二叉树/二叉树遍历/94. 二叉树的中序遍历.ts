import TreeNode from "./144. 二叉树的前序遍历";


/* 递归法 */
/* function inorderTraversal(root: TreeNode | null): number[] {
  function reverse(node:TreeNode | null,res:number []):void{
    if(!node) return;
    reverse(node.left,res);
    res.push(node.val);
    reverse(node.right,res);
  }
  let resArr:number[] = [];
  reverse(root,resArr);
  return resArr;
}; */

// 迭代法
function inorderTraversal(root: TreeNode | null): number[] {
  let helpStack:TreeNode [] = [];
  let resArr:number[] = [];
  let curNode: TreeNode | null = root;
  while(curNode != null || helpStack.length > 0){
    if(curNode != null){
      // 找到左下角的点
      helpStack.push(curNode);
      curNode = curNode.left;
    }else{
      curNode = helpStack.pop()!;
      resArr.push(curNode.val); //中
      curNode = curNode.right   //右
    }
  }
  return resArr;
};