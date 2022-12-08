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

const tasksList = document.querySelector('.tasks-list')

// Функция добавления задачи
function createTask(id, completed, text) {
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

// Модальное окно
document.body.insertAdjacentHTML(
  'afterbegin',
  `<div class="modal-overlay modal-overlay_hidden">
    <div class="delete-modal">
        <h3 class="delete-modal__question">
            Вы действительно хотите удалить эту задачу?
        </h3>
        <div class="delete-modal__buttons">
            <button class="delete-modal__button delete-modal__cancel-button">
                Отмена
            </button>
            <button class="delete-modal__button delete-modal__confirm-button">
                Удалить
            </button>
        </div>
    </div>
</div>`
)

const allDeleteButtons = document.querySelectorAll('.task-item__delete-button')
const modalOverlay = document.body.querySelector('.modal-overlay')
tasksList.addEventListener('click', event => {
  const isDeleteButton = event.target.closest('.task-item__delete-button')
  if (isDeleteButton) {
    // при нажатии на кнопку "Удалить" показываем модальное окно
    modalOverlay.classList.remove('modal-overlay_hidden')
    // при нажатии на кнопку "Отмена" скрываем модальное окно
    const deleteModalCancelButton = document.querySelector(
      '.delete-modal__cancel-button'
    )
    deleteModalCancelButton.addEventListener('click', event => {
      modalOverlay.classList.add('modal-overlay_hidden')
    })
    // при нажатии на кнопку "Удалить" в модальном окне удаляем задачу из DOM и из массива
    const deleteModalConfirmButton = document.querySelector(
      '.delete-modal__confirm-button'
    )
    deleteTaskId = isDeleteButton.dataset.deleteTaskId
    const taskToDelete = document.querySelector(
      `[data-task-id="${deleteTaskId}"]`
    )
    deleteModalConfirmButton.addEventListener('click', event => {
      // удаляем задачу из DOM
      taskToDelete.remove()
      // удаляем задачу из массива tasks
      const idInTasksArray = tasks.findIndex(task => task.id === deleteTaskId)
      if (idInTasksArray !== -1) {
        tasks.splice(idInTasksArray, 1)
      }
      // скрываем модальное окно
      modalOverlay.classList.add('modal-overlay_hidden')
      console.log(tasks)
    })
  }
})
