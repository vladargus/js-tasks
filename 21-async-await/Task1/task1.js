// then, catch, finally

// const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'
// let isLoading = false
// const createNewPost = () => {
//   isLoading = true
//   fetch(POSTS_URL, {
//     method: 'POST',
//   })
//     .then(response => response.json())
//     .then(result => {
//       console.log('result', result)
//     })
//     .catch(error => {
//       console.log('error', error)
//     })
//     .finally(() => {
//       isLoading = false
//     })
// }
// createNewPost()

// async, await, try, catch, finally

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'
let isLoading = false
const createNewPost = async () => {
  try {
    isLoading = true
    const response = await fetch(POSTS_URL, {
      method: 'POST',
    })
    if (!response.ok) {
      throw new Error('Ошибка получения данных о постах')
    }
    const result = await response.json()
    console.log('result', result) // result {id: 101}
  } catch (error) {
    console.log(error)
  } finally {
    isLoading = false
  }
}
createNewPost()
