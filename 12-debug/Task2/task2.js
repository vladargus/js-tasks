let temperatureInCelsius = prompt('Введите температуру в градусах Цельсия')
console.log(temperatureInCelsius, typeof temperatureInCelsius)
temperatureInCelsius = Number(temperatureInCelsius)
console.log(temperatureInCelsius, typeof temperatureInCelsius)

if (temperatureInCelsius === 0) {
  alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (temperatureInCelsius > 0) {
  alert(
    'Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже'
  )
}

debugger
const temperatureInFahrenheit = (temperatureInCelsius * 9) / 5 + 32
console.log(temperatureInCelsius, temperatureInFahrenheit)
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по 
Фаренгейту.`)
