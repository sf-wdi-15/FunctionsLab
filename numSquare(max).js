// Create a function called numSquare that will return an array of all perfect 
// square numbers up to, but not exceeding a max number.
var squaresArr = [];
var numSquare = function(max){
  for (var i =0; i <= max; i++){
    squaresArr.push(Math.pow(i, 2));
  }
};

numSquare(7);
console.log(squaresArr);