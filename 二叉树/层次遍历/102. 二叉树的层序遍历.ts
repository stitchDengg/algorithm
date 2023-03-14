import TreeNode from "../144. 二叉树的前序遍历";

// 二叉树的层次遍历
function levelOrder(root: TreeNode | null): number[][] {
  let resArr:number [][]= [];
  let helpQueue:TreeNode[] = [];
  let tempArr:number[] = [];
  if(root == null) return resArr;
  helpQueue.push(root);
  while(helpQueue.length > 0){
    let size = helpQueue.length;
    for(let i = 0;i < size;i ++){
      let node:TreeNode = helpQueue.shift()!;
      tempArr.push(node.val);
      if(node.left) helpQueue.push(node.left);
      if(node.right) helpQueue.push(node.right);
    }
    resArr.push(tempArr);
    tempArr = [];
  }

  return resArr;
};