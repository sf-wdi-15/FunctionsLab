var array = [1,2,3,45];


var sillySum = function(taco){
	var count = 0;
	for (var i=0; i<taco.length; i++) {
	count = count + (taco[i] * i);
}
return(count);
}
console.log(sillySum(array));