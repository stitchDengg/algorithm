/* 
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
*/
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val == undefined ? 0 : val);
    this.next = (next == undefined ? null : next);
  }
}
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummyNode: ListNode = new ListNode(0, head);
  let fastNode: ListNode | null = dummyNode;
  let slowNode: ListNode | null = dummyNode;
  let preNode: ListNode | null = dummyNode;
  let count = 1;
  while(fastNode.next) {
    if (count >= n) {
      preNode = slowNode;
      slowNode = (<ListNode>slowNode).next;
    }
    count++;
    fastNode = fastNode.next;
  }
  (<ListNode>preNode).next = (<ListNode>slowNode).next;
  return dummyNode.next;
};  