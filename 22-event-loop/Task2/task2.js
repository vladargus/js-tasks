function runCode() {
  console.log('before promise')
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Zero Promise')
      resolve()
    }, 0)
  })
}
setTimeout(() => {
  console.log('Zero')
}, 0)
runCode().then(() => console.log('Zero Promise Invoked'))
console.log('One')

// 1. setTimeout('Zero') попадает в очередь Callback queue
// 2. Вызывается функция runCode()
// 3. В консоль выводится 'before promise'
// 4. Выполняется код внутри промиса
// 5. setTimeout из промиса попадает в очередь Callback queue
// 6. Макрозадача выполняется дальше, в консоль выводится 'One'
// 7. Из очереди Callback queue выходит setTimeout('Zero'), т.к. он первый попал в очередь, в консоль выводится 'Zero'
// 8. Из очереди Callback queue выходит setTimeout из промиса, в консоль выводится 'Zero Promise'
// 9. Срабатывает resolve() и вызывается колбэк метода then, выводя в консоль 'Zero Promise Invoked'

// Результат:
// before promise
// One
// Zero
// Zero Promise
// Zero Promise Invoked
