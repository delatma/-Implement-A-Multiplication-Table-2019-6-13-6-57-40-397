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
	let expectedMultiplicationTable = "2*2=4 \n2*3=6 3*3=9 \n2*4=8 3*4=12 4*4=16 \n";
    expect(generateMultiplicationTable(2, 4)).toBe(expectedMultiplicationTable);
});

it ('should be that start number is smaller than the end number', () => {
	let expectedMultiplicationTable = "1*1=1 \n1*2=2 2*2=4 \n";
    expect(generateMultiplicationTable(1, 2)).toBe(expectedMultiplicationTable);
});
