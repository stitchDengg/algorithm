/* 
给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

*/
// 1.暴力解法
/* function minSubArrayLen(target: number, nums: number[]): number {
  let res:number = nums.length;
  let temp:number = 0;
  for(let i:number = 0;i < nums.length;i ++){
    let sum = 0;
    for(let j:number = i;j < nums.length;j ++){
      sum += nums[j];
      if(sum >= target){
        temp = j - i + 1;
        console.log(temp);
        break;
      }
    }
    if(temp < res){
      res = temp;
    }
  }
  return res;
}; */

// 2.滑动窗口法
function minSubArrayLen(target: number, nums: number[]): number {
  let res:number = Number.MAX_VALUE;   //结果
  let sum:number = 0;   //表示窗口元素的和
  let i:number = 0;   //表示窗口起始位置
  let len:number = 0; //初始化窗口长度
  for(let j:number = 0;j < nums.length;j ++){
    sum += nums[j];
    while(sum >= target){
      len = j - i + 1;
      res = res < len ? res : len;
      sum -= nums[i ++];
    }
  }
  return res == Number.MAX_VALUE ? 0 : res;
};

console.log(minSubArrayLen(4,[1,4,4]));