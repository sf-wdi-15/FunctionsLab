// Write a function that takes an array of numbers, and returns the sum of each 
//number multiplied by its index.

// count += (number * index)

var arr = [1, 3, 4, 10];
var counter = 0;

multiplyByIndex = function(numbers){
  var index = numbers[i];
  var num = array[i];
  var currentNum = valueOf(numbers[i]);
  
  count += (number * index);
};

// rewritten for Thanksgiving 2014 homework
var multiplyAllByIndex = function(arr){
  var counter = 0;
  for(var i = 0; i < arr.length; i++){
    counter += arr[i] * i;
  }
  return counter;
};

console.log(multiplyAllByIndex(arr));