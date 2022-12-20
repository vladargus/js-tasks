const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums'
const dataContainer = document.querySelector('.data-container')

// создание HTML-элемента альбома
function createAlbumElement(text) {
  const albumElement = document.createElement('li')
  albumElement.textContent = text

  return albumElement
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

// рендер всех альбомов в HTML
const renderAlbums = async () => {
  try {
    toggleLoader()
    const response = await fetch(ALBUMS_URL)
    if (!response.ok) {
      throw new Error('Произошла ошибка в получении данных об альбомах...')
    }
    const albums = await response.json()
    albums.forEach(album => {
      const albumHTML = createAlbumElement(album.title)
      dataContainer.append(albumHTML)
    })
  } catch (error) {
    dataContainer.textContent = error
  } finally {
    toggleLoader()
  }
}
renderAlbums()
