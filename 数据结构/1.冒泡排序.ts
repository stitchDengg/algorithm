


function bubbleSort(arr:number[]){
  let size = arr.length;
  for(let i =0;i < size - 1;i ++){
    for(let j = 0;j < size - 1 - i;j ++){
      if(arr[j] > arr[j + 1]){
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

let arr =  [1,3,4,1,4,3,6];
bubbleSort(arr);
console.log(arr);


export {};