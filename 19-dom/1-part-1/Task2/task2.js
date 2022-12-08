const tasks = [
  {
    id: '1138465078061',
    completed: false,
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

function createTask(id, text) {
  const tasksList = document.querySelector('.tasks-list')
  const newTaskItem = document.createElement('div')
  newTaskItem.className = 'task-item'
  newTaskItem.dataset.taskId = id
  const mainContainer = document.createElement('div')
  mainContainer.className = 'task-item__main-container'
  newTaskItem.append(mainContainer)
  const mainContent = document.createElement('div')
  mainContent.className = 'task-item__main-content'
  mainContainer.append(mainContent)
  const checkboxForm = document.createElement('form')
  checkboxForm.className = 'checkbox-form'
  mainContent.append(checkboxForm)
  const checkbox = document.createElement('input')
  checkbox.className = 'checkbox-form__checkbox'
  checkbox.type = 'checkbox'
  checkbox.id = `task-${id}`
  checkboxForm.append(checkbox)
  const label = document.createElement('label')
  label.htmlFor = `task-${id}`
  checkboxForm.append(label)
  const span = document.createElement('span')
  span.className = 'task-item__text'
  span.textContent = text
  mainContent.append(span)
  const deleteButton = document.createElement('button')
  deleteButton.className =
    'task-item__delete-button default-button delete-button'
  deleteButton.dataset.deleteTaskId = id
  deleteButton.textContent = 'Удалить'
  mainContainer.append(deleteButton)
  tasksList.append(newTaskItem)
}

tasks.forEach(task => {
  createTask(task.id, task.text)
})
