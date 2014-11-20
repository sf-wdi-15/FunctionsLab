
var myArr = [1, 5, 10, 15, 7];

var sillySum = function(myArr) {
	var count = 0;
	for (i = 0; i < myArr.length; i += 1) {
	count += (i * myArr[i]);
	}
	return count;
}

console.log(sillySum(myArr));

