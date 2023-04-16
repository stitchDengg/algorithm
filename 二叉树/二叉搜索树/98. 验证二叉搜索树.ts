

/* 
给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

有效 二叉搜索树定义如下：

节点的左子树只包含 小于 当前节点的数。
节点的右子树只包含 大于 当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
*/

import TreeNode from "../二叉树遍历/144. 二叉树的前序遍历";

/* 递归法， 中序遍历是否有序即可判断 */
function isValidBST(root: TreeNode | null): boolean {
  let maxVal = -Infinity;
  function inorderTraverse(root: TreeNode | null): boolean {
      if (root === null) return true;
      let leftValid: boolean = inorderTraverse(root.left);
      if (!leftValid) return false;
      if (maxVal < root.val) {
          maxVal = root.val;
      } else {
          return false;
      }
      let rightValid: boolean = inorderTraverse(root.right);
      return leftValid && rightValid;
  }
  return inorderTraverse(root);
};