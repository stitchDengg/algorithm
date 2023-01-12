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