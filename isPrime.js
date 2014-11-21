
var isPrime = function (num) {
  for ( var i = Math.floor(num/2); i > 1; i -= 2) {
    if (!(num % i)) {
      return false;
    }
  }
  return true;
}


console.log(isPrime(97))
