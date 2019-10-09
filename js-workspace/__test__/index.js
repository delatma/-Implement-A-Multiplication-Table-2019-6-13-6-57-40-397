// AC1: The start number must be smaller than or equal to the end number. 
// Or the function will return null.
// AC2: The start number and the end number can be any number in a 
// range of 1 to 1000 (inclusive).
// AC3: The output should be a string represents the multiplication table.
// Suppose that the start number is 2 and the end number is 4, 

function generateMultiplicationTable(startNumber, endNumber)
{
	if (isRange1to1000(startNumber, endNumber) == true)
		return formatttedMultiplicationTable(startNumber, endNumber);
	else
		return isRange1to1000(startNumber, endNumber);
}


function isRange1to1000(startNumber, endNumber)
{
	if((startNumber >= 1 && startNumber <= 1000) && (endNumber >= 1 && endNumber <= 1000))
	{
		return checkStartNumberSmallerThanEndNumber(startNumber, endNumber);
	}
	return "Out of range.";
}

function checkStartNumberSmallerThanEndNumber(startNumber, endNumber)
{
		if(startNumber <= endNumber)
			return true;
				return null;
}

function formatttedMultiplicationTable(startNumber, endNumber)
{
    let multiplicationTable = "";

        for(let i = startNumber; i <= endNumber; i++){
            for(let j = startNumber; j <= i; j++){
                let product = i*j;
                multiplicationTable += j + "*" + i + "=" + i*j + " ";
            }
            multiplicationTable += '\n';
        }
        return multiplicationTable;
}

module.exports = generateMultiplicationTable;

