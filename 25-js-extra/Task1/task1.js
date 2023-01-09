// Создаём массив с номерами в нужном диапазоне
let start = 1016
let numbers = []

while (start <= 1937) {
  numbers.push(start++)
}

// 1 способ
const number1 = Math.max(
  ...numbers.filter(
    num => num % 3 === 0 && num % 7 === 0 && num % 5 !== 0 && num % 2 !== 0
  )
)
console.log(`Номер выигрышного билета: ${number1}`) // 1911

// 2 способ
const number2 = numbers
  .reverse()
  .find(num => num % 3 === 0 && num % 7 === 0 && num % 5 !== 0 && num % 2 !== 0)
console.log(`Номер выигрышного билета: ${number2}`) // 1911
