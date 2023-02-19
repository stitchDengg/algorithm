/*

给你一个链表，两两交换其中相邻的节点，
并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题
（即，只能进行节点交换）。
 */
/* class ListNode{
  val:number;
  next:Node | null;
  constructor(val?:number,next?:Node){
    this.val = (val == undefined) ? 0 : val;
    this.next = (next == undefined) ? null : next;
  }
} */

// 自己方法
/* function swapPairs(head: ListNode | null): ListNode | null {
  let dummyNode = new ListNode(); //初始化虚拟头节点
  dummyNode.next = head;
  let preNode =dummyNode;  
  let curNode = head;  //当前节点
  let count = 1;
  while(curNode){
    if(count % 2){
      //  如果是奇数，则需要交换 
      if(curNode.next){
        // 交换
        let nextNode = curNode.next;
        curNode.next = nextNode.next;
        preNode.next = nextNode;
        nextNode.next = curNode;
        // 交换完毕以后
        // 更新curNode
        curNode = nextNode;
      }
    }
    // 向前移动
    preNode = curNode;
    curNode = curNode.next;
    count ++;
  }
  return dummyNode.next;
}; */

// 简便方法
/* function swapPairs(head: ListNode | null): ListNode | null {
  const dummyNode = new ListNode(0,head);  //虚拟头节点
  let curNode:ListNode | null = head;
  while(curNode && curNode.next && curNode.next.next){
    let firstNode:ListNode = curNode.next,
        secondeNode:ListNode = curNode.next.next,
        thirdNode:ListNode | null = curNode.next.next.next;
    
    curNode.next = secondeNode;
    secondeNode.next =  firstNode;
    firstNode.next = thirdNode;
    curNode = firstNode;
  }
  return dummyNode.next;
} */


/* 递归版本 */
function swapPairs(head: ListNode | null): ListNode | null {
  // 递归出口 当head 或者head.next不存在的时候
  while(!head || !head.next){
    return head;
  }
  let newNode:ListNode | null = head.next;
  head.next = swapPairs(newNode.next);
  newNode.next = head;
  return newNode;
}
