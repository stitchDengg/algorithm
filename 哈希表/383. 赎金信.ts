/* 
给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
如果可以，返回 true ；否则返回 false 。
magazine 中的每个字符只能在 ransomNote 中使用一次。

(题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，
组成单词来表达意思。杂志字符串中的每个字符只能在赎金信字符串中使用一次。)
*/

function canConstruct(ransomNote: string, magazine: string): boolean {
  let helpArr:number[] = new Array<number>(26).fill(0);
  let base:number = 'a'.charCodeAt(0);
  for(let i = 0;i < magazine.length;i ++){
    helpArr[magazine[i].charCodeAt(0) - base] += 1;
  }

  for(let i = 0;i < ransomNote.length;i ++){
    helpArr[ransomNote[i].charCodeAt(0) - base] -= 1;
    if(helpArr[ransomNote[i].charCodeAt(0) - base] == -1){
      return false;
    }
  }

  return true;
};