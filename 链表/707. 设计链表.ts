/* 
设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。假设链表中的所有节点都是 0-index 的。

在链表类中实现这些功能：
get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
*/
class Node {
  val: number;
  next: Node | null;
  constructor(val?: number, next?: Node | null) {
    this.val = (val === undefined) ? 0 : val;
    this.next = (next === undefined) ? null : next;
  }
}

class MyLinkedList {
  size: number;
  head: Node | null;
  constructor() {
    // 初始化链表
    this.size = 0;
    this.head = null;
  }


  get(index: number): number {
    if (index < 0 || index >= this.size) {
      return -1;
    }
    // 初始化虚拟头节点
    let vNode: Node = new Node(0, this.head);
    let curNode: Node | null = vNode.next
    while (index--) {
      vNode = <Node>curNode;
      curNode = (<Node>curNode).next
    }
    return (<Node>curNode).val
  }


  addAtHead(val: number): void {
    // let vNode: Node = new Node(0, this.head);
    let node: Node = new Node(val, this.head);
    this.head = node;
    this.size++;
  }


  addAtTail(val: number): void {
    let Vnode: Node = new Node(0, this.head);
    let curNode: Node | null = Vnode;
    while (curNode.next) {
      curNode = curNode.next;
    }
    curNode.next = new Node(val, null);
    this.size++;
    this.head = Vnode.next;
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.size) {
      return
    }
    else if (index == this.size) {
      this.addAtTail(val);
    }
    else if (index < 0) {
      this.addAtHead(val);
    }
    else {
      let vNode: Node = new Node(0, this.head);
      let preNode: Node | null = vNode;
      let curNode = vNode.next;
      while (index--) {
        preNode = curNode;
        curNode = (<Node>curNode).next;
      }
      let node = new Node(val, curNode);
      (<Node>preNode).next = node;
      this.size++;
      this.head = vNode.next;
    }
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) {
      return
    } else {
      let vNode: Node = new Node(0, this.head);
      let preNode = vNode;
      let curNode = vNode.next;
      while (index--) {
        preNode = <Node>curNode;
        curNode = (<Node>curNode).next;
      }
      preNode.next = (<Node>curNode).next;
      (<Node>curNode).next = null;
      this.size--;
      this.head = vNode.next;
    }
  }
}



let test = new MyLinkedList();
test.addAtHead(5);
console.log(test);
test.addAtIndex(1,2);
console.log(test);
console.log(test.get(1));
test.addAtHead(6)
console.log(test);


export default {}