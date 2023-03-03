/* 
给定一个字符串，逐个翻转字符串中的每个单词。

示例 1：
输入: "the sky is blue"
输出: "blue is sky the"

示例 2：
输入: "  hello world!  "
输出: "world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
*/

function reverseWords(s: string): string {
  let sArr:string[] = Array.from(s);
  let res:string = ''
  let i:number = 0;
  let temp:string[]  = [];
  while(i < sArr.length){
    let tempStr = '';
    if(sArr[i] != ' '){
      while(sArr[i] != ' ' && sArr[i] != undefined){
        console.log(sArr[i]);
        tempStr += sArr[i];
        i ++;
      }
      temp.unshift(tempStr);
      console.log(temp);
    }else{
      i ++;
    }
  }
  temp.forEach((item,index) => {
    res += item;
    if(index != temp.length - 1){
      res += ' ';
    }
  })
  return res;
};

console.log(reverseWords('the sky is blue'));