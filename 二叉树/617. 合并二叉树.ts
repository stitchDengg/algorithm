

/* 
给你两棵二叉树： root1 和 root2 。

想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新二叉树的节点。

返回合并后的二叉树。

注意: 合并过程必须从两个树的根节点开始。

*/

import TreeNode from "./二叉树遍历/144. 二叉树的前序遍历";

/* function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if(!root1) return root2;
  if(!root2) return root1;
  root1.val += root2.val;      //中
  root1.left = mergeTrees(root1.left,root2.left);   //左
  root1.right = mergeTrees(root1.right,root2.right); //右
  return root1;
}; */

/* 迭代法 */
function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if(!root1) return root2;
  if(!root2) return root1;
  let helpQueue:TreeNode[] = [];
  helpQueue.push(root1);
  helpQueue.push(root2);
  let tempNode1: TreeNode,
  tempNode2: TreeNode;
  while(helpQueue.length){
    tempNode1 = helpQueue.shift()!;
    tempNode2 = helpQueue.shift()!;
    tempNode1.val += tempNode2.val;
    if(tempNode1.left && tempNode2.left){
      helpQueue.push(tempNode1.left);
      helpQueue.push(tempNode2.left);
    }else if(!tempNode1.left){
      tempNode1.left = tempNode2.left;
    }
    if(tempNode1.right && tempNode2.right){
      helpQueue.push(tempNode1.right);
      helpQueue.push(tempNode2.right);
    }else if(!tempNode1.right){
      tempNode1.right = tempNode2.right;
    }
  }
  return root1;
};

