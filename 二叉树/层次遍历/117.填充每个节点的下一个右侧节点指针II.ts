import Node from "./116. 填充每个节点的下一个右侧节点指针";
/* 
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL 。

初始状态下，所有 next 指针都被设置为 NULL 。


*/
function connect(root: Node | null): Node | null {
  let helpArr:Node[] = [];
  if(!root) return null;
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