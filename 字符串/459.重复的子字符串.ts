/* 
给定一个非空的字符串 s ，
检查是否可以通过由它的一个子串重复多次构成。
*/

// 暴力
/* function repeatedSubstringPattern(s: string): boolean {
  for(let i:number = 0; i < s.length;i ++){
    let tempStr = s.slice(0,i);
    let str = '';
    for(let j = 0;j < s.length;j ++){
      str += tempStr;
      if(str == s){
        return true;
      }
    }
  }
  return false;
}; */


function repeatedSubstringPattern(s: string): boolean {
  let douS = s + s;
  // 掐头去尾
  douS = douS.slice(1,douS.length - 1);
  return douS.includes(s) ? true : false;
};





console.log(repeatedSubstringPattern('abab'));