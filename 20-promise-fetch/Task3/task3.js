const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos'
const dataContainer = document.querySelector('#data-container')

// создание HTML-элемента фото
function createPhotoElement(url, title) {
  return `<li class="photo-item">
            <img class="photo-item__image" src="${url}">
            <h3 class="photo-item__title">
              ${title}
            </h3>
          </li>`
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

// вывод в HTML первого загруженного фото
function getFastestLoadedPhoto(ids) {
  toggleLoader()
  const requests = ids.map(id => fetch(`${PHOTOS_URL}/${id}`))
  Promise.all(requests)
    .then(responses => {
      const dataResults = responses.map(response => {
        if (!response.ok) {
          throw new Error('Ошибка запроса')
        }
        return response.json()
      })
      return Promise.race(dataResults)
    })
    .then(photo => {
      const photoHTML = createPhotoElement(photo.url, photo.title)
      dataContainer.insertAdjacentHTML('beforeend', photoHTML)
    })
    .catch(console.error)
    .finally(() => {
      toggleLoader()
    })
}

getFastestLoadedPhoto([60, 12, 55])
