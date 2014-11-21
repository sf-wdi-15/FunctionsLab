/* define a function for computing
 *  the sillySum 
 */

var sillySum = function (arr) {
  // assume the sillySum is at
  // least zero if the arr is empty
  var sum = 0;

  // take the input arr and
  // iterate over it
  for (var index = 0; index < arr.length; index += 1) {
    // multiply value at index by
    // index
    sum += (arr[index]*index);
  }
  return sum;
};

var sum = sillySum([1,2,3,4]);
console.log(sum);
