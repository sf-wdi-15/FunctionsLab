
var letterCount = function (word) {
  var result = {};
  for (var index = 0, char = word[index]; index < word.length; index += 1, char = word[index]) {
    result[char] = (result[char] || 0) + 1
  }
  return result;
};

console.log(letterCount("apple"))
