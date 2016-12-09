 var no = 5;

 function isPrime(num) {
 	result = true;
 	for (i = 2; i < num; i++ ) {
 		if (num % i === 0) result = false; 
 	}
	return result;
 }

 console.log(isPrime(no));


 