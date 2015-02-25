function isPrime(n) {

   for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
      	return false;
      }
   } 
   
   return true;

};

function primes(maxNum) {
	var newArray = [];
	for (var i = 2; i <= maxNum; i+=1) {
		if (isPrime(i) === true) {
			newArray.push(i);
		}
   	} 
   	return newArray;
};

console.log(primes(100));