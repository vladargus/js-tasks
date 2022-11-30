class Dictionary {
  constructor(name) {
    this.name = name
    this.words = {}
  }
  add(word, description) {
    const newWord = {}
    newWord['word'] = word
    newWord['description'] = description
    this.words[word] = newWord
  }
  remove(word) {
    delete this.words[word]
  }
  get(word) {
    console.log(this.words[word])
    return this.words[word]
  }
  showAllWords() {
    Object.values(this.words).forEach(word =>
      console.log(`${word.word} - ${word.description}`)
    )
  }
}

class HardWordsDictionary extends Dictionary {
  add(word, description) {
    const newWord = {}
    newWord['word'] = word
    newWord['description'] = description
    newWord['isDifficult'] = true
    this.words[word] = newWord
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
