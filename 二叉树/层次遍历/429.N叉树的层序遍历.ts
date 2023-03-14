
/* 

给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。
树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。
*/
class Node{
  val:number
  children:Node[]
  constructor(val?:number){
    this.val = (val === undefined ? 0 : val);
  }
}

function levelOrder(root: Node | null): number[][] {
  let helpQueue:Node[] = [];
  let resArr:number[][] = [];
  let tempArr:number[] = [];
  if(!root) return resArr;
  helpQueue.push(root);
  while(helpQueue.length){
    for(let i = 0,size = helpQueue.length;i < size;i ++){
      let node:Node = helpQueue.shift()!;
      tempArr.push(node.val);
      if(node.children.length){
        //如果有子节点
       /*  node.children.forEach(item => {
          helpQueue.push(item);
        }) */
        helpQueue.push(...node.children);
      }
    }
    resArr.push(tempArr);
    tempArr = [];
  }
  return resArr;
};


export {}