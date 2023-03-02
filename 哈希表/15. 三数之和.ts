/* 
给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 
满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。
请你返回所有和为 0 且不重复的三元组。
注意：答案中不可以包含重复的三元组。
*/

function threeSum(nums: number[]): number[][] {
  let resArr:Array<number>[] = [];
  let sortArr:number[] = nums.sort((a,b) => a - b);
  let i:number = 0;
  for(i;i < sortArr.length;i ++){
    let left:number = i + 1;
    let right:number = nums.length - 1;
    if(sortArr[i] > 0) return resArr;  //如果i开始遍历到大于0的数，可以提前终止循环
    if(i > 0 && sortArr[i] == sortArr[i - 1]){
      //如果i的值和前一个i值相同，这一轮循环直接跳过
      continue;
    }
    while(left < right){
      let sum:number = sortArr[i] + sortArr[left] + sortArr[right];
      if(sum < 0){
        left ++;
      }else if(sum > 0){
        right --;
      }else{
        resArr.push([sortArr[i],sortArr[left],sortArr[right]]);
        //还需要继续找出其他的可能性
        left ++;
        right --;
        while(sortArr[left] == sortArr[left - 1]){
          left ++;
        }
        while(sortArr[right] == sortArr[right + 1]){
          right --;
        }
      }
    }
  }
  return resArr;
};


console.log(threeSum([-2,0,1,1,2]));