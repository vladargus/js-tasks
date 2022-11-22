function addDays(date, days) {
  if (!isNaN(days)) {
    const ms = days * 24 * 60 * 60 * 1000 // переводим введённые дни в миллисекунды
    const newDate = new Date(date + ms) // прибавляем к введённой дате
    console.log(newDate)
    return newDate
  } else {
    console.log('Параметр days не является числом')
  }
}

addDays(Date.now(), 3) // Fri Nov 25 2022 17:45:50 GMT+0300
addDays(Date.now(), 'Not a Number') // Параметр days не является числом
addDays(1354305600000, 11) // Wed Dec 12 2012 00:00:00 GMT+0400
