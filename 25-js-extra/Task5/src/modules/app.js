import { DonateItem } from './donate-item'
import { TotalAmount } from './total-amount'

export default class App {
  #totalAmount

  constructor() {
    this.#totalAmount = new TotalAmount()
  }

  run() {
    const donateForm = document.querySelector('.donate-form')
    const donateContainer = document.querySelector(
      '.donates-container__donates'
    )
    const inputHTML = document.querySelector('.donate-form__donate-input')

    // действия при отправке введенной суммы
    donateForm.addEventListener('submit', event => {
      event.preventDefault()
      const { target } = event
      const amountInput = target.amount
      const inputValue = amountInput.value
      if (inputValue) {
        // добавление доната в список
        const donateItem = new DonateItem()
        const donateItemHTML = donateItem.render(inputValue)
        donateContainer.append(donateItemHTML)

        // очищаем поле ввода
        inputHTML.value = ''

        // вычисляем сумму всех донатов
        this.#totalAmount.render(inputValue)
      }
    })
  }
}
