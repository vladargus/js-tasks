function getSumOfNumbers(number, type = 'odd') {
  if (isNaN(number)) {
    return NaN
  }

  let sum = 0
  for (i = 0; i <= number; i++) {
    if (type === 'odd' && i % 2 !== 0) {
      sum += i
    } else if (type === 'even' && i % 2 === 0) {
      sum += i
    } else if (type === '') {
      sum += i
    }
  }
  return sum
}

console.log(getSumOfNumbers(10)) // 25
console.log(getSumOfNumbers(10, 'odd')) // 25
console.log(getSumOfNumbers(10, 'even')) // 30
console.log(getSumOfNumbers(10, '')) // 55
console.log(getSumOfNumbers('Not a Number')) // NaN
console.log(getSumOfNumbers()) // NaN
