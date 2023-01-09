import { getCurrentDateFormat } from '../core/utils/date'

export class DonateItem {
  #container

  constructor() {
    this.#container = document.createElement('div')
    this.#container.className = 'donate-item'
  }

  render(donationAmount) {
    // получаем текущую дату в нужном формате
    const currentDateFormat = getCurrentDateFormat(new Date())

    // заполняем элемент доната
    this.#container.innerHTML = `${currentDateFormat} - <b>${donationAmount}$</b>`

    return this.#container
  }
}
