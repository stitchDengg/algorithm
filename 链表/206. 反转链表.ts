/* 
给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
*/

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

// 2.递归法
function reverseList(head:ListNode | null):ListNode | null{
  return reverse(null,head);
}

function reverse(preNode:null | ListNode,curNode:null | ListNode):ListNode | null{
  if(curNode == null){
    return preNode;
  }else{
    let temp:null | ListNode = curNode.next;
    curNode.next = preNode;
    return reverse(curNode,temp);
  }
}
