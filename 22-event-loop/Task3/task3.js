const getData = callback => {
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(user => {
      console.log('Success')
      callback(user)
    })
    .catch(error => {
      console.log(error)
    })
}
getData(() => {
  console.log('user received')
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve('promise resolved')
    }, 500)
    console.log('in promise')
    setTimeout(() => {
      console.log('last set timeout')
    }, 400)
  })
  promise.then(result => {
    console.log(result)
  })
})
console.log('End')

// 1. Вызывается функция getData()
// 2. Её колбэки из метода then попадают в Microtask queue
// 3. Макрозадача выполняется дальше, в консоль выводится 'End'
// 4. Callstack пуст, выполняются микрозадачи из очереди Microtask queue
// 5. В консоль выводится 'Success'
// 6. Вызывается функция callback()
// 7. В консоль выводится 'user received'
// 8. Выполняется код внутри промиса
// 9. setTimeout(500) добавляется в очередь Callback queue
// 10. В консоль выводится 'in promise'
// 11. setTimeout(400) добавляется в очередь Callback queue
// 12. Callstack пуст, через 400 мс выполняется setTimeout(400) и в консоль выводится 'last set timeout'
// 13. По истечении 500 мс выполняется setTimeout(500) и вызывается resolve()
// 14. Вызывается колбэк метода then и в консоль выводится 'promise resolved'

// Результат:
// End
// Success
// user received
// in promise
// last set timeout
// promise resolved
