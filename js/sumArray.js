let testArray = [1, 3, 6, 11, 15, 21];

function sumArray(array) { //warning,mutates array
	array.length > 0 ? 
		result = array.shift() + sumArray(array) : 
		result = 0;  
	return result;
	}

function multiplyArray(array) { //warning, mutates array
	array.length > 0 ? 
		result = array.shift() * multiplyArray(array) : 
		result = 1;  
	return result;
	}

console.log ("Sum of testArray: " + sumArray(testArray.slice()));
console.log ("Multiplied out testArray: " + multiplyArray(testArray.slice()))