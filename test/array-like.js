
var like = require('array-like');
var assert = require('assert');

describe('array-like', function () {
  it('should return false when provided a function', function () {
    assert(like(function () {}) === false);
    assert(like(function (a, b, c) {}) === false);
  });

  it('should return true when provided an array', function () {
    assert(like([]) === true);
    assert(like([ 1, 2, 3 ]) === true);
    assert(like(new Array) === true);
    assert(like(new Array(12)) === true);
  });

  // phantomjs says nodelists are functions
  if (typeof mochaPhantomJS === 'undefined') {
    it('should return true when provided a NodeList', function () {
      var nodes = document.getElementsByTagName('*');
      assert(like(nodes) === true);
    });

    it('should return true when provided an empty NodeList', function () {
      var nodes = document.getElementsByTagName('shsdflkj');
      assert(like(nodes) === true);
    });
  }

  it('should return true when provided an object with `.length`', function () {
    assert(like({ length: 1 }) === true);
  });

  it('should return false if `.length` is NaN', function () {
    assert(like({ length: 'hi' }) === false);
    assert(like({ length: null }) === false);
    assert(like({ length: function () {} }) === false);
  });
});
