/* 
字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。
比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

输入: s = "abcdefg", k = 2
输出: "cdefgab"
*/

// 自己的方法
/* function reverseLeftWords(s: string, n: number): string {
  let size: number = s.length;
  s += s;
  return s.slice(n, size + n);
} */

//代码随想录方法
/* 
1.反转1-n的字符串
2.反转n-末尾的字符串
3.反转整个字符串
*/
function reverseLeftWords(s: string, n: number): string {
  function reverszeWords(str: string[], start: number, end: number) {
    while (start < end) {
      // 两两交换
      [str[start], str[end]] = [str[end], str[start]];
      start++;
      end--;
    }
  }
  let str: string[] = Array.from(s);
  reverszeWords(str, 0, n - 1);
  console.log(str, 1);
  reverszeWords(str, n, str.length - 1);
  reverszeWords(str, 0, str.length - 1);
  return str.join("");
}
console.log(reverseLeftWords("abcdefg", 2));
