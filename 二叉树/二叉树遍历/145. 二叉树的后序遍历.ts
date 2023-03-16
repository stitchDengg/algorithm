import TreeNode from "./144. 二叉树的前序遍历";


// 递归方式
/* function postorderTraversal(root: TreeNode | null): number[] {
  function reverse(node:TreeNode | null,res:number []):void{
    if(!node) return;
    reverse(node.left,res);
    reverse(node.right,res);
    res.push(node.val);
  }
  let resArr:number[] = [];
  reverse(root,resArr);
  return resArr;
}; */


// 迭代方式
// 在前序遍历稍作修改即可
function postorderTraversal(root: TreeNode | null): number[] {
  let helpQueue:TreeNode[] = [];
  let resArr:number [] = [];
  if(root === null) return resArr;
  helpQueue.push(root);
  while(helpQueue.length){
    let temp:TreeNode = helpQueue.pop()!;
    resArr.push(temp.val);
    if(temp.left) helpQueue.push(temp.left);
    if(temp.right) helpQueue.push(temp.right);
  }
  return resArr.reverse();
}; 