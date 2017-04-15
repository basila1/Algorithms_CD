//Given an array, create and return a new one containing all the values of the
//provided array, made negative (not simply multiplied by -1).
//Given [1,-3,5], return [-1,-3,-5].

function OutlookNegative(arr) {
  newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArray.push(arr[i] * -1);
    }
    else if (arr[i] < 0) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

console.log(OutlookNegative([1, -3, 5]));
