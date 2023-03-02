/* 
给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：

0 <= i, j, k, l < n
nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
*/
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  let res:number = 0; //结果
  let helpMap:Map<number,number> = new Map<number,number>();
  // 1.记录一下num1和num2的和以及出现的次数
  nums1.forEach(index1 => {
    nums2.forEach(index2 => {
      let sum = index1 + index2;
      if(helpMap.has(sum)){
        helpMap.set(sum,helpMap.get(sum)! + 1);
      }else{
        helpMap.set(sum,1);
      }
    })
  })

  //遍历nums3和num4
  nums3.forEach(index3 => {
    nums4.forEach(index4 => {
      if(helpMap.has(0 -(index3 + index4))){
        res += helpMap.get(0 -(index3 + index4))!;
      }
    })
  })

  return res;

};
