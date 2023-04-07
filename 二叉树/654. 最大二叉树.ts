

/* 
给定一个不重复的整数数组 nums 。 最大二叉树 可以用下面的算法从 nums 递归地构建:
创建一个根节点，其值为 nums 中的最大值。
递归地在最大值 左边 的 子数组前缀上 构建左子树。
递归地在最大值 右边 的 子数组后缀上 构建右子树。
返回 nums 构建的 最大二叉树 
*/
import TreeNode from "./二叉树遍历/144. 二叉树的前序遍历";

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  function max(arr:number[]):number{
    let max:number = -1;
    arr.forEach(item => {
      max = item > max ? item : max;
    })
    return max;
  }
  if(nums.length == 0) return null;
  let maxNum:number = max(nums);
  let node:TreeNode = new TreeNode(maxNum);
  let index:number = nums.indexOf(maxNum);
  let leftArr = nums.slice(0,index);
  let rightArr = nums.slice(index + 1);
  console.log(leftArr,rightArr);
  node.left = constructMaximumBinaryTree(leftArr);
  node.right = constructMaximumBinaryTree(rightArr);
  return node;
};

