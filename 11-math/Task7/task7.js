const clientName = prompt('Введите имя клиента')
let clientSpentForAllTime = Number(
  prompt('Сколько клиент потратил за всё время?')
)
let clientSpentToday = Number(prompt('Сколько клиент потратил сегодня?'))

let discount = 0

if (!clientSpentForAllTime || !clientSpentToday) {
  alert(
    'Сумма, которую клиент потратил за всё время и которую потратил за сегодня должна быть числом! Перезагрузи страницу, чтобы повторить попытку.'
  )
} else {
  if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
    discount = 10
  } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 20
  } else if (clientSpentForAllTime >= 500) {
    discount = 30
  }
  alert(`Вам предоставляется скидка в ${discount}%!`)

  clientSpentToday -= (clientSpentToday * discount) / 100
  clientSpentForAllTime += clientSpentToday

  alert(
    `Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За всё время в нашем ресторане Вы потратили ${clientSpentForAllTime}$.`
  )
}
