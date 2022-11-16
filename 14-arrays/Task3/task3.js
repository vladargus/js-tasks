const coffees = ['Latte', 'Cappuccino', 'Americano']

const coffeeName = prompt('Поиск кофе по названию:').trim().toLowerCase()

const searchedCoffeeIndex = coffees.findIndex((coffee) => {
  return coffee.toLowerCase() === coffeeName
})
const searchedCoffee = coffees[searchedCoffeeIndex]
if (searchedCoffee) {
  alert(
    `Держите Ваш любимый кофе ${searchedCoffee}. Он ${
      searchedCoffeeIndex + 1
    }-й по популярности в нашей кофейне`
  )
} else {
  alert('К сожалению, такого вида кофе нет в наличии')
}
