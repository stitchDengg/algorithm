/* 
给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

0 <= a, b, c, d < n
a、b、c 和 d 互不相同
nums[a] + nums[b] + nums[c] + nums[d] == target
你可以按 任意顺序 返回答案 。

*/
function fourSum(nums: number[], target: number): number[][] {
  let res:number[][] = [];
  // 先排序
  let sortArr = nums.sort((a,b) => a - b);
  let size:number = nums.length;
  for(let i = 0;i < size;i ++){
    if(i > 0 && sortArr[i] == sortArr[i - 1]) continue;
    for(let j = i + 1;j < size; j ++){
      //避免第一次执行错误和去重
      if(j > i + 1 && sortArr[j] == sortArr[j - 1]) continue;
      let left:number = j + 1,
          right:number = size - 1;
      while(left < right){
        let sum:number = sortArr[left] + sortArr[right] + sortArr[i] + sortArr[j];
        if(sum < target){
          left ++;
        }else if(sum > target){
          right --;
        }else{
          // 此时相等 应该记录数据
          res.push([sortArr[i], sortArr[j],sortArr[left],sortArr[right]]);
          // 继续循环来查找其他的可能性
          left ++;
          right --;
          // 去重 数据
          while(sortArr[left] == sortArr[left - 1] && left < right){
            left ++;
          }
          while(sortArr[right] == sortArr[right + 1] && left < right){
            right --;
          }
        }
      }
    }
  }
  return res;
};

console.log(fourSum([-2,-1,-1,1,1,2,2],0));