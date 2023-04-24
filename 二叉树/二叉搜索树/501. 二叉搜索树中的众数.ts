/* 
给你一个含重复值的二叉搜索树（BST）的根节点 root ，找出并返回 BST 中的所有 众数（即，出现频率最高的元素）。

如果树中有不止一个众数，可以按 任意顺序 返回。

假定 BST 满足如下定义：
结点左子树中所含节点的值 小于等于 当前节点的值
结点右子树中所含节点的值 大于等于 当前节点的值
左子树和右子树都是二叉搜索树
*/
import TreeNode from "../二叉树遍历/144. 二叉树的前序遍历";

function findMode(root: TreeNode | null): number[] {
  let res: number[] = [];
  let helpMap: Map<number, number> = new Map();
  function traversal(node: TreeNode | null): void {
    /* 前序遍历 */
    if (!node) return;
    if (helpMap.get(node.val)) {
      helpMap.set(node.val, helpMap.get(node.val)! + 1);
    } else {
      helpMap.set(node.val, 1);
    }
    traversal(node.left);
    traversal(node.right);
  }
  traversal(root);
  const countArr = Array.from(helpMap);
  countArr.sort((a,b) => {
    return b[1] - a[1];
  })

  let maxCount:number = countArr[0][1];
  for(let i = 0;i < countArr.length;i ++){
    if(countArr[i][1] === maxCount){
      res.push(countArr[i][0]);
    }
  }
  return res;
}
