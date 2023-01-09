console.log(isEqualSymbols('адрес', 'среда')) // true
console.log(isEqualSymbols('ноутбук', 'программист')) // false

function isEqualSymbols(str1, str2) {
  // Преобразуем строки в массивы
  const arr1 = str1.split('')
  const arr2 = str2.split('')

  // Возвращаем true, если массивы состоят из одинаковых элементов
  return (
    arr1.every(letter => arr2.includes(letter)) &&
    arr2.every(letter => arr1.includes(letter))
  )
}
