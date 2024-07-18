const { test, expect } = require('@jest/globals');
const add = require('../src/index');

test('adds 2 + 2 to equal 4', () => {
    expect(add(3, 2)).toBe(5);
});