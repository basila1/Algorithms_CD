//Just the facts, ma'am. Factorials, that is. Write a function factorial(num)
//that, given a number, returns the product (multiplication) of all positive
//integers from 1 up to number (inclusive). For example, factorial(3) = 6;
//factorial(5) = 120.

function Factorial(num) {
  var sum = 1;
  for (var i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
}

console.log(Factorial(3));
console.log(Factorial(4));
