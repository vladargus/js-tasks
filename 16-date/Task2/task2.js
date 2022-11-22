function getDaysBeforeBirthday(nextBirthdayDate) {
  const daysBeforeBirthday = convertsMsToDay(nextBirthdayDate - Date.now())
  console.log(daysBeforeBirthday)
  return daysBeforeBirthday
}

function convertsMsToDay(ms) {
  const days = Math.round(ms / 1000 / 60 / 60 / 24)
  return days
}

getDaysBeforeBirthday(new Date(2023, 5, 6)) // 195
getDaysBeforeBirthday(new Date(2023, 2, 2)) // 99
