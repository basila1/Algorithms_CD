//Create a function that takes array of numbers. The function should print the
//lowest value in the array, and return the highest value in the array.

function PrintLowReturnHigh(arr) {
  var min = arr[0];
  var max = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(min);
  return max; //why is the max being printed, if not console logged??

}

console.log(PrintLowReturnHigh([2,3,4,5,6,7]));
