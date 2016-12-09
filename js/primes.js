var no = 5;

function isPrime(num) {
 	result = true;
 	for (i = 2; i < num; i++ ) {
 		if (num % i === 0) result = false; 
 	}
	return result;
 }

function primes(max) {
	arrayOfPrimes = [];
	for (i = 1; i< max + 1; i++) {
		if (isPrime(i)) arrayOfPrimes.push(i);
	}
	return arrayOfPrimes;
}

console.log(primes(100));