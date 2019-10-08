const generateMultiplicationTable = require('./index');

it ('should be that start number is smaller than the end number', () => {
    expect(generateMultiplicationTable(1000, 1)).toBe(null);
});

it ('should be that start and end numbers are between 1 and 1000', () => {
    expect(generateMultiplicationTable(1001, 1)).toBe("Out of range.");
});

it ('should be that start and end numbers are between 1 and 1000', () => {
    expect(generateMultiplicationTable(2, 1001)).toBe("Out of range.");
});

it ('should be that start and end numbers are between 1 and 1000', () => {
    expect(generateMultiplicationTable(-2, 1001)).toBe("Out of range.");
});

it ('should be that start number is equal to the end number', () => {
    expect(generateMultiplicationTable(2, 2)).toBe('test');
});

it ('should be that start number is smaller than the end number', () => {
    expect(generateMultiplicationTable(1, 2)).toBe('test');
});
