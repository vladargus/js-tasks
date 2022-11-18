const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

let arr1 = matrix[0].concat(matrix[1], matrix[2]) // concat()
let arr2 = [...matrix[0], ...matrix[1], ...matrix[2]] // Spread-оператор
console.log(arr1) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr2) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
