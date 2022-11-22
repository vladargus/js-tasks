function getDateFormat(date, separator = '.') {
  let curDate = date.getDate()
  curDate = curDate < 10 ? `0${curDate}` : curDate
  let curMonth = date.getMonth() + 1
  curMonth = curMonth < 10 ? `0${curMonth}` : curMonth
  const curFullYear = date.getFullYear()

  const result = curDate + separator + curMonth + separator + curFullYear
  console.log(result)
  return result
}

getDateFormat(new Date(), '-') // 22-11-2022
getDateFormat(new Date(739310400000)) // 06.06.1993
getDateFormat(new Date(2012, 11, 12), '/') // 12/12/2012
