

//sillySum

var myArray = [1,2,3,4,5,6,7,8,9]

var sillySum = function(myArray) {
var count = 0;
	for (var i=0;i <myArray.length; i+=1)  {

 count += i * myArray[i];

	}
	return count;
  }

  console.log(sillySum(myArray));

//Pain in my ass numSquare which Calvin helped with (Thank you, Calvin!)

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

//Primality test

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


function isPrime(n)
 {

  for(var i = 2; i <= Math.sqrt(n); i++) {

    if (n % i === 0) {
      return false;
    }
  }
     return true;
 }



//Optimus Prime (i.e)

// function isPrime(n) {

//     if (n <= 3) {
//      return n > 1; 
//  }
//     if (n % 2 == 0 || n % 3 == 0) {
//      return false; 
//  }
//     for (var  i = 5; i * i <= n; i += 6) {

//         if (n % i == 0 || n % (i + 2) == 0) 
//         	{
//         	 return false; 
//         	}
//     }
//     return true;
// }


//letter count

var word = "apple";

var letterCount = function(letters) {

  var result = {}

  for(var i = 0; i < letters.length; i++) {

    if (result[letters[i]]) {
      result[letters[i]] += 1;
    } else {
      result[letters[i]] = 1;
    }

  }

  return result;
}

console.log(letterCount(word));

//another letter count

var letterCount = function(str) {
    var obj = {};

    for (var i = 0; i<str.length; i+=1)
    {
      var letter = str[i];
      if (letter in obj) {
        obj[letter] += 1;
      }
      else {
        obj[letter] = 1;
      }
    }
    return obj;
  };

  console.log(letterCount('hello world'));



//merge


var list2 = [3,6,11];
var list1 = [2,4,5,8,9];

var merge = function(arr1, arr2) {
  var result = [];

  while (arr1.length && arr2.length) {
    result.push(( arr1[0] <= arr2[0] ) ? arr1.shift() : arr2.shift());
  }
  return result.concat(arr1).concat(arr2);
}

console.log(merge(list1, list2));


//another way to merge two arrays

var merge2 = function(arr1, arr2) {
  var result = [], indexOne =0, indexTwo = 0;

  while (indexOne < arr1.length && indexTwo < arr2.length) {
   if (arr1[indexOne] <= arr2[indexTwo] ) {
     result.push(arr1[indexOne]);
     indexOne++
    } else {
     result.push(arr2[indexTwo]);
     indexTwo++
    }
  }
  return result.concat(arr1.slice(indexOne)).concat(arr2.slice(indexTwo));
}

console.log(merge2(list1, list2));










