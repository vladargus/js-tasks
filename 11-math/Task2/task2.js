const questions = [
  '1. Сколько будет 2+2?',
  '2. Сколько будет 2*2?',
  '3. У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?',
  '4. У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?',
  '5. Сколько будет 2 + 2 * 2?',
]
const rightAnswers = [4, 4, 1, 12, 6]
const userAnswers = []

let correctAnswers = 0
let incorrectAnswers = 0

for (let i = 0; i < questions.length; i++) {
  userAnswers[i] = prompt(questions[i])
  if (Number(userAnswers[i]) === rightAnswers[i]) {
    alert('Ответ верный!')
    correctAnswers++
  } else {
    alert('Ответ неверный!')
    incorrectAnswers++
  }
}

alert(
  `Конец теста! Правильные ответы - ${correctAnswers}; неправильные ответы - ${incorrectAnswers}.`
)
