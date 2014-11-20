
var numSquare = function(maxNum){
	var perSquare = [];
	for(var i=0; (i*i)<maxNum; i++) {
		perSquare.push(i*i)
	};
return perSquare;
}

console.log(numSquare(100));