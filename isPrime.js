//Create a function to return true or false if a number passed in a prime number

var isPrime = function(num) {
	var thisPrime = true;
	for (i = 2; i <= Math.sqrt (num); i +=1) {
		if (num % i === 0) {
			thisPrime = false
		}
	}
		return thisPrime;
}
console.log(isPrime(10));

