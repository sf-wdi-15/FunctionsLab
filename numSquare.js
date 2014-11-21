
var numSquare = function (max) {
  var result = [];
  for (var square = index = 1; square < max; index += 1, square = index*index) {
    result.push(square);
  }
  return result;
};

console.log(numSquare(25))
