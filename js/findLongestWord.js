wordsArray = ["Donkey", "Troll", "Dragon", "Apostrophe", "Sesquidalarian"]

function findLongestWord(array) {
	longest = 0;
	for (i in array) {
		if (wordsArray[i].length > longest)
			longest = wordsArray[i].length 		
	}
	return longest
}

console.log(findLongestWord(wordsArray));