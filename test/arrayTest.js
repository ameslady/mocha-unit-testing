//  Uncomment if using Node
 var chai = require('chai');
var assert = chai.assert;

describe('Array', function() {
  it('should start empty', function() {
    var arr = [];

    assert.equal(arr.length, 0, "Array length is not zero");
  });
});
