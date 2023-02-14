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


// 1.双指针法
/* function reverseList(head: ListNode | null): ListNode | null {
  let temp:ListNode | null;
  let curNode = head;
  let node:ListNode | null = null;
  while(curNode){
    temp = curNode.next;
    curNode.next = node;
    node = curNode;
    curNode = temp;
  }
  return node;
}; */

// 2.

function reverseList(head: ListNode | null): ListNode | null{
  let preNode:ListNode| null = null;
  let curNode:ListNode| null = head;
  return reverse(preNode,curNode);
}

function reverse(preNode:ListNode | null,curNode:ListNode | null):ListNode{
  if(curNode == null){
    return <ListNode>preNode;
  }else{
    let temp:ListNode | null = curNode.next;
    curNode.next = preNode;
    return reverse(curNode,temp);
  }
}