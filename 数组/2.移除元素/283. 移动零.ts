/**
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
请注意 ，必须在不复制数组的情况下原地对数组进行操作
 */
function moveZeroes(nums: number[]): void {
  // 定义快慢指针
  let slow:number = 0;
  let fast:number = 0;
  while(fast < nums.length){
    if(nums[fast] != 0){
      nums[slow ++] = nums[fast];
    }
    fast ++;
  }
  // 让slow后面所有元素归0
  for(let i:number = slow;i < nums.length;i ++){
    nums[i] = 0;
  }
  console.log(nums);
};

moveZeroes([0,1,0,3,12])