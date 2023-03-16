import TreeNode from "./144. 二叉树的前序遍历";
/* 
二叉树三大遍历统一写法
*/

// 前序遍历
function preorderTraversal(root:TreeNode | null):number[]{
  let res:number[] = [];
  let helpQueue = new Array<TreeNode | null>;
  if(!root) return res;
  helpQueue.push(root);
  while(helpQueue.length > 0){
    let temp:TreeNode = helpQueue.pop()!;
    if(temp !== null){
      if(temp.right) helpQueue.push(temp.right); //右
      if(temp.left) helpQueue.push(temp.left); //左
      helpQueue.push(temp); // 中
      helpQueue.push(null); // 标记已经访问过的节点
    }else{
      res.push(helpQueue.pop()!.val)
    }
  }

  return res;
}



// 中序遍历
function inorderTraversal(root:TreeNode | null):number[]{
  type queueArr = TreeNode | null;
  let helpQueue:queueArr[]= [];
  let res:number[] = [];
  if(!root) return res;
  helpQueue.push(root);
  while(helpQueue.length > 0){
    let temp:TreeNode = helpQueue.pop()!;
    if(temp !== null){
      if(temp.right) helpQueue.push(temp.right);  //右
      helpQueue.push(temp);   // 中
      helpQueue.push(null);  //标记代表已经访问过了
      if(temp.left) helpQueue.push(temp.left);  //左
    }else{
      res.push(helpQueue.pop()!.val);
    }
  }

  return res;
}

// 后序遍历
function postorderTraversal(root:TreeNode | null):number[]{
  type queueArr = TreeNode | null;
  let helpQueue:queueArr[]= [];
  let res:number[] = [];
  if(!root) return res;
  helpQueue.push(root);
  while(helpQueue.length > 0){
    let temp:TreeNode = helpQueue.pop()!;
    if(temp !== null){
      helpQueue.push(temp);   // 中
      helpQueue.push(null);  //标记代表已经访问过了
      if(temp.right) helpQueue.push(temp.right);  //右
      if(temp.left) helpQueue.push(temp.left);  //左
    }else{
      res.push(helpQueue.pop()!.val);
    }
  }

  return res;
}

