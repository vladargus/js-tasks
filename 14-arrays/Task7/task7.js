const goals = [8, 1, 1, 3, 2, -1, 5]

const allGoals = goals
  .filter(goal => {
    return goal >= 0 // создаем массив без автоматических поражений
  })
  .sort((a, b) => {
    return a - b // сортируем массив в порядке возрастания
  })
// allGoals = [1, 1, 2, 3, 5, 8]

// 1. Самый результативный матч по количеству голов.
const bestGame = allGoals.at(-1) // самый результативный матч в конце списка
const bestGameIndex = goals.findIndex(game => {
  return game === bestGame // находим индекс самого результативного матча в основном массиве
})
alert(
  `Самый результативный матч был под номером ${
    bestGameIndex + 1
  }. В нем было забито ${bestGame} гол(ов).`
)

// 2. Самые не результативные игры.
const worstGame = allGoals[0] // самый не результативный матч в начале списка
let worstGamesIndexes = [] // создаем пустой массив для индексов самых не результативных игр
let worstGameIndex = goals.indexOf(worstGame) // находим первый такой индекс
while (worstGameIndex != -1) {
  worstGamesIndexes.push(worstGameIndex) // добавляем его в массив
  worstGameIndex = goals.indexOf(worstGame, worstGameIndex + 1) // находим все остальные такие индексы
}
const worstGamesIndexesString = worstGamesIndexes
  .map(index => {
    return index + 1 // добавляем 1, т.к. индексы идут с 0
  })
  .join(', ') // конвертируем в строку
alert(
  `Самые не результативные матчи были под номерами ${worstGamesIndexesString}. В каждом из них было забито по ${worstGame} мячу(а).`
)

// 3. Общее количество голов за сезон.
const amountOfGoals = allGoals.reduce((acc, goal) => {
  return acc + goal // складываем все голы в массиве
}, 0)
alert(`Общее количество голов за сезон равно ${amountOfGoals}`)

// 4. Были ли автоматические поражения.
if (
  goals.some(goal => {
    return goal < 0 // ищем отрицательные элементы в основном массиве
  })
) {
  alert('Были автоматические поражения: да')
} else {
  alert('Были автоматические поражения: нет')
}

// 5. Среднее количество голов за матч.
const averageGoals = Math.floor(amountOfGoals / allGoals.length) // количество голов, деленное на количество матчей
alert(`Среднее количество голов за матч равно ${averageGoals}`)

// 6. Отсортируйте голы в порядке возрастания.
const ascendingGoals = allGoals.join(', ') // конвертируем в строку отсортированный ранее массив
alert(ascendingGoals)
