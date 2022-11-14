let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
  // numbers[i] = numbers[i] ** 3 - изменялся массив
  sum += numbers[i] ** 3
}
console.log(numbers)
console.log(sum) // 1158411

// Через цикл for of
sum = 0
for (let num of numbers) {
  //  num = num ** 3
  sum += num ** 3
}
console.log(numbers)
console.log(sum) // *было 1003904306910622800 *стало 1158411
