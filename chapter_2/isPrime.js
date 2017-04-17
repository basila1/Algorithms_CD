//Return whether a given integer is prime. Prime numbers are only evenly
//divisible by themselves and 1. Many highly optimized solutions exist, but for
//now just create one that is easy to understand and debug.

function isPrime(num) {
  for (var i = 2; i < Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(isPrime(13));
console.log(isPrime(42));
console.log(isPrime(36));
