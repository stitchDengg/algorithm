/* 
给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。

注意：如果对空文本输入退格字符，文本继续为空。
*/
// 1.暴力解法
function backspaceCompare(s: string, t: string): boolean {
  return res(s) == res(t);
};

function res(str:string){
  let arrRes:string [] = [];
  let arr:string [] = str.split('');
  for(let i:number = 0;i < str.length;i ++){
    console.log(arrRes);
    if(arr[i] != '#'){
      arrRes.push(arr[i]);
    }else{
      arrRes.pop();
    }
  }
  return arrRes.join('');
}

console.log(backspaceCompare("ab##","c#d#"));