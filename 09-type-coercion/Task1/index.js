let myName = 'Vlad'
let age = 29
let isMarried = true
let job = null
let currentLocation = undefined
let favorites = {
  game: 'Skyrim',
  music: 'RetroWave',
  movie: 'Ready Player One',
  car: 'Lamborghini Huracan',
  number: 21,
}
let id = Symbol('id')
let bigNumber = 21n

console.log('myName', String(myName), Number(myName), Boolean(myName))
console.log('age', String(age), Number(age), Boolean(age))
console.log(
  'isMarried',
  String(isMarried),
  Number(isMarried),
  Boolean(isMarried)
)
console.log('job', String(job), Number(job), Boolean(job))
console.log(
  'currentLocation',
  String(currentLocation),
  Number(currentLocation),
  Boolean(currentLocation)
)
console.log(
  'favorites',
  String(favorites),
  Number(favorites),
  Boolean(favorites)
)
console.log('id', String(id), /*Number(id),*/ Boolean(id))
console.log(
  'bigNumber',
  String(bigNumber),
  Number(bigNumber),
  Boolean(bigNumber)
)
