//Write a function that takes an array of numbers, and returns the sum of each number multiplied by its index.

var array = [1,2,3,4,5];

var sillySum = function(j) {
	var count = 0
	for (i = 0; i < array.length; i++) {
		count += (array[i] * i)
	}
	console.log(count);
}

sillySum(array);