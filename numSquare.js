var numSquare = function(maxNum) {
    var myArray = [];
    for (i = 0; (i*i) < maxNum; i+=1) {
        myArray.push(i*i);
    }
    return myArray;
}

console.log(numSquare(100));