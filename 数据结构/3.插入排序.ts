

function insertSort(arr:number[]):void{
  let size = arr.length;
  for(let i = 1;i < size;i ++){
    let current:number = arr[i];
    let preInex = i - 1;
    while(preInex >= 0 && (current < arr[preInex])){
      arr[preInex + 1] = arr[preInex];
      preInex --;
    }
    arr[preInex + 1] = current;
  }
}

let arr = [1,3,2,423,4,342,234,234,324];
insertSort(arr);
console.log(arr);
export {}


function insertSort2(arr:number[]):void{
  let size = arr.length;

  for(let i = 1;i < size;i ++){
    let cur = arr[i];
    let pre = i - 1;
    while(pre >= 0 && arr[pre] > cur){
      arr[pre + 1] = arr[pre];
      pre --;
    }
    arr[pre + 1] = cur;
  }
}