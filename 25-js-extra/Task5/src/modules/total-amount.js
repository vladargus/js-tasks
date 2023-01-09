export class TotalAmount {
  constructor() {
    this.totalAmountHTML = document.querySelector('#total-amount')
  }

  render(value) {
    // берём начальное значение из DOM, убирая знак $
    let totalAmount = Number(this.totalAmountHTML.textContent.replace('$', ''))

    // прибавляем к нему новое значение
    totalAmount += Number(value)

    // выводим полученную сумму в DOM
    this.totalAmountHTML.textContent = `${totalAmount}$`
  }
}
