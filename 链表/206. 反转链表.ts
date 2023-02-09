/* 
给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
*/
class ListNode{
  next:ListNode | null;
  val:number;
  constructor(next?:ListNode,val?:number){
    this.next = (next == undefined ? null : next);
    this.val = (val == undefined ? 0 : val)
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let temp:ListNode | null;
  // 初始化前置节点
  let preNode:ListNode | null = null;
  let curNode = head;
  while(curNode){
    temp = curNode.next;
    curNode.next = preNode;
    preNode = curNode;
    curNode = temp;
  }
  return preNode;
};

