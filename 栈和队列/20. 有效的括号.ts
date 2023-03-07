/* 

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。
*/
// 自己方法
/* function isValid(s: string): boolean {
  if(s.length <= 0) return false;
  let stack:string[] = [];
  stack[0] = s[0];
  for(let i = 1;i < s.length;i ++){
    if(s[i] === '(' || s[i] === '{' || s[i] === '['){
      stack.push(s[i]);
    }else{
      if((s[i] === ')' && stack[stack.length - 1] === '(') || (s[i] === '}' && stack[stack.length - 1] === '{') || (s[i] === ']' && stack[stack.length - 1] === '[')){
        stack.pop();
      }else{
        stack.push(s[i]);
      }
    }
  }
  return stack.length === 0;
}; */

// 代码随想录方法
function isValid(s: string): boolean {
  type BracketMap = {
      [index: string]: string;
  }
  let helperStack: string[] = [];
  let bracketMap: BracketMap = {
      '(': ')',
      '[': ']',
      '{': '}'
  }
  for (let i of s) {
      if (bracketMap.hasOwnProperty(i)) {
          helperStack.push(bracketMap[i]);
      } else if (i !== helperStack.pop()) {
          return false;
      }
  }
  return helperStack.length === 0;
};


console.log(isValid('{[]}'));