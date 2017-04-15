//Given array, create a function to return a new array where each value in the
//original has been doubled. Calling double([1,2,3]) should return [2,4,6]
//without changing original.

function DoubleVision(arr) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    newArray.push(arr[i] * 2);
  }
  return newArray;
}

console.log(DoubleVision([1,2,3,4]));
