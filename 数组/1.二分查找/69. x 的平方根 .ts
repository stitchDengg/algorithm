
// 1. 暴力解出法
/* function mySqrt(x: number): number {
  let i:number = 0
  for(i;i <= x;i ++){
    if(i * i > x){
      break;
    }
  }
  return i - 1;
};
 */

// 2.二分法解决
function mySqrt(x: number): number {
  let left = 0;
  let right = x;
  while(left <= right){
    let mid = Math.floor((left + right) / 2);
    if(mid * mid > x){
      right = mid - 1;
    }else if(mid * mid < x){
      left = mid + 1;
    }else{
      return mid;
    }
  }
  return right;
};


let x:number = 5;
console.log(mySqrt(x));


export {}
