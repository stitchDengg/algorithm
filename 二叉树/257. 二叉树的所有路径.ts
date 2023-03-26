

/* 
给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。

叶子节点 是指没有子节点的节点。

 
示例 1：
输入：root = [1,2,3,null,5]
输出：["1->2->5","1->3"]

*/
import TreeNode from "./二叉树遍历/144. 二叉树的前序遍历";


// 完整版,使用引用类型回溯
/* function binaryTreePaths(root: TreeNode | null): string[] {
  
  function travesal(root:TreeNode,path:TreeNode [],res:string[]):void{
    // 中
    path.push(root);
    if(!root.left && !root.right){
      let temp:string = `${path[0].val}`;
      for(let i:number = 1;i < path.length;i ++){
        temp += `->${path[i].val}`
      }
      res.push(temp);
    }

    if(root.left){
      travesal(root.left,path,res);
      // 回溯
      path.pop();
    }
    if(root.right){
      travesal(root.right,path,res);
      // 回溯
      path.pop();
    }
  }
  let res:string[] = [];
  let path:TreeNode[] = [];
  if(!root) return res;
  travesal(root,path,res);
  return res;
};   */



//2.精简版
function binaryTreePaths(root: TreeNode | null): string[] {

  function travesal(root:TreeNode,path:string,res:string[]):void{
    path += root.val.toString();
    if(!root.left && !root.right){
      res.push(path);
    }
    if(root.left) travesal(root.left,path + '->',res);
    if(root.right) travesal(root.right,path + '->',res);
  }
  let res:string[] = [];
  if(!root) return res;
  travesal(root,'',res);
  return res;
};  