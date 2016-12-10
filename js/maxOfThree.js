function maxOfThree(a,b,c) {
	var max;
	a > b ? max = a : max = b;
	if (max < c) max = c;
	return max;
}

