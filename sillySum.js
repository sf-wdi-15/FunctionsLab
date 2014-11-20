var myArray = [1, 6, 13];
var sillySum = function(myArray) {
    var count = 0;
    for (i = 0; i < myArray.length; i += 1) {
       count += (i * myArray[i]);
    }
    return count;
};

console.log(sillySum(myArray));
