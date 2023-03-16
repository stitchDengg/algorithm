import TreeNode from "./二叉树遍历/144. 二叉树的前序遍历";
/* 
给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
*/

/*
  递归法 
 */
/* function invertTree(root: TreeNode | null): TreeNode | null {
  if(!root) return root;
  // 中
  let temp:TreeNode | null = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};
 */

/* 迭代法(前序遍历) */
function invertTree(root: TreeNode | null): TreeNode | null {
  let helpStack: (TreeNode | null)[] = [];
  if (!root) return null;
  helpStack.push(root);
  while (helpStack.length) {
    let node: TreeNode = helpStack.pop()!;
    if (node) {
      if (node.right) helpStack.push(node.right); //右
      if (node.left) helpStack.push(node.left); //左
      helpStack.push(node); //中
      helpStack.push(null);
    } else {
      //遍历操作，进行遍历
      let popNode: TreeNode = helpStack.pop()!;
      let temp: TreeNode | null = popNode.left;
      popNode.left = popNode.right;
      popNode.right = temp;
    }
  }
  return root;
}
