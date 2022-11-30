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

// проверка
const dictionary = new Dictionary('Толковый словарь')
dictionary.add('JavaScript', 'популярный язык программирования')
dictionary.add(
  'Веб-разработчик',
  'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие'
)
dictionary.get('JavaScript') // {word: 'JavaScript', description: 'популярный язык программирования'}
dictionary.remove('JavaScript')
dictionary.showAllWords()
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие
