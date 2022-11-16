const peopleWaiting = [
  'Кристина',
  'Олег',
  'Кирилл',
  'Мария',
  'Светлана',
  'Артем',
  'Глеб',
]

function giveParcel() {
  const luckyBastard = peopleWaiting.shift()
  alert(
    `${luckyBastard} получил(а) посылку. в очереди осталось ${peopleWaiting.length} человек`
  )
}

function leaveQueueWithoutParcel() {
  const loser = peopleWaiting.pop()
  alert(`${loser} не получил(а) посылку и ушел(ла) из очереди`)
}

giveParcel() // Кристина
giveParcel() // Олег
giveParcel() // Кирилл

for (let i = peopleWaiting.length; i > 0; i--) {
  leaveQueueWithoutParcel()
} // все, кто не получил посылку и ушел
