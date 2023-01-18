/* 
给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
*/

function generateMatrix(n: number): number[][] {
  let resArr:number[][] = new Array<number>(n).fill(1).map(x => new Array<number>(n));  //定义结果矩阵
  let loopNum:number = Math.floor(n / 2);  //定义循环圈数
  let count:number = 1; //计数
  let offset:number = 1; 
  let startX:number = 0;
  let startY:number = 0;
  let row:number = 0;
  let col:number = 0;
  while(loopNum --){
    row = startX;
    col = startY;
    // 模拟从循环过程
    for(;col < n - offset;col ++){
      resArr[startX][col] = count ++;
    }
    for(;row < n - offset;row ++){
      resArr[row][col] = count ++;
    }

    for(;col > startY;col --){
      resArr[row][col] = count ++;
    }

    for(;row > startX;row --){
      resArr[row][col] = count ++;
    }
    startX ++;
    startY ++;
    //控制每一圈的长度
    offset ++;
  }

  // 如果这个数是奇数，需要把最后一个数手动填充
  if(n % 2 == 1){
    resArr[startX][startY] = n * n;
  }
  return resArr;
};


console.log(generateMatrix(100));