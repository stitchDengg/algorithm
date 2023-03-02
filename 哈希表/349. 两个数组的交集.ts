/* 
给定两个数组 nums1 和 nums2 ，返回 
它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
*/

/* function intersection(nums1: number[], nums2: number[]): number[] {
  let resSet:Set<number> = new Set<number>();
  nums1.forEach(item => {
    if(nums2.indexOf(item) != -1){
      // 此时两个数组都有，存入哈希表
      resSet.add(item)
    }
  })
  return Array.from(resSet);
}; */

// 秀操作
function intersection(nums1: number[], nums2: number[]): number[] {
  return Array.from(new Set(nums1.filter(item => nums2.includes(item))));
};