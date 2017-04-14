//Build a function that takes array of numbers. The function should print
//second-to-last value in the array, and return first odd value in the array.

function PrintOneReturnAnother(arr) {
  // console.log(arr.length - 1);
  console.log(arr[arr.length - 2]);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 > 0) {
      return arr[i];
    }
  }
  // console.log("Hello World");
  // return "7"
  // console.log("return no odd numbers");
  return "no odds"

}

console.log(PrintOneReturnAnother([2,3,4,5,6]));
// console.log(PrintOneReturnAnother([2,2,2,2,2]));
