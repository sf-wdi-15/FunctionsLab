//Using your isPrime() function, create a function primes that will return an array of all prime numbers up to a certain amount.
var isPrime = function(num){
var isPrime = true;
for (var i = 2; i<= Math.sqrt(num); i++){
	if (num % i == 0) {
		var isPrime = false
		}
	}
return isPrime;
}


 var Prime = function(maxPrime){
	var primeArr = []
	for (var i = 0; i<maxPrime; i++){
		if (isPrime(i) == true ) { // calling/ passing a interger on a function
			primeArray.push(i);

		}
    }
    return primeArray;
}
console.log(prime(100));
	