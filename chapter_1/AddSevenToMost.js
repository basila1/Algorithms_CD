//Build a function that accepts an array. Return a new array with all values
//except first, adding 7 to each. Do not alter the original array.

function AddSevenToMost(arr) {
  var newArrray = [];
  for (var i = 1; i < arr.length; i++) {
    newArrray.push(arr[i] + 7);
  }
  return newArrray;
}

var test = [1,2,3,4,5,6,7];

console.log(AddSevenToMost(test));
