/* 
  给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。

由于在某些语言中不能改变数组的长度，所以必须将结果放在数组nums的第一部分。更规范地说，如果在删除重复项之后有 k 个元素，那么 nums 的前 k 个元素应该保存最终结果。

将最终结果插入 nums 的前 k 个位置后返回 k 。

不要使用额外的空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */
/* function removeDuplicates(nums: number[]): number {
  // 初始化双指针
  let slow:number = 1;
  let fast:number = 1;
  for(fast;fast < nums.length;fast ++){
    if(nums[fast] != nums[fast - 1]){
      nums[slow ++] = nums[fast];
    }
  }
  console.log(nums);
  return slow;
};

 */

// 2.使用js的set数据结构
var removeDuplicates = function(nums:number []):number{
  // Array.from可以把类数组元素转化为数组
  let numbers = Array.from(new Set(nums));
  numbers.forEach((_,index) => {
      nums[index] = numbers[index];
  })
  console.log(nums);
  return numbers.length;
};

let nums:number [] =  [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));

export {}