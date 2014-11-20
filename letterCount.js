/** Write a function that takes a string that finds out how many times
 a character occurs. For example, the string "apple" would print the 
 following:

a - 1
p - 2
l - 1
e - 1
BONUS: Make sure that lower case letters and upper case letters count for
 the same character. Also, ignore spaces and punctuation. 

 Notes: strings can be accessed like arrays (but you cant change them 
 	that way b/c all strings are constant)

using objects here makes sense because want to associate a value (the letter) with
its key (the count that the letter occurs)

if (character in letterCount) {letterCount[character]+=1}else{
	letterCount[character] = 1
}
**/

var letterCount = function(str) {
	var obj = {};
	for (var i = 0; i<str.length; i+=1){
		var letter = str[i];
		if(letter in obj) {
			obj[letter] += 1;
		}
		else {
			obj[letter]=1; // here is where a letter is initially added to the object as a key and 1 is put in as the value
		}
	}
	return obj;
};

console.log(letterCount("hello,world"));
