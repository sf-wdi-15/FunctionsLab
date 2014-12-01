// Write a function that takes a string that finds out how many times a 
//character occurs. For example, the string "apple" would print the following:

// a - 1
// p - 2
// l - 1
// e - 1

// BONUS: Make sure that lower case letters and upper case letters count for the same character. Also, ignore spaces and punctuation.

// another name for the problem is a histogram from statistics, a barchart that shows frequency of each letter
// you can access char of a string like you access elements of an array. you cannot set a value of a string, unlike arrays (particular to JS), strings are immutable.

var letterCount = function(str){
  var obj = {};
  var string = str.replace(/\s/g, '').replace(/\W/g, '').toLowerCase(); // ensures letters counted once; removes spaces && non-word char
  for (var i = 0; i < string.length; i++){
    var letter = string[i]; // grabs letter at location in string
    if (!!obj[letter]){  // if (letter is key in obj)  will return true 
      obj[letter] += 1;  // increment the value of the letter +=1
    } else {
      obj[letter] = 1;   // if letter only occurs once, set value at 1
    }
  }
  return obj;
};
console.dir(letterCount("Angelo! needs to learn!"));