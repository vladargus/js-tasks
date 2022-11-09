const userPassword = prompt('Введите пароль')
const errorMessage =
  'Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.'
const successMessage = 'Пароль валидный. Добро пожаловать в аккаунт!'

if (
  userPassword === null ||
  userPassword.length < 3 ||
  userPassword.length >= 30
) {
  alert(errorMessage)
} else {
  let hasBigSymbol = false
  let hasNumbers = false
  for (let i = 0; i < userPassword.length; i++) {
    const symbol = userPassword[i]
    const isNumberSymbol = !isNaN(parseInt(symbol))
    if (symbol === symbol.toUpperCase() && !isNumberSymbol) {
      hasBigSymbol = true
    }
    if (isNumberSymbol) {
      hasNumbers = true
    }
  }

  if (!hasBigSymbol || !hasNumbers) {
    alert(errorMessage)
  } else {
    alert(successMessage)
  }
}
