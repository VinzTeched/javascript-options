const { default: TestRunner } = require('jest-runner');
const addFive = require('./addFive');
const statusOfKeys = require('./addFive');

test('returns the number plus 5', () => {
    expect(addFive(1)).toBe(6)
})

test('returns true if statusOfKeys exists', function() {
    expect(statusOfKeys).toBeDefined()
})

test('check that console.log runs', function() {
    //statusOfKeys();
    //expect(console.log).toBeCalled();
})


