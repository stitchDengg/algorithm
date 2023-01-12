function searchRange(nums: number[], target: number): number[] {
  // 获取左右边界
let leftBorder:number = getLeftBorder(nums,target);
let rightBorder:number = getRightBorder(nums,target);
// 出现这种情况说明数组中没有target
if(leftBorder == -2 || rightBorder == -2){
  return [-1,-1];
}
//出现这种情况说明存在target，返回结果即可
if(rightBorder - leftBorder > 1){
  return [leftBorder + 1,rightBorder - 1];
}

//这种情况说明target在数组范围，但是不存在target
return [-1,-1]
};

// 查找右边界
function getRightBorder(nums:number[],target:number):number{
let left:number = 0;
let right:number = nums.length - 1;
// 初始化右边界
let rightBorder:number = -2;
while(left <= right){
  let mid:number = Math.floor((left + right) / 2);
  if(nums[mid] > target){
    right = mid - 1;
  }else{
    left = mid + 1;
    rightBorder = left;
  }
}
return  rightBorder;
}

//查找左边界
function getLeftBorder(nums:number[],target:number):number{
let left:number = 0;
let right:number = nums.length - 1;
// 初始化左边界
let leftBorder:number = -2;
while(left <= right){
  let mid:number = Math.floor((left + right) / 2);
  if(nums[mid] >= target){//当nums[mid] = target时候更新左边界
    right = mid - 1;
    leftBorder = right;
  }else{
    left = mid + 1;
    // leftBorder = left;
  }
}
return  leftBorder;
}


let nums:number[] = [5,7,7,8,8,10];
let target:number = 8;
console.log(searchRange(nums,target));