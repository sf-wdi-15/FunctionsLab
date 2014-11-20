//Create a function called numSquare that will return an array of all perfect square numbers up to, but not exceeding a max number.
/** sillySum(arr)
var arr = [0,1,2];

var sillySum = function (arr){
	var count = 0;
 	for (i=0, i<arr.length, i += 1){
 		count += (i * arr[i]);
 	}
	return count;
}
 	console.log(sillySum(arr));**/

var maxNumber = 20
var myArray = []

var numSquare = function (max){
	for (i=0; i<maxNumber; i++){
		if (i*i < maxNumber) {
			var x = i*i;
			myArray.push(x);
		}

	}
 return numSquare
}
console.log (numSquare(maxNumber))

