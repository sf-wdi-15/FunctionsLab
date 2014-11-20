var isPrime = function(num) {
 	var isPrime = true;
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
          var isPrime = false
          }
    }
    return isPrime;
}



var primeS = function(maxPrime) {
	var primeArray = [];
	for (i = 0; i < maxPrime; i+=1) {
		if (isPrime(i) === true) {
			primeArray.push(i);
		}	
	}
	return primeArray;
	
}

console.log(primeS(100));