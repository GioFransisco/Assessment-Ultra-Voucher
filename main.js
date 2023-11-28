let words = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];

// fungsi untuk mengelompokkan huruf dalam kata menjadi array
const sortingWord = (word) => {
    let sortWord = ''
    let arrayOfWord = []

    for (let i = 0; i < word.length; i++) {
        arrayOfWord[arrayOfWord.length] = word[i]        
    }

    for (let i = 0; i < arrayOfWord.length - 1; i++) {
        for (let j = 0; j < arrayOfWord.length - i; j++) {
            if (arrayOfWord[j] > arrayOfWord[j + 1]) {
                let tempWord = arrayOfWord[j]
                arrayOfWord[j] = arrayOfWord[j + 1]
                arrayOfWord[j + 1] = tempWord
            }
        }
        console.log(arrayOfWord, '\n');
    }

    for (let i = 0; i < arrayOfWord.length; i++) {
        sortWord += arrayOfWord[i]        
    }
    return sortWord
}

// fungsi untuk mencari teks anagram
const anagramWord = (words) => {
    let container = {}
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        
        let sortWord = sortingWord(word)
        
        if (container[sortWord]){
            container[sortWord][container[sortWord].length] = word
        }else {
            container[sortWord] = [word]
            console.log(word);
        }

    }

    let result = []
    for (let res in container) {
        result[result.length] = container[res]
    }
    return result
}

const result = anagramWord(words)
console.log(result);