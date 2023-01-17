/*
  给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 */
// 1.暴力解法
/* function sortedSquares(nums: number[]): number[] {
  // 原地算出所有平方
  nums.forEach((_,index) => {
    nums[index] *= nums[index];
  })
  // 再排序
  nums.sort((a,b) => {
    return a - b;
  })
  return nums;
};

 */

// 2.双指针法
function sortedSquares(nums: number[]): number[] {
  // 既然包括负数，从大到小一定是从两端向中间取值
  let k:number = nums.length;
  //fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
  let res = new Array<number>(k - 1).fill(0);
  let left:number = 0;
  let right:number = nums.length - 1;
  while(left <= right){
    if(Math.pow(nums[left],2) > Math.pow(nums[right],2)){
      res[k --] = Math.pow(nums[left],2);
      left ++;
    }else{
      res[k --] =  Math.pow(nums[right],2);
      right --;
    }
  }
  res.shift();
  return res;
};
console.log(sortedSquares([-7,-3,2,3,11]));