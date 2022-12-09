class CustomSelect {
  #currentSelectedOption

  constructor(id, options) {
    this.id = id
    this.options = options
    this.#currentSelectedOption = {}
  }

  get selectedValue() {
    return this.#currentSelectedOption
  }

  // метод для генерации выпадающего списка
  #createDropdown(container) {
    const dropdownBlock = document.createElement('div')
    dropdownBlock.className = `select-dropdown select-dropdown--${this.id}`
    container.append(dropdownBlock)

    const dropdownButton = document.createElement('button')
    dropdownButton.className = `select-dropdown__button select-dropdown__button--${this.id}`
    dropdownBlock.append(dropdownButton)

    const dropdownSpan = document.createElement('span')
    dropdownSpan.className = `select-dropdown__text select-dropdown__text--${this.id}`
    dropdownSpan.textContent = 'Выберите элемент'
    dropdownButton.append(dropdownSpan)

    const dropdownList = document.createElement('ul')
    dropdownList.className = `select-dropdown__list select-dropdown__list--${this.id}`
    dropdownBlock.append(dropdownList)

    this.options.forEach(item => {
      const dropdownItem = document.createElement('li')
      dropdownItem.className = 'select-dropdown__list-item'
      dropdownItem.dataset.value = item.value
      dropdownItem.textContent = item.text
      dropdownList.append(dropdownItem)
    })
  }

  // метод для реализации открытия списка и выбора элемента
  #selectingItem() {
    const dropdownButtonFromDOM = document.querySelector(
      '.select-dropdown__button'
    )
    const dropdownListFromDOM = document.querySelector('.select-dropdown__list')

    // открытие и закрытие списка
    dropdownButtonFromDOM.addEventListener('click', () => {
      dropdownListFromDOM.classList.toggle('active')
    })

    // выбор элемента из списка
    dropdownListFromDOM.addEventListener('click', event => {
      const isListItem = event.target.closest('.select-dropdown__list-item')
      if (isListItem) {
        const currentValue = Number(event.target.dataset.value)
        const obj = options.find(item => item.value === currentValue)
        this.#currentSelectedOption = obj
        console.log(this.#currentSelectedOption)

        const dropdownText = document.querySelector('.select-dropdown__text')
        dropdownText.textContent = obj.text

        const allItems = document.querySelectorAll(
          '.select-dropdown__list-item'
        )
        allItems.forEach(item => item.classList.remove('selected'))
        event.target.classList.add('selected')
      }
    })
  }

  // публичный метод render
  render(container) {
    this.#createDropdown(container)
    this.#selectingItem()
  }
}

// проверка
const options = [
  { value: 1, text: 'JavaScript' },
  { value: 2, text: 'NodeJS' },
  { value: 3, text: 'ReactJS' },
  { value: 4, text: 'HTML' },
  { value: 5, text: 'CSS' },
]
const customSelect = new CustomSelect('123', options)
const mainContainer = document.querySelector('#container')
customSelect.render(mainContainer)
