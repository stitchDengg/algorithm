function mergeSort(arr: number[]): number[] {
  let size = arr.length;
  if (size < 2) return arr;
  let middle = size / 2;
  let left: number[] = arr.slice(0, middle);
  let right = arr.slice(middle);
  return merge(mergeSort(left),mergeSort(right));


  function merge(left: number[], right: number[]): number[] {
    const res: number[] = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        res.push(left.shift()!);
      } else {
        res.push(right.shift()!);
      }
    }
    // 还需要继续加入没对比的
    while (left.length) {
      res.push(left.shift()!);
    }

    while(right.length){
      res.push(right.shift()!);
    }
    return res;
  }
}

let arr = [1,4,3,2,6,5,8,10];
console.log(mergeSort(arr));

export {}
