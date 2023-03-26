


function quickSort(arr:number[]):number[]{
  let size = arr.length;
  if(size <= 1) return arr;
  let left:number[] = [];
  let right:number[] = [];
  let base = arr[0];
  for(let i = 1;i < size;i ++){
    if(arr[i] < base){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return [...quickSort(left),base,...quickSort(right)]
}


let arr:number[] = [1,23,13,3,43,432,43,423,43,2];
console.log(quickSort(arr));