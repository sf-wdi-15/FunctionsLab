var merge = function (arrOne, arrTwo) {
  var i = j = 0,
  lengthOne = arrOne.length,
  lengthTwo = arrTwo.length,
  result = [];
  while (i < lengthOne && j < lengthTwo) {
    if (arrOne[i] < arrTwo[j]) {
      result.push(arrOne[i]);
      i += 1;
    } else {
      result.push(arrTwo[j]);
      j += 1;
    }
  }
  var remainingCount = i < lengthOne ? i : j;
  var leftOverArr = i < lengthOne ? arrOne : arrTwo;
  while ( remainingCount < leftOverArr.length) {
    result.push(leftOverArr[remainingCount]);
    remainingCount += 1;
  }

  return result;
};

console.log(merge( [2,4,10,11,12], [1,3,5,8,8,8,9]));
