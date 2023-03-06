/* 
给你两个字符串 haystack 和 needle ，
请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。
如果 needle 不是 haystack 的一部分，则返回  -1 。
*/
// 暴力
/* function strStr(haystack: string, needle: string): number {
  for(let i:number = 0; i < haystack.length; i ++){
    let count:number = 0;
    if(needle[0] == haystack[i]){
      // 第一个字符相匹配的话
      for(let j = 0;j < needle.length; j++){
        if(needle[j] == haystack[i + j]){
          count ++;
        }
      }
    }
    if(count ==  needle.length){
      return i;
    }
  }
  return -1;
};   */


//kmp算法
function strStr(haystack: string, needle: string): number {
  
  function getNext(str:string):number []{
    let next:number [] = [];
    let j:number = -1;
    next[0] = j;
    for(let i:number = 1;i < str.length;i ++){
      // 遇到不相等的情况分
      while(j >= 0 && str[i] != str[j + 1]){
        j = next[j];
      }
      if(str[i] == str[j + 1]){
        j += 1;
      }
      next[i] = j;
    }
    return next;
  }

  let next:number [] = getNext(needle);
  console.log(next);
  let j = -1;
  for(let i = 0;i < haystack.length; i ++){
    while(j >= 0 && haystack[i] != needle[j + 1]){
      j = next[j];
    }
    if( haystack[i] == needle[j + 1]){
      j ++;
    }
    if(j == needle.length - 1){
      return i;
    }
  }
  return -1;
};

console.log(strStr("abc","c"));