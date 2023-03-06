/* 
相关企业
请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。

实现 MyStack 类：

void push(int x) 将元素 x 压入栈顶。
int pop() 移除并返回栈顶元素。
int top() 返回栈顶元素。
boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。

*/
/* 使用数组push 和 shift完成对对列的入队和出队操作 */
class MyStack {
  private queue:number[];
  constructor() {
    this.queue = [];
  }

  push(x: number): void {
    this.queue.push(x);
  }

  pop(): number {
    for(let i:number = 0;i < this.queue.length - 1; i ++){
      this.queue.push(this.queue.shift()!)
    }
    return  this.queue.shift()!
  }

  top(): number {
    let temp:number = this.pop();
    this.queue.push(temp);
    return temp;
  }

  empty(): boolean {
    return this.queue.length == 0;
  }
}
