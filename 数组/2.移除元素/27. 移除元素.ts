/* 
给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
*/

//1.暴力解法
/* function removeElement(nums: number[], val: number): number {
  let len = nums.length;
  for(let i = 0;i < len;i ++){
    if(nums[i] === val){
      // 如果相等，就把元素移到最后位置
      for(let j = i;j < len - 1;j++){
        nums[j] = nums[j + 1];
      }
      nums[len - 1] = val;
      i --;
      len --;
    }
  }
  console.log(nums); 
  return len;
}; */


//2.双指针法
/*
  快指针寻找新数组元素
  慢指针负责记录新数组，从0开始，快指针找到一个元素就把元素塞进来
 */
function removeElement(nums: number[], val: number): number {
  let slow = 0,fast = 0;
  for(fast;fast < nums.length;fast ++){
    if(nums[fast] != val){
      nums[slow ++] = nums[fast];
    }
  }
  console.log(nums);
  return slow;
};




let nums = [0,1,2,2,3,0,4,2];
let val = 2;
console.log(removeElement(nums,val));

export {}