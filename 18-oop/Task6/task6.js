class Dictionary {
  #name
  #words
  constructor(name) {
    this.#name = name
    this.#words = {}
  }

  get mainName() {
    return this.#name
  }

  set mainName(newName) {
    this.#name = newName
  }

  get allWords() {
    return this.#words
  }

  _addNewWord(wordKey, wordObj) {
    this.allWords[wordKey] = wordObj
  }

  add(word, description) {
    if (!this.allWords[word]) {
      const newWord = {
        word,
        description,
      }
      this._addNewWord(word, newWord)
    }
  }
  remove(word) {
    delete this.allWords[word]
  }
  get(word) {
    console.log(this.allWords[word])
    return this.allWords[word]
  }
  showAllWords() {
    Object.values(this.allWords).forEach(word =>
      console.log(`${word.word} - ${word.description}`)
    )
  }
}

class HardWordsDictionary extends Dictionary {
  add(word, description) {
    if (!this.allWords[word]) {
      const newWord = {
        word,
        description,
        isDifficult: true,
      }
      this._addNewWord(word, newWord)
    }
  }
}

// проверка
const hardWordsDictionary = new HardWordsDictionary('Сложные слова')

hardWordsDictionary.add(
  'дилетант',
  'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.'
)

hardWordsDictionary.add(
  'неологизм',
  'Новое слово или выражение, а также новое значение старого слова.'
)

hardWordsDictionary.add(
  'квант',
  'Неделимая часть какой-либо величины в физике.'
)

hardWordsDictionary.remove('неологизм')

hardWordsDictionary.showAllWords()
// дилетант - Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.
// квант - Неделимая часть какой-либо величины в физике.

console.log(hardWordsDictionary.mainName) // Сложные слова
hardWordsDictionary.mainName = 'Новый Словарь'
console.log(hardWordsDictionary.mainName) // Новый Словарь
console.log(hardWordsDictionary.allWords) // {дилетант: {…}, квант: {…}}
