function isPrime(num) {
  if (num <= 1) {
    return "A prime number is a natural number greater than 1";
  }
  for (var i = 2; i < Math.sqrt(num); i++) {
    if (num%i == 0) {
      return "not prime";
    }
  }
  return "prime";
}

console.log(isPrime(127));
console.log(isPrime(137));
console.log(isPrime(13));
console.log(isPrime(12));
