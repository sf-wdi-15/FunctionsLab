

var myArray = [1,2,3,4,5,6,7,8,9]

var sillySum = function(myArray) {
var count = 0;
	for (var i=0;i <myArray.length; i+=1)  {

 count += i * myArray[i];

	}
	return count;
  }

  console.log(sillySum(myArray));



 var maxVal = 10
 var dumpArr = [];

 var numSquare = function(max) { 

  for(var i = 0; i <= maxVal; i++){
    square = Math.pow(i, 2);
 	dumpArr.push(square);
    }
 }

console.log(numSquare(maxVal));
console.log(dumpArr);



var primeOrNot = 17;

 var isPrime = function(n)

{
	if (n<=3)
	{
		return n > 1;
	}

    if (n % 2 === 0 || n % 3 === 0)
    {
    	return false;
    }

    for (var i = 5; i * i <= n; i += 6)
    {

      if (n % i === 0 || n & (i + 2) == 0)
      {

          return false;
      
      }

      
    }
   return true
}

console.log(isPrime(primeOrNot));




function isPrime(n) {

    if (n <= 3) {
     return n > 1; 
 }
    if (n % 2 == 0 || n % 3 == 0) {
     return false; 
 }
    for (var  i = 5; i * i <= n; i += 6) {

        if (n % i == 0 || n % (i + 2) == 0) 
        	{
        	 return false; 
        	}
    }
    return true;
}








