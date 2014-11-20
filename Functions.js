

var myArray = [1,2,3,4,5,6,7,8,9]

var sillySum = function(myArray) {
var count = 0;
	for (var i=0;i <myArray.length; i+=1)  {

 count += i * myArray[i];

	}
	return count;
  }

  console.log(sillySum(myArray));
