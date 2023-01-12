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

let nums:number [] =  [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));
 */

// 2.使用js的set数据结构
var removeDuplicates = function(nums):number{
  let numbers = Array.from(new Set(nums));
  numbers.forEach((key,index) => {
      nums[index] = numbers[index];
  })
  return numbers.length;
};