var testarr1 = [3, 3, 4, 6, 8, 1, 2];
var testarr2 = [1, 4, 6, 5, 9, 10];

function merge(array1, array2) {
	combArray = array1.concat(array2);
	combArray.sort((a,b) => (a - b));
	return combArray;

}

console.log(merge(testarr1,testarr2));
