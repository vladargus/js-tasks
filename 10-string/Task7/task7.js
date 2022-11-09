let javaScriptDecription =
  'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'

const middleIndex = Math.floor(javaScriptDecription.length / 2)

javaScriptDecription = javaScriptDecription
  .slice(0, middleIndex)
  .replaceAll('a', 'A')
  .replaceAll('а', 'А')
  .replaceAll(' ', '')
  .repeat(3)

const updatedMiddleIndex = Math.floor(javaScriptDecription.length / 2)

console.log(javaScriptDecription[updatedMiddleIndex])
console.log(javaScriptDecription)
