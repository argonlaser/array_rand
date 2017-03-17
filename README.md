# array_rand

Returns specified number of random objects from the array. Given an array, this module will fetch the specified number of random elements within a range in the array.

[![Run Status](https://api.shippable.com/projects/57b87f991419e20f001a4267/badge?branch=master)](https://app.shippable.com/projects/57b87f991419e20f001a4267)

## Installing

```bash
npm install array_rand
```

## Functions

The array_rand module has two versions of the functions :

### Async version

```javascript
getRandomObjectsInRange(array, count, startIndex, endIndex, callback)
```
 
### Sync version

```javascript
getRandomObjectsInRangeSync(array, count, startIndex, endIndex)
```

Where:

```
array - The array used
count - The count of random objects that you need from the array
startIndex - The starting index of the array
endIndex - The ending index of the array
```

## Usage

```javascript
var array_rand = require('array_rand');
var arr = [1,2,3,4,5,6];
var result = array_rand.getRandomObjectsInRangeSync(arr, 3, 1, 5);
array_rand.getRandomObjectsInRange(arr, 3, 1, 5, function(err, result) {
  // Do operation on result
});
// Results any three elements from the array "arr" in the given range
```
