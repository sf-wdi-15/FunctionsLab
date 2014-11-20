var maxNum = 200;
var newArray = [];

var numSquare = function (maxNum) {
	for (var i = 0; i <= maxNum; i++) {
		if (i * i <= maxNum) {
			var squared = i * i;
			newArray.push(squared);
		}
	}
	return newArray;
}


console.log(numSquare(maxNum));
