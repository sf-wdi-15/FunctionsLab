var isPrime = function(num){
var isPrime = true;
for (var i = 2; i<= Math.sqrt(num); i++){
	if (num % i == 0) {
		var isPrime = false
		}
	}
return isPrime;
}
console.log(isPrime(7));