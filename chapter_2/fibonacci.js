//Create a function to generate Fibonacci numbers. In this famous mathematical
//sequence, each number is the sum of the previous two, starting with values
// 0 and 1. Your function should accept one argument, an index into the sequence
// (where 0 corresponds to the initial value, 4 corresponds to the value four
//later, etc). Examples: fibonacci(0) = 0, fibonacci(1) = 1, fibonacci(2) = 1,
//fibonacci(3) = 2 ... fibonacci(7) = 13, etc

//Recursive solution!!!

function fibonacci(n) {

  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);


}

console.log(fibonacci(7));
console.log(fibonacci(1));
console.log(fibonacci(2));
