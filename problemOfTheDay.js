var swap = function(arr, i, j) {
	var first = myArr[i];
	var second = myArr[j];
	myArr[j] = first;
	myArr[i] = second;
	return myArr;
}

console.log(swap(arr, 0, 2));