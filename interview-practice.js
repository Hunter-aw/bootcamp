const alphabet = ["a", "b", "g", "d", 'h', 'v', 'z', 'j', 't', 'y', 'j', 'l', 'm', 'n', 's', 'i', 'p', 'x', 'q', 'r', 'w', 'u', 'c', 'e', 'f', 'o']
const alphabetScore = {};
const scoreAlphabet = () => {
    for (i=0; i<alphabet.length; i++){
        let letter = alphabet[i]
        alphabetScore[letter] = (1/((i+1)*(i+1)))
    }
}
const scoreWord = (word) => {
    let wordScore= 0
    arrayedWord = word.toLowerCase().split("")
    for (letter of word) {
        let score = (alphabetScore[letter] * 
                    (1/((arrayedWord.indexOf(letter)+1)*((arrayedWord.indexOf(letter)+1)))
                ))
        wordScore += score
    }
    console.log(word, wordScore)
    return wordScore
}

const compareFunc = (a,b) => {
    return scoreWord(b) - scoreWord(a)
}

const sortStringByHebrew = (string) => {
    let arrayedString = string.split(" ");
    arrayedString.sort(compareFunc)
    console.log(arrayedString.toString())
}

scoreAlphabet()
sortStringByHebrew("hunter aparently eats ants on days where he thinks he might be an anteater mmhmm")