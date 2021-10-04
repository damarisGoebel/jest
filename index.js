function add(a,b) {
    if (typeof a !=  'number' || typeof b !=  'number')  {
        throw new TypeError('Input is not a number')
    }
    return a + b
}

module.exports = add;
