
var numSquared = function(maxNum) {
	var perfSquared = [];
	for (i = 0; (i*i) < maxNum ; i += 1) {
	perfSquared.push(i*i);
	}
	return perfSquared;
	
}
console.log(numSquared(200));
