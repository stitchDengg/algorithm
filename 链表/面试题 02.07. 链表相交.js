/* 
给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。
图示两个链表在节点 c1 开始相交：
*/

function listNode(val){
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */


function getListLen(head){
  let len = 0;
  let cur = head;
  while(cur){
    len++;
    cur = cur.next;
  }
  return len;
}

var getIntersectionNode = function(headA, headB) {
  let lenA = getListLen(headA),
      lenB = getListLen(headB);
  let curA = headA,
      curB = headB;
  if(lenA < lenB){
    // 确保curA是长的那一条链表
    [lenA,lenB] =  [lenB,lenA];
    [curA,curB] =  [curB,curA];
  }
  let diff = lenA - lenB;
  while(diff-- > 0 && curA){
    curA = curA.next;
  }
  while(curA && curA !== curB){
    curA = curA.next;
    curB = curB.next;
  }
  return curA;
};
