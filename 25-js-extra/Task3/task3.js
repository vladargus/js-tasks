unique([1, 1, 2, 2, 4, 2, 3, 7, 3]) // => [1, 2, 4, 3, 7]

function unique(arr) {
  let newArr = []
  arr.forEach(num => {
    if (!newArr.includes(num)) {
      newArr.push(num)
    }
  })
  console.log(newArr)
  return newArr
}
