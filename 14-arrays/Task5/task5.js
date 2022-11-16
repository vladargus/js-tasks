let clientsEstimations = []

function askClientToGiveEstimation() {
  const clientEstimate = Number(
    prompt('Как Вы оцениваете нашу кофейню от 1 до 10?')
  )
  if (clientEstimate >= 1 && clientEstimate <= 10) {
    clientsEstimations.push(clientEstimate)
  }
}

for (let i = 0; i < 5; i++) {
  askClientToGiveEstimation()
}

const goodEstimations = clientsEstimations.filter((estimation) => {
  return estimation > 5
})
const notGoodEstimations = clientsEstimations.filter((estimation) => {
  return estimation <= 5
})

alert(
  `Всего положительных оценок: ${goodEstimations.length}, всего отрицательных оценок: ${notGoodEstimations.length}`
)
