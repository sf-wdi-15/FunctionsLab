//Create a function called numSquare that will return 
//an array of all perfect square numbers up to, but not exceeding a max number.

var maxNumber = 500;
var newArray = [];

var numSquare = function (maxNumber) {
	for (var i = 0; i < maxNumber; i++) {
		if (i * i < maxNumber) {
			var x = i * i;
			newArray.push(x);
		}
	}
	return newArray;
}

console.log(numSquare(maxNumber));