var number = [1,2,3,4,5]

var sillySum = function (x) {
	var count = 0;
	for (var i = 0; i < number.length; i = i + 1) {
		count += (number[i]*i)
	}
	console.log(count)
};

sillySum(number)
