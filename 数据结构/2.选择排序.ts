

function selectSort(arr:number[]):void{
  let size = arr.length;
  for(let i = 0;i < size;i ++){
    let minInedx:number = i;
    for(let j = i;j < size;j ++){
      // 找出最小值
      if(arr[j] < arr[minInedx]){
        minInedx = j;
      }
    }
    let temp:number = arr[i];
    arr[i] = arr[minInedx];
    arr[minInedx] = temp
  }
}

let arr = [1,23,3,3,4134,1];
selectSort(arr);
console.log(arr);

export {}