function getName1(name) {
  return `Имя равно ${name}`
}

const getName2 = function (name) {
  return `Имя равно ${name}`
}

const getName3 = name => `Имя равно ${name}`

console.log(getName1('Влад')) // Имя равно Влад
console.log(getName2('Валера')) // Имя равно Валера
console.log(getName3('Ира')) // Имя равно Ира
