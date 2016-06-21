var array_rand = require('./index.js');
var assert = require('assert');

describe('Library Checks', function () {
  it('should be requireable', function () {
    assert.ok(typeof(array_rand) === 'object');
  });

  it('should have required lib functions', function () {
    assert.ok(typeof(array_rand.getRandomNumberInRangeSync) === 'function');
    assert.ok(typeof(array_rand.getRandomNumberInRange) === 'function');
  });
});

describe('getRandomNumberInRangeSync()', function () {
  it('should handle empty array', function () {
    try {
      var num = array_rand.getRandomNumberInRangeSync([],0,0,0);
    }
    catch(err) {
      assert.ok(!!err);
    }
  });
});

describe('getRandomNumberInRangeSync()', function () {
  it('should handle empty array', function (done) {
      array_rand.getRandomNumberInRange([],0,0,0, function(err, ele) {
        if (err && ele.length === 0)
          done();
        else
          done('Empty array not handled');
      });
  });
});
