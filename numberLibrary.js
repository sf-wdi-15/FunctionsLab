/* WDI LAB 3 - NUMBER LIBRARY
Date: Nov. 19, 2014
Author: Ky Meyer-Choi

This script stores various math functions. 
The Functions are at the top of the script.
The run code is at the bottom.

*/

/**************************************************************************************
								FUNCTIONS
**************************************************************************************/
// Input: array[number]
// Returns: sum of each number multiplied by its index
function sillySum(numbersArray)
{
	var sum = 0;

	// Loop through each element in the array
	for (var index = 0; index < numbersArray.length; index +=1)
	{
		// Ignore the value if it is not a number
		// If it is a number, add the product to the sum
		if (!isNaN(numbersArray[index]))
		{	
			sum += numbersArray[index] * index;
		}
	}

	return sum;
}



// Input: number
// Return: array[perfectly square numbers not exceeding input value]
//
// max - a number to indicate which value not to exceed when evaluating
function numSquare(max)
{
	// Exit if max is not an umber
	if (isNaN(max))
	{
		console.log("Please enter a number.");
		return;
	}
	// Array to store perfect square numbers that do not exceed "max"
	var perfectSquares = [];

	// Only evaluate if this is a number and += 0
	if (max >= 0 )
	{
		// Loop through every number until we hit the maximum number
		for (var index = 0; index <= max; index += 1)
		{
			// Checks if value is Not a Number
			if (!isNaN(index))
			{
				// If number is a perfect square, add to array
				if (isPerfectSquare(index))
				{
					perfectSquares.push(index);
				}

			}
		}
	}

	else
	{
		console.log("Please only enter a number greater than -1.");
	}
	return perfectSquares;
}



// Input: number
// Returns: false if number is not a perfect square
//			true if number is a perfect square
// Perfect Square: an integer that is the square of an integer
function isPerfectSquare(number)
{
	// Exit out of the function if it is not a number
	if (isNaN(number))
	{
		console.log("Please enter a number.");
		return;
	}

	// 1. get square root of a number
	// 2. check if it is an integer 
	// 3. returns:
	// 	 	-true: number is a perfect square
	//    	-false: number is not a perfect square
	return isInteger(Math.sqrt(number));
}



// Input: number
// Return:  true if number is an integer
//			false if number if a float
function isInteger(number)
{
	// Exit out of the function if it is not a number
	if (isNaN(number))
	{
		console.log("Please enter a number.");
		return;
	}

	return number % 1 === 0;
}



// Input: number
// Return: 	true if number is a prime
//			false if number is not a prime
function isPrime(number)
{

	// I found code that evaluates whether a number is prime online
	// URL: http://studymaths.co.uk/topics/checkIfPrime.php
  	
  	// If n is less than 2 or not an integer then by definition cannot be prime.
	if (number < 2) {return false}
	if (number != Math.round(number)) {return false}

	// Now assume that n is prime, we will try to prove that it is not.
	var isPrime = true;

	// Now check every whole number from 2 to the square root of n. If any of these divides n exactly, n cannot be prime.
	for (var i = 2; i <= Math.sqrt(number); i++) 
	{
		if (number % i == 0) 
		{
			isPrime = false;
		}
	}

	// Finally return whether n is prime or not.
	return isPrime;
}



// Input: number
// Return: array[prime numbers <= number]
//
// max - a number to indicate when to stop iterating
function primes(max)
{

	// Array to store the prime numbers
	var primes = [];
	
	var counter = 0;

	// Loop through every number until it hits the max
	while (counter <= max)
	{
		// Push this number to the array if isPrime returns true
		if (isPrime(counter))
		{
			primes.push(counter);
		}

		counter += 1;
	}

	return primes;
}



// Input: string
// Return: none
// Function: takes a string and prints the number of character
//			 occurrences
// 		-case insensitive
// 		-alphanumeric only (ignore spaces and punctuations)
//
// word - a string to evaluate for character occurrences
// caseSensitive - boolean to toggle case sensitivity
// alphanumeric - boolean to toggle alphanumeric
function letterCount(word)
{
	// Array for holding the key/value pairs
	var letterCounter = {};


	// Make alphanumeric only and case insensitive
	// URL: http://stackoverflow.com/questions/388996/regex-for-javascript-to-allow-only-alphanumeric
	word = word.replace(/[^a-z0-9]/gi,'').toUpperCase();
	
	// Loop through each letter of the string
	for (var index = 0; index < word.length; index += 1)
	{
		// Checks if key already exists in letterCounter
		// 		true - adds another to the counter for the key
		if (letterCounter.hasOwnProperty(word[index]))
		{
			// Grab the value from the existing key
			// Convert the value into a number before adding 1
			// (because objects always return as strings)
			letterCounter[word[index]] = Number(letterCounter[word[index]]) + (1);	
		}

		// 		false - add to letterCounter a new key/value pair with a value of 1
		else
		{
			letterCounter[word[index]] = 1;
		}

	}

	// A sorted array of the keys in letterCounter
	var arr = Object.keys(letterCounter).sort();

	// Display the key and its number of occurrences
	for (var index = 0; index < Object.keys(letterCounter).length; index += 1)
	{
		// Output format: key : value
		console.log(arr[index] + ": " + letterCounter[arr[index]]);
	}
}



// Input: array[sorted numbers], array[sorted numbers]
// Return: array[sorted merged array]
function merge(numArray1, numArray2)
{
	var tempArray = {};
	
	// Loop through each number of the first array
	for (var index = 0; index < numArray1.length; index += 1)
	{
		if (isNaN(numArray1[index]))
		{
			continue;
		}
		// Checks if key already exists in tempArray
		// 		true - adds another to the counter for the key
		if (!tempArray.hasOwnProperty(numArray1[index]))
		{
			tempArray[numArray1[index]] = numArray1[index];
		}

	}

	// Loop through each number of the second array
	for (var index = 0; index < numArray2.length; index += 1)
	{
		if (isNaN(numArray1[index]))
		{
			continue;
		}

		// Checks if key already exists in tempArray
		// 		true - adds another to the counter for the key
		if (!tempArray.hasOwnProperty(numArray2[index]))
		{
			tempArray[numArray2[index]] = numArray2[index];
		}

	}	

	// A sorted array of the keys in tempArray
	var mergedArray = sortNumbers(Object.keys(tempArray));

	return mergedArray;
}



// Input: array[numbers]
// Return: sorted array[numbers]
// Function: properly sorts an array of numbers
function sortNumbers(numbersArray)
{
	return numbersArray.sort(function (a,b) { return a-b;});
}



// Input: array[], boolean, string
// Return: none
// Function: iterates through an array and displays each element 
// 		- has the option to display the array vertically or horizontally 
//
// arr - the array to iterate through and display
// toString - a boolean to toggle the display of the message 
// message - an optional string to display on the console
function displayArray(arr, horizontally, message)
{
	// Display horizontally, convert array into a string
	if (horizontally)
	{
		console.log(message + arr.toString());
	}

	// Display vertically, line by line
	else
	{
		for (var index = 0; index < arr.length; index += 1)
		{
			console.log(arr[index]);
		}
	}
}



// Input: number
// Return: none
// Function: outputs number amount of lines in the console
function makeLines(numberOfLines)
{
	var lines = "";
	for (var index = 0; index < numberOfLines; index += 1)
	{
		lines = lines + "\n";
	}

	console.log(lines);
}


/**************************************************************************************
								SCRIPT RUN
**************************************************************************************/

// Boolean values to show/hide parts of the assignment
var squareNumbersOn = true;
var sillyNumbersOn = true;
var primeMaxOn = true;
var primeNumbersOn = true;
var letterTallyOn = true;
var mergeArraysOn = true;


if (squareNumbersOn)
{
	makeLines(1);
	console.log("PART I - PERFECT SQUARE NUMBERS");
	console.log("Perfect Square Numbers Up to " + squareMaxNum);

	var squareMaxNum = 100;

	if (isNaN(squareMaxNum))
	{
		console.log("Please hardcode a number.");
	}

	else
	{
		displayArray(numSquare(squareMaxNum), true,"");
	}

	makeLines(2);
}

if (sillyNumbersOn)
{		
	console.log("PART II - SILLY SUM");
	console.log("Sum of an array of numbers (only) multiplied by its index.");

	var sillySumArr = [1,3, 1, 4];
	displayArray(sillySumArr, true, "Initial Array: ");
	console.log("Sum: " + sillySum(sillySumArr));
	
	makeLines(2);
}

if (primeMaxOn)
{
	console.log("PART III - PRIMALITY TEST");

	var primeNum = 3;
	console.log("Number to Evaluate: " + primeNum);

	if (isNaN(primeNum))
	{
		console.log("Please hardcode a number.");
	}

	else
	{
		// Using ternary operator to display whether a number is or is not prime
		console.log(primeNum + (isPrime(primeNum) ? " is " : " is not ") + "a prime number");
	}
	makeLines(2);
}

if (primeNumbersOn)
{	
	console.log("PART IV - PRIME OF NUMBERS");

	var primeMaxNum = 1000;
	console.log("Prime numbers up to " + primeMaxNum + ":");
	
	if (isNaN(primeMaxNum))
	{
		console.log("Please hardcode a number.");
	}

	else
	{
		displayArray(primes(primeMaxNum), true, "");	
	}
	

	makeLines(2);
}

if (letterTallyOn)
{
	console.log("PART V - LETTER COUNTER");
	var word = "All your base are belong to us!"	
	
	console.log("String to evaluate: " + word);

	letterCount(word);

	makeLines(2);
}

if (mergeArraysOn)
{

	var array1 = [22,56,209,3948,11];
	var array2 = [33,99,103,22,99,"random string",99,99,22,11,99];

	console.log("PART VI - MERGING ARRAYS");
	displayArray(array1, true, "Array 1: ");
	displayArray(array2,true, "Array 2: ");

	displayArray(merge(sortNumbers(array1), sortNumbers(array2)), true, "Merged Array: ");

	makeLines(1);
}

