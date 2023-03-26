/* 

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 
和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。

*/


function twoSum(nums: number[], target: number): number[] {
  // 记录访问过的数字，其中key存值，value存index
  let helpMap:Map<number,number> = new Map();
  let resIndex:number | undefined = -1;
  let resArr:number[]  = [];
  nums.forEach((item,index) => {
    let resIndex = helpMap.get(target - item);
    if(resIndex != undefined){
      resArr.push(resIndex);
      resArr.push(index);
    }
    helpMap.set(item,index);
  })
  return resArr;
};