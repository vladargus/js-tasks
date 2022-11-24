function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function getWinner(applicants, winnerObjects) {
  const keysArray = Object.keys(applicants) // в нашем случае ['201', '304', '001']
  const winnerId = getRandomNumberInRange(0, keysArray.length) // рандомное число от 0 до 3 (3 не включительно)
  const winnerInfo = applicants[keysArray[winnerId]] // находим победителя по ключу с рандомным индексом
  // либо const winnerInfo = Object.values(applicants)[winnerId]
  return { ...winnerObjects, ...winnerInfo }
}

const todaysWinner = {
  prize: '10 000$',
}

const winnerApplicants = {
  '001': {
    name: 'Максим',
    age: 25,
  },
  '201': {
    name: 'Светлана',
    age: 20,
  },
  '304': {
    name: 'Екатерина',
    age: 35,
  },
}

const resultWinner = getWinner(winnerApplicants, todaysWinner)
console.log('resultWinner', resultWinner)
// { prize: '10 000$', name: 'Максим', age: 25 }
