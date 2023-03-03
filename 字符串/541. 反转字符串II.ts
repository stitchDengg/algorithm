/* 
给定一个字符串 s 和一个整数 k，从字符串开头算起，
每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。
如果剩余字符少于 k 个，则将剩余字符全部反转。
如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
*/


// 自己的方法，暴力 
/* function reverseStr(s: string, k: number): string {
  let size:number = s.length;
  let loop:number = size / (2 * k);
  let remainder:number = size % (2 * k);
  for(let i:number = 0; i < loop + 1; i ++){
    if(i == loop){
      //如果是最后一圈
      if(remainder == 0) continue;  //发现余数为0  则直接跳过这个循环
      if(remainder >= k){
        s = reverse(s,0 + i * 2 * k,k - 1 + i * 2 * k);
      }else{
        s = reverse(s,size - remainder,size - 1);
      }
    }
    s = reverse(s,0 + i * 2 * k,k - 1 + i * 2 * k);
  }



  function reverse(str:string,i:number,j:number):string{
    let strArr:string[] = [];
    strArr = str.split('');

    while(i < j && i != j){
      let temp:string = strArr[i];
      console.log(temp);
      strArr[i] = strArr[j];
      strArr[j] = temp;
      i ++;
      j --;
    }
    return strArr.join('');
  }

  return s;
}; */


//代码随想录方法 边界处理更加简单
function reverseStr(s: string, k: number): string {
  let left: number, right: number;
  let arr: string[] = s.split('');
  let temp: string;
  for (let i = 0, length = arr.length; i < length; i += 2 * k) {
      left = i;
      right = (i + k - 1) >= length ? length - 1 : i + k - 1;
      while (left < right) {
          temp = arr[left];
          arr[left] = arr[right];
          arr[right] = temp;
          left++;
          right--;
      }
  }
  return arr.join('');
};

let a = 'abcdefghij';
reverseStr(a,3)