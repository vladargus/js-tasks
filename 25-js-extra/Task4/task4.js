isPalindrome('racecar') // true
isPalindrome('programmer') // false

function isPalindrome(str) {
  // Преобразуем строку в массив
  const arr1 = str.split('')
  // Копируем массив и переворачиваем его
  const arr2 = [...arr1].reverse()
  // Выводим true, если все символы двух массивов совпадают
  console.log(arr1.every((letter, i) => arr2[i] === letter))
}
