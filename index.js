var forEach = require('for-each')
toString = Object.prototype.toString

module.exports = map

function map(list, iterator, context) {
    var returnValue = toString.call(list) === '[object Array]' ? [] : {}

    if (arguments.length < 3) {
        context = this
    }

    forEach(list, function (value, key) {
        returnValue[key] = iterator.call(context, value, key, list)
    })
    
    return returnValue
}
