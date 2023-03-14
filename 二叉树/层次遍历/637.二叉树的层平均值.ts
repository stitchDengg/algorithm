/* 
给定一个非空二叉树的根节点 root , 以数组的形式返回每一层节点的平均值。
与实际答案相差 10-5 以内的答案可以被接受。

输入：root = [3,9,20,null,null,15,7]
输出：[3.00000,14.50000,11.00000]
解释：第 0 层的平均值为 3,第 1 层的平均值为 14.5,第 2 层的平均值为 11 。
因此返回 [3, 14.5, 11] 。
*/
import TreeNode from "../144. 二叉树的前序遍历";
function averageOfLevels(root: TreeNode | null): number[] {
  let resArr:number[] = [];
  let helpQueue:TreeNode[] = [];
  if(root == null) return resArr;
  helpQueue.push(root);
  while(helpQueue.length){
    let sum = 0;
    let count:number = 0;
    for(let i = 0,size = helpQueue.length;i < size; i ++){
      let node:TreeNode = helpQueue.shift()!;
      sum += node.val;
      count ++;
      if(node.left) helpQueue.push(node.left);
      if(node.right) helpQueue.push(node.right);
    }
    resArr.push(sum / count)
  }
  return resArr;
};  