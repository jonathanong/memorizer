
# memorizer

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

Memoize a property with a lazy callback.
Great for creating internal promises or computationally expensive rproperties.

```js
const memoize = require('memorizer')

function Constructor () {
  this.promise.then(val => {
    // val === true
  })
}

memoize(Constructor.prototype, 'promise', function () {
  return new Promise(true)
})
```

## API

### memoize(object: Object, property: String, getter: Function)

The `getter`'s return value will be memoized.

[npm-image]: https://img.shields.io/npm/v/memorizer.svg?style=flat
[npm-url]: https://npmjs.org/package/memorizer
[travis-image]: https://img.shields.io/travis/jonathanong/memorizer.svg?style=flat
[travis-url]: https://travis-ci.org/jonathanong/memorizer
[coveralls-image]: https://img.shields.io/coveralls/jonathanong/memorizer.svg?style=flat
[coveralls-url]: https://coveralls.io/r/jonathanong/memorizer?branch=master
