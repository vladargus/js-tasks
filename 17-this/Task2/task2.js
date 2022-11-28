const dog = {
  name: 'Чарли',
  type: 'Собака',
  makeSound() {
    return 'Гав-Гав'
  },
}

const bird = {
  name: 'Петя',
  type: 'Воробей',
  makeSound() {
    return 'Чик-чирик'
  },
}

function makeDomestic(isDomestic) {
  if (typeof isDomestic !== 'boolean') {
    alert('Параметр isDomestic должен быть типа Boolean')
    return
  }
  this.isDomestic = isDomestic
  console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
  return this
}

makeDomestic.bind(dog, true)()
// Вернет объект: {name: 'Чарли', type: 'Собака', isDomestic: true, makeSound: ƒ}
// И выведет сообщение: "Собака по имени Чарли говорит Гав-Гав"

makeDomestic.call(bird, false)
// Вернет объект: {name: 'Петя', type: 'Воробей', isDomestic: false, makeSound: ƒ}
// И выведет сообщение: "Воробей по имени Петя говорит Чик-чирик"

makeDomestic.apply(bird, [true])
// Вернет объект: {name: 'Петя', type: 'Воробей', isDomestic: true, makeSound: ƒ}
// И выведет сообщение: "Воробей по имени Петя говорит Чик-чирик"
