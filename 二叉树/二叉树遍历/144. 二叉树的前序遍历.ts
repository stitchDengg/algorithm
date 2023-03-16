class TreeNode{
  public val:number;
  public left:TreeNode | null;
  public right:TreeNode | null;
  constructor(val?:number,left?:TreeNode,right?:TreeNode){
    this.val = val === undefined ? 0 : this.val; 
    this.left = left === undefined ? null : this.left; 
    this.right = right === undefined ? null : this.right; 
  }
}

// 1.递归方式
/* function preorderTraversal(root: TreeNode | null): number[] {
  let resArr:number [] = [];
  function reverse(node:TreeNode | null,arr:number []):void{
    if(!node) return;
    arr.push(node.val);
    reverse(node.left,arr);
    reverse(node.right,arr);
  }
  reverse(root,resArr);
  return resArr;
}; */

//2.迭代方式

function preorderTraversal(root: TreeNode | null): number[] {
  let helpStack:TreeNode [] = [];
  let resArr:number[] = []; 
  if(!root) return resArr;
  helpStack.push(root);
  while(helpStack.length != 0){
    let temp:TreeNode = helpStack.pop()!;
    resArr.push(temp.val);
    if(temp.right) helpStack.push(temp.right);
    if(temp.left)   helpStack.push(temp.left);
  }
  return resArr;
};





export default TreeNode;


