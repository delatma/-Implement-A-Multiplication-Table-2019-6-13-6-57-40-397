const generateMultiplicationTable = require('./index');

it ('should return Out of Range when start number is not in range of 1 and 1000', () => {
    expect(generateMultiplicationTable(1001, 1)).toBe("Out of range.");
});

it ('should return Out of Range when end number is not in range of 1 and 1000', () => {
    expect(generateMultiplicationTable(2, 1001)).toBe("Out of range.");
});

it ('should return Out of Range when start and end numbers are in range of 1 and 1000', () => {
    expect(generateMultiplicationTable(-2, 1001)).toBe("Out of range.");
});

it ('should return null when start number is smaller than the end number and is in range', () => {
    expect(generateMultiplicationTable(1000, 1)).toBe(null);
});


it ('should return multiplication table when start number is in range and is smaller to the end number', () => {
	let expectedMultiplicationTable = 
	"2*2=4 \n" + 
	"2*3=6 3*3=9 \n" + 
	"2*4=8 3*4=12 4*4=16 \n";
    expect(generateMultiplicationTable(2, 4)).toBe(expectedMultiplicationTable);
});

it ('should return multiplication table when start number is in range and is equal to the end number', () => {
	let expectedMultiplicationTable = "5*5=25 \n";
	// "1*1=1 \n" +
	// "1*2=2 2*2=4 \n";
    expect(generateMultiplicationTable(5, 5)).toBe(expectedMultiplicationTable);
});
