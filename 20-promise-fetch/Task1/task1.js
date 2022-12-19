const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const dataContainer = document.querySelector('#data-container')

// создание HTML-элемента пользователя
function createUserElement(text) {
  const userElement = document.createElement('li')
  const userElementLink = document.createElement('a')
  userElementLink.href = '#'
  userElementLink.textContent = text
  userElement.append(userElementLink)

  return userElement
}

// создание лоадера
function toggleLoader() {
  const loaderHTML = document.querySelector('#loader')
  const isHidden = loaderHTML.hasAttribute('hidden')
  if (isHidden) {
    loaderHTML.removeAttribute('hidden')
  } else {
    loaderHTML.setAttribute('hidden', '')
  }
}

// вывод всех юзеров в HTML
function getAllUsers() {
  toggleLoader()
  fetch(USERS_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка запроса')
      }
      return response.json()
    })
    .then(users => {
      users.forEach(user => {
        const userHTML = createUserElement(user.name)
        dataContainer.append(userHTML)
      })
    })
    .catch(console.error)
    .finally(() => {
      toggleLoader()
    })
}

getAllUsers()
