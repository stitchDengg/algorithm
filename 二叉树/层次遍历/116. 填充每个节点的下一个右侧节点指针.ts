
/* 
 给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，
则将 next 指针设置为 NULL。

初始状态下，所有 next 指针都被设置为 NULL。
*/

export default class Node {
    val: number
    left: Node | null
    right: Node | null
    next: Node | null
    constructor(val?: number, left?: Node, right?: Node, next?: Node) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
        this.next = (next===undefined ? null : next)
    }
}


function connect(root: Node | null): Node | null {
  let helpArr:Node[] = [];
  if(!root) return root;
  helpArr.push(root);
  while(helpArr.length){
    for(let i = 0,size = helpArr.length;i < size;i ++){
      let node:Node = helpArr.shift()!;
      if(i === size - 1){
        node.next = null;
      }else{
        let temp:Node = helpArr.shift()!;
        node.next = temp;
        helpArr.unshift(temp);
      }
      if(node.left) helpArr.push(node.left);
      if(node.right) helpArr.push(node.right);
    }
  }
  return root;
};


export {}