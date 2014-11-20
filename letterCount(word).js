// Write a function that takes a string that finds out how many times a 
//character occurs. For example, the string "apple" would print the following:

// a - 1
// p - 2
// l - 1
// e - 1

// BONUS: Make sure that lower case letters and upper case letters count for the same character. Also, ignore spaces and punctuation.



function count_letters(str) {
    var counter = 0;

    for (var i = 0; i < str.length; i++) {
        var positionOfLetter = str.indexOf(str[i], i);

        if (positionOfLetter > -1) {
            counter++;
            i = positionOfLetter;
            console.log(i);
        }
    }
    return counter;
}
var str = "angelo and an apple.";

charAt(index)

















function countLetters() {
  var counter = 0;

  for (var i = 0, input_length = input.length; i < input_length; i++) {
      var index_of_sub = input.indexOf(input_letter, i);

      if (index_of_sub > -1) {
          counter++;
          i = index_of_sub;
      }
  }
for(var x=myArray.length -1; x >= 0; x--)




var countLetters = function(str){
  var letterArray = str.split('');
  var index = letterArray.indexOf(currentLetter);
  
  for (i = 0; i < arr.length; i++){
    var currentLetter = arr[i];
    var occurances = 0;

    if(currentLetter === arr.length-1){
      occurances += 1;
    }
  }

};
compareLetter = function(letter){
  charAt(arr[position]) |= [];
}

loop through string checking if i === to character at i
console.log('character at index' + occurances);

var finalCountDown = function(num){
  if (var index = array.indexOf(2); === charAt(i)> 0){
    console.log(num);
    finalCountDown(num -= 1);
  } else {
    console.log("Finished");
  }
}