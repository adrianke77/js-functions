function isCharacterAVowel(letter) {
letter.toLowerCase() === ("a"||"e"||"i"||"o"||"u") ? result = true : result = false
return result
}

console.log(isCharacterAVowel("A") + " " + isCharacterAVowel("h"));
