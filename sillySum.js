sillySum(arr)
var arr = [0,1,2];

var sillySum = function (arr){
	var count = 0;
 	for (i=0, i<arr.length, i += 1){
 		count += (i * arr[i]);
 	}
	return count;
}
 	console.log(sillySum(arr));