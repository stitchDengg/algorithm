/* 
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
示例 1: 输入: s = "anagram", t = "nagaram" 输出: true
示例 2: 输入: s = "rat", t = "car" 输出: false
*/

function isAnagram(s: string, t: string): boolean {
  if(s.length != t.length) return false;
  let record:number [] = new Array<number>().fill(0);
  let pivot = 'a'.charCodeAt(0);
  for(let i = 0;i < s.length;i ++){
    record[s[i].charCodeAt(i) - pivot] ++;
    record[t[i].charCodeAt(i) - pivot] --;
  }
  return record.every(item => item === 0);
};