var Random = function() {
}
var chooseRandomNumer = function(startindex, endIndex){
	return Math.floor(Math.random() * (startindex - endIndex)) + endIndex;
}
// Can we use an object instead of startindex and max index???
Random.prototype.getRandomNumberInRangeSync = function(array, number, startIndex, endIndex) {
    if(startIndex < 0 || endIndex > array.length) {
//return error

    }
    endIndex = endIndex - 1;
    startIndex = startIndex;
	var returnList = []
	var temp,randomIndex
	while(number > 0 && startIndex <= endIndex) {
		randomIndex = chooseRandomNumer(startIndex,endIndex);
		console.log(randomIndex)
		temp = array[randomIndex];
		array[randomIndex] = array[endIndex];
		array[endIndex] = temp;
		console.log(array)
		number--;
		endIndex--;
	    returnList.push(temp)
	}
	return returnList;

};
Random.prototype.getRandomNumberInRange = function(callback, array, number, startIndex, endIndex) {
	if(startIndex < 0 || endIndex > array.length) {
//return error

    }
    endIndex = endIndex - 1;
    startIndex = startIndex;
	var returnList = []
	var temp,randomIndex
	while(number > 0 && startIndex <= endIndex) {
		randomIndex = chooseRandomNumer(startIndex,endIndex);
		console.log(randomIndex)
		temp = array[randomIndex];
		array[randomIndex] = array[endIndex];
		array[endIndex] = temp;
		console.log(array)
		number--;
		endIndex--;
	    returnList.push(temp)
	}
	return returnList;
};
var array = [1,2,3,4,5,6]
var r= new Random();
var list = r.getRandomNumberInRangeSync(array, 5, 0, 6);
console.log(list)