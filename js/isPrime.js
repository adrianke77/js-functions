 var no = 8;

 function isPrime(num) {
 	result = true;
  if (num === 1 || num === 2) return true; 
  //because prime but exceptions to below loop check
  for (i = 2; i < num; i++ ) {
 		if (num % i === 0) result = false; 
 	}
	return result;
 }

 console.log(isPrime(no));


 