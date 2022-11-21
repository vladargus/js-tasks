function giveTalonsInOrder(patients, orders) {
  patients.sort((a, b) => orders.indexOf(a.id) - orders.indexOf(b.id))
  return patients
}

const ordersArr = [4, 2, 1, 3]
const people = [
  { id: 1, name: 'Максим' },
  { id: 2, name: 'Николай' },
  { id: 3, name: 'Ангелина' },
  { id: 4, name: 'Виталий' },
]

const result = giveTalonsInOrder(people, ordersArr)
console.log('result', result)
