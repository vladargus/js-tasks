setTimeout(() => {
  console.log('setTimeout')
}, 0)
const promise = new Promise(resolve => {
  console.log('Promise')
  resolve()
})
promise.then(() => {
  console.log('Promise resolve')
})
console.log('End')

// 1. setTimeout добавляется в очередь Callback queue
// 2. Выполняется синхронный код внутри промиса, в консоль выводится 'Promise'
// 3. Вызывается resolve() и колбэк из метода then попадает в очередь Microtask queue
// 4. Макрозадача выполняется дальше, в консоль выводится 'End'
// 5. Callstack пуст, из очереди Microtask queue выполняется колбэк промиса
// 6. В консоль выводится 'Promise resolve'
// 7. Callstack пуст, из очереди Callback queue выполняется setTimeout
// 8. В консоль выводится 'setTimeout'

// Результат:
// Promise
// End
// Promise resolve
// setTimeout
