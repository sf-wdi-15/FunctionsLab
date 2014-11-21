var merge = function (arrOne, arrTwo) {
  var i = j = 0,
  length = arrOne.length + arrTwo.length
  result = [];
  while (i + j  < length) {
    if (arrOne[i] < arrTwo[j]) {
      result.push(arrOne[i]);
      i += 1;
    } else {
      result.push(arrTwo[j]);
      j += 1;
    }
  }
  return result;
};

console.log(merge([1,3,5,8,8,8,9], [2,4,10,11,12]))
