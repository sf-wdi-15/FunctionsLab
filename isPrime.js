var isPrime = function(n){
	if (n === 1) {return false;}
	else if (n === 2) { return true;}
	else if (n === 3) { return true;}
	else {
		for(var i = Math.floor(Math.sqrt(n)); i>=2; i--){
			if(n%i ==0 || n%2 == 0 || n%3 == 0) {return false;}
		}
	}
	return true;
};

console.log(isPrime(7));