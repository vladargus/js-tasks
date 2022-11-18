let matrix = []
for (let i = 1; i <= 3; i++) {
  let arr = []
  for (let j = 1; j <= 5; j++) {
    arr.push(j) // заполняем внутренние массивы
  }
  matrix.push(arr) // добавляем их во внешний массив
}
console.log(matrix)
// [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
