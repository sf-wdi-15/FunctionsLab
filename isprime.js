function isPrime(n) {

   for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {isPrime = false}
   } 
   
   return isPrime;

}

console.log(isPrime(39))