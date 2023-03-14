/* 
给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回 滑动窗口中的最大值 。
示例 1：

输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]
解释：
滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

*/
//暴力 过不了这题
/* function maxSlidingWindow(nums: number[], k: number): number[] {
  let i:number = 0;
  let j:number = 0 + k - 1;
  let resArr:number[] = [];
  while(j < nums.length){
    let tempArr:number [] = nums.slice(i,j + 1);
    console.log(tempArr);
    let sum:number;
    let res:number = - Number.MAX_VALUE;
    tempArr.forEach(item => {
      if(item > res){
        res = item;
      }
    });
    resArr.push(res);
    i ++;
    j ++;
  }
  return resArr;
}; */


/*代码随想录方法 */
function maxSlidingWindow(nums: number[], k: number): number[] {
  class monoQueue{
    private helpQueue:number [];
    constructor(){
      this.helpQueue = [];
    }
    public getTop():number{
      return this.helpQueue[0];
    }
    public enQueue(value:number):void{
      let back:number = this.helpQueue[this.helpQueue.length - 1];
      while(back != undefined && back < value){
        this.helpQueue.pop();
        back = this.helpQueue[this.helpQueue.length - 1];
      }
      this.helpQueue.push(value);
    }

    public deQueue(value:number):void{
      if(value === this.getTop()){
        this.helpQueue.shift();
      }
    }

  }
  let queue:monoQueue = new monoQueue();
  let i:number = 0;
  let j:number = 0;
  let resArr:number [] = [];
  while(j < k){
    queue.enQueue(nums[j ++]);
  }
  resArr.push(queue.getTop());
  while(j < nums.length){
    queue.enQueue(nums[j]);
    queue.deQueue(nums[i]);
    resArr.push(queue.getTop());
    i ++;
    j ++;
  }
  return resArr;
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3));