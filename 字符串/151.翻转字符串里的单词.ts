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

/* function reverseWords(s: string): string {
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
}; */


//代码随想录方法
/* 
1.先去除多余空格
2.然后反转整个字符串
3.挨个反转单词
*/
function reverseWords(s: string): string {

  function removeExtraSpace(str: string[]) {
    let slow: number = 0;
    for (let i = 0; i < str.length; i++) {
      //如果遇到不是空格的
      if (str[i] != " ") {
        // 手动添加空格
        if (slow != 0){
          str[slow ++] = ' ';
        }
        while (i < str.length && str[i] != " ") {
          str[slow ++] = str[i ++];
        }
      }
    }
    str.length = slow;
  }

  function reverseWord(str: string[], start: number, end: number) {
    let left: number = start;
    let right: number = end;
    while (left < right) {
      [str[left], str[right]] = [str[right], str[left]];
      left++;
      right--;
    }
  }

  let resArr = Array.from(s);
  // 移除多余空格
  removeExtraSpace(resArr);
  // 反转整个字符串
  reverseWord(resArr, 0, resArr.length - 1);
  
   //反转每个单词
  let start: number = 0,
    end: number = 0;
  let size:number = resArr.length;
  while (start < size) {
    let end = start;
    while(resArr[end] != ' ' && end <  size){
      end ++;
    }
    reverseWord(resArr,start,end - 1);
    start = end + 1;
  }

  return resArr.join("");
}

console.log(reverseWords("  hello world  "));
