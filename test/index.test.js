const { test, expect } = require('@jest/globals');
const add = require('../src/index');

test('adds 2 + 2 to equal 4', () => {
    expect(add(2, 2)).toBe(4);
});