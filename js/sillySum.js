let testArray = [1,12,435,457,9,234]

function sillySum(array) { // warning, will mutate original array
typeof(count) === "undefined" ? count = 0 : count++ ; 
array.length != 0 ? 
	result = array.shift() * count + sillySum(array): 
	result = 0; 
return result;
}

console.log(sillySum(testArray.slice() ) )