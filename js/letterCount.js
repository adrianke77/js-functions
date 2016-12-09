testString = "abc ABC ab c #&#%^*&^($^@$#$^!# ?><:?>{}_+|]\[,;p,\-/[;=,ccc aa";

function letterCount(string) {
	strArray = string.toLowerCase().split("");
	var count ={};
	for (i = 0; i<strArray.length; i++){
		if (strArray[i].match(/[a-z]/i) ) { // do only if char is a letter
			key = strArray[i];
			if (!count.hasOwnProperty(key) )
				count[key] = 0; //if strArray[i] does not exist yet, initialize
			count[key]++;
		}
	}	
	return count;
}

console.log( letterCount(testString) );

