const peopleWithVisa = [
  {
    firstName: 'Stasia',
    lastName: 'Ward',
    criminalRecord: true,
    passportExpiration: '19.06.2040',
  },
  {
    firstName: 'Elliot',
    lastName: 'Baker',
    criminalRecord: false,
    passportExpiration: '04.06.2041',
  },
  {
    firstName: 'Leighann',
    lastName: 'Scott',
    criminalRecord: true,
    passportExpiration: '31.07.2039',
  },
  {
    firstName: 'Nick',
    lastName: 'Pop',
    criminalRecord: false,
    passportExpiration: '31.12.2010',
  },
]

function correctDate(date) {
  date = date // 04.06.2041
    .split('.') // ['04', '06', '2041']
    .reverse() // ['2041', '06', '04']
    .map(el => +el) // [2041, 6, 4]
  date[1] -= 1 // [2041, 5, 4]
  return new Date(...date) // Tue Jun 04 2041 00:00:00 GMT+0300
}

function allowVisa(people) {
  const allowedPeople = people.filter(person => {
    const personDate = correctDate(person.passportExpiration)
    return !person.criminalRecord && personDate.getTime() > Date.now()
  })
  return allowedPeople
}

const result = allowVisa(peopleWithVisa)
console.log('result', result)
