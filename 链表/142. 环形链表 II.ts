
/* 
给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 
为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

不允许修改 链表。
*/

class ListNode{
  val:number;
  next:ListNode | null;
  constructor(val?:number,next?:ListNode){
    this.val = (val == undefined ? 0 : val);
    this.next = (next == undefined ? null : next);
  }
}

// 纯暴力
/* function detectCycle(head: ListNode | null): ListNode | null {
  let arr:ListNode [] = [];
  let curNode:listNode | null = head;
  while(curNode){
    arr.push(curNode);
    curNode = curNode.next;
    if(arr.indexOf(<listNode>curNode) != -1){
      return curNode;
    }
  }
  return null;
};
 */


// 哈希表法
/* function detectCycle(head: ListNode | null): ListNode | null {
  if(head == null) return null;
  let set:Set<ListNode> = new Set;
  let cur:listNode | null = head;
  while(cur){
    if(set.has(cur)) return cur;
    set.add(cur);
    cur = cur.next;
  }
  return null;
};
 */

// 快慢指针法
function detectCycle(head: ListNode | null): ListNode | null {
  let slowNode: ListNode | null = head,
      fastNode: ListNode | null = head;
  while (fastNode !== null && fastNode.next !== null) {
      slowNode = slowNode!.next;
      fastNode = fastNode.next.next;
      if (slowNode === fastNode) {
          slowNode = head;
          while (slowNode !== fastNode) {
              slowNode = slowNode!.next;
              fastNode = fastNode!.next;
          }
          return slowNode;
      }
  }
  return null;
};


