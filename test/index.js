
var assert = require('assert')

var memo = require('..')

describe('memoize()', function () {
  it('should only call the getter once', function () {
    var obj = {}
    var calls = 0
    memo(obj, 'prop', function () {
      return ++calls
    })

    assert.equal(1, obj.prop)
    assert.equal(1, obj.prop)
    assert.equal(1, obj.prop)
    assert.equal(1, obj.prop)
    assert.equal(1, obj.prop)
    assert.equal(1, obj.prop)
    assert.equal(1, obj.prop)
  })
})
