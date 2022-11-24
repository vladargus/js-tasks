const groceries = {
  '73Wakv': {
    name: 'Orange Juice',
    price: 1.5,
    discount: 10,
  },
  '5L3db9': {
    name: 'Chocolate',
    price: 2,
    discount: 0,
  },
  // more items...
}

function getTotalPriceOfShoppingBag(shoppingBagArray) {
  let result = 0
  shoppingBagArray.forEach(item => {
    const count = item.count
    let price = groceries[item.productId].price
    const discount = groceries[item.productId].discount
    price -= (price * discount) / 100
    result += count * price
  })

  return result.toFixed(2)
}

const shoppingBag = [
  { productId: '73Wakv', count: 3 },
  { productId: '5L3db9', count: 23 },
]

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag)
console.log('totalPrice', totalPrice) // totalPrice 50.05
