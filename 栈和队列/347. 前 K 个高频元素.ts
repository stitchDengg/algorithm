/* 
给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。
你可以按 任意顺序 返回答案。
*/
function topKFrequent(nums: number[], k: number): number[] {
  let numsMap:Map<number,number> = new Map();
  for(let num of nums){
    numsMap.set(num, (numsMap.get(num) || 0) + 1);
  }
  console.log([...numsMap.entries()].sort((a,b) => b[1] - a[1]));
  return [...numsMap.entries()]
    .sort((a,b) => b[1] - a[1])
    .slice(0,k)
    .map(i => i[0]);
};


console.log(topKFrequent([1,1,1,2,2,3],2));