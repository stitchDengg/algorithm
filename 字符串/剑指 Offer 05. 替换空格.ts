/* 
请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

示例 1：
输入：s = "We are happy."
输出："We%20are%20happy."
*/
// 一遍for循环遍历
function replaceSpace(s: string): string {
  let res:string = '';
  for(let i:number = 0; i< s.length; i ++){
    if(s[i] == ' '){
      res += '%20';
    }else{
      res += s[i];
    }
  }
  return res;
};

