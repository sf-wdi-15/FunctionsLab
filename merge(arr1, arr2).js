// Write a function called merge. The function should take two sorted arrays of 
// numbers as input and return a merged array of the sorted numbers from the input. 
// For example, if the input arrays were var arr1 = [3,6,11]; var arr2 = [2,4,5,8,9]; 
// Then the returned array would be: [2,3,4,5,6,8,9,11].

merge = function(arr1, arr2){
  var concatArray = arr1.concat(arr2);
  var sortArray = concatArray.sort(function(a, b){return a-b});
  console.log(sortArray);
};

var arr1 = [11,2,0];
var arr2 = [4,-55,6];

console.log(merge(arr1, arr2));