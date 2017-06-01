function addArray(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// var test = [1,1,1,1,1,1];
// var test2 = [2,2,2,2,2,2];
var test3 = [1, 2, 3, 4, 10, 11];
var test4 = [338, 65, 713, 595, 428, 610, 728, 573, 871, 868]

// console.log(addArray(test));
// console.log(addArray(test2));
console.log(addArray(test3));
console.log(addArray(test4));
