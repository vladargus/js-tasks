function getMathResult(expression) {
  const mathSigns = ['>', '<', '=', '+', '-', '*', '/']

  expression = expression.filter(el => !isNaN(el) || mathSigns.includes(el)) // убираем лишние элементы

  if (
    expression.length < 3 ||
    expression.length > 3 ||
    isNaN(expression[0]) ||
    !mathSigns.includes(expression[1]) ||
    isNaN(expression[2])
  ) {
    return 'Ошибка' // выводим ошибку в случае ввода неверных параметров
  }

  // калькулятор
  const num1 = Number(expression[0])
  const num2 = Number(expression[2])
  switch (expression[1]) {
    case '>':
      return num1 > num2
    case '<':
      return num1 < num2
    case '=':
      return num1 === num2
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    case '/':
      return num1 / num2
  }
}

// проверка
console.log(getMathResult(['200', '+', 300])) // 500
console.log(getMathResult(['20', '-', '5'])) // 15
console.log(getMathResult([100, '/', 100])) // 1
console.log(getMathResult([2, '-', 2])) // 0
console.log(getMathResult(['5', '>', '10'])) // false
console.log(getMathResult(['5', '<', '10'])) // true
console.log(getMathResult(['1', '=', 1])) // true
console.log(getMathResult(['1', '**', 1])) // 'Ошибка'
console.log(getMathResult(['+', '100', 10])) // 'Ошибка'
