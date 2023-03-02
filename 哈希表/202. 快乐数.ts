/* 
编写一个算法来判断一个数 n 是不是快乐数。

「快乐数」 定义为：

对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
如果这个过程 结果为 1，那么这个数就是快乐数。
如果 n 是 快乐数 就返回 true ；不是，则返回 false 。
*/

function isHappy(n: number): boolean {

  // 求和
  function sum(val:number):number{
    return String(val).split('').reduce((preValue,curValue) => (preValue + Number(curValue) * Number(curValue)),0)
  }

  let tempSet = new Set<number>();
  while(1){
    tempSet.add(n);
    n = sum(n);
    if(n == 1){
      return true;
    }
    if(tempSet.has(n)){
      // 只要出现重复就代表这个进入了死循环
      break;
    }
  }
  return false;

};

console.log(isHappy(19));