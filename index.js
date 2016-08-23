var exporter = {};

var chooseRandomNumer = function (startindex, endIndex) {
  return Math.floor(Math.random() * (startindex - endIndex)) + endIndex;
}

exporter.getRandomObjectsInRangeSync = function (array, count, startIndex, endIndex) {
  if (Array.isArray(array) == false) {
    throw new Error('Invalid array object');
  }
  if (startIndex < 0 || startIndex > array.length - 1) {
    throw new Error('Invalid startIndex value');
  }
  if (endIndex < 0 || endIndex > array.length - 1) {
    throw new Error('Invalid endIndex value');
  }
  if (count < startIndex || count > (endIndex - startIndex) + 1) {
    throw new Error('Invalid count value');
  }
  var resultList = [];
  var temp, randomIndex;
  while (count > 0 && startIndex <= endIndex) {
    randomIndex = chooseRandomNumer(startIndex, endIndex);
    // Swap the last and the current element
    temp = array[randomIndex];
    array[randomIndex] = array[endIndex];
    array[endIndex] = temp;

    // Push the last element into the resultList
    resultList.push(temp);

    /* Ignore the last element and find next random
     * element from the remaining         
     */
    count--;
    endIndex--;
  }
  return resultList;
};

exporter.getRandomObjectsInRange = function (array, count, startIndex, endIndex, callback) {
  var resultList = [];
  try {
    resultList = exporter.getRandomObjectsInRangeSync(array, count, startIndex, endIndex);
    callback(null, resultList);
  }
  catch(err) {
    callback(err, resultList);
  }
};

module.exports = exporter;