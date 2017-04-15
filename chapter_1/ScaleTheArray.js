//Given an array arr and a number num, multiply all values in arr by num, and
//return the changed array arr.

function ScaleTheArray(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] *= num;
  }
  return arr;
}

console.log(ScaleTheArray([1,1,1,1,1,1], 5));
