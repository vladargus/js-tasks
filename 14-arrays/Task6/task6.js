const numbers = [10, 4, 100, -5, 54, 2]

//for
let sum1 = 0
for (i = 0; i < numbers.length; i++) {
  sum1 += numbers[i] ** 3
}
console.log('sum1 =', sum1) // sum1 = 1158411

//for...of
let sum2 = 0
for (const number of numbers) {
  sum2 += number ** 3
}
console.log('sum2 =', sum2) // sum2 = 1158411

//forEach()
let sum3 = 0
numbers.forEach(number => {
  sum3 += number ** 3
})
console.log('sum3 =', sum3) // sum3 = 1158411

//reduce()
const sum4 = numbers.reduce((acc, number) => {
  return acc + number ** 3
}, 0)
console.log('sum4 =', sum4) // sum4 = 1158411
