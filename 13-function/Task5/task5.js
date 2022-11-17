const showSuccessMessage = message => {
  console.log(message)
}
const showErrorMessage = message => {
  console.error(message)
}

const checkTextOnErrorSymbol = (
  text,
  errorSymbol,
  successCallback,
  errorCallback
) => {
  if (!text.includes(errorSymbol)) {
    successCallback('В данном тексте нет запрещенных символов.')
    return
  }
  let index = text.indexOf(errorSymbol)
  while (index !== -1) {
    errorCallback(
      `Найден запрещенный символ ${text[index]} под индексом ${index}`
    )
    index = text.indexOf(errorSymbol, index + 1)
  }
}

const text = 'Привет! Как дела! Давно мы с тобой не виделись.'
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage)
// Найден запрещенный символ а под индексом 9
// Найден запрещенный символ а под индексом 15
// Найден запрещенный символ а под индексом 19
