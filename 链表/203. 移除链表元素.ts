/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}
// 无头节点版
/* function removeElements(head: ListNode | null, val: number): ListNode | null {
  while(head !== null && head.val == val){
    head = head.next;
  }
  if(head === null) return head;
  //初始化节点
  let node:ListNode | null = head.next;
  //前置节点
  let pre:ListNode = head;
  while(node){
    if(node.val != val){
      // 必须添加类型断言
      pre = <ListNode>node;
    }else{
      pre.next = node.next;
    }
    node = node.next;
  }
  return head;
}; */



//头节点版本（虚拟节点）
function removeElements(head: ListNode | null, val: number): ListNode | null {
  let vNode = new ListNode(0,head);
  //初始化节点
  let curNode:ListNode | null = vNode.next;
  //前置节点
  let pre:ListNode = vNode;
  while(curNode){
    if(curNode.val != val){
      // 必须添加类型断言
      pre = <ListNode>curNode;
    }else{
      pre.next = curNode.next;
    }
    curNode = curNode.next;
  }
  return vNode.next;
};