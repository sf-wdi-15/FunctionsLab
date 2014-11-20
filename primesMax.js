//Using your isPrime() function, create a function primes that will return an array of all prime numbers up to a certain amount.

var isPrime = function(num) {
	var thisPrime = true;
	for (var i = 2; i <= Math.sqrt (num); i +=1) {
		if (num % i === 0) {
			thisPrime = false
		}
	}
		return thisPrime;
};

var primes = function(maxPrime) {
	var primeArr = [];
	for (var i = 0; i < maxPrime; i += 1) {
		if (isPrime(i) === true)  {
			primeArr.push(i);
		}
	
	}
	return primeArr;

};
console.log(primes(45));

