// Массив с имеющимися задачами
const tasks = [
  {
    id: '1138465078061',
    completed: true,
    text: 'Посмотреть новый урок по JavaScript',
  },
  {
    id: '1138465078062',
    completed: false,
    text: 'Выполнить тест после урока',
  },
  {
    id: '1138465078063',
    completed: false,
    text: 'Выполнить ДЗ после урока',
  },
]

// Функция добавления задачи
function createTask(id, completed, text) {
  const tasksList = document.querySelector('.tasks-list')
  tasksList.insertAdjacentHTML(
    'beforeend',
    `<div class="task-item" data-task-id="${id}">
    <div class="task-item__main-container">
        <div class="task-item__main-content">
            <form class="checkbox-form">
                <input class="checkbox-form__checkbox" type="checkbox" id="task-${id}" ${
      completed ? 'checked' : ''
    }>
                <label for="task-${id}"></label>
            </form>
            <span class="task-item__text">
                ${text}
            </span>
        </div>
        <button class="task-item__delete-button default-button delete-button" data-delete-task-id="${id}">
            Удалить
        </button>
    </div>
</div>`
  )
}

// Добавление имеющихся задач из массива
tasks.forEach(task => createTask(task.id, task.completed, task.text))

// Добавление новой задачи при отправке формы
const createTaskForm = document.querySelector('.create-task-block')
createTaskForm.addEventListener('submit', event => {
  event.preventDefault()
  const { target } = event
  const taskNameInput = target.taskName
  const inputValue = taskNameInput.value
  const errorMsg = document.createElement('span')
  errorMsg.className = 'error-message-block'
  const errorBlock = document.querySelector('.error-message-block')
  function removeError() {
    if (errorBlock) {
      errorBlock.remove()
    }
  }
  if (!inputValue) {
    // если форма была отправлена с пустым полем
    removeError()
    errorMsg.textContent = 'Название задачи не должно быть пустым.'
    createTaskForm.append(errorMsg)
  } else if (tasks.some(task => task.text === inputValue)) {
    // если задача с введенным в поле названием уже существует
    removeError()
    errorMsg.textContent = 'Задача с таким названием уже существует.'
    createTaskForm.append(errorMsg)
  } else {
    // если при отправке формы ошибок не было найдено
    removeError()
    const newId = Date.now()
    createTask(newId, false, inputValue)
    tasks.push({
      id: String(newId),
      completed: false,
      text: inputValue,
    })
    console.log(tasks)
  }
})
