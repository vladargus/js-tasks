const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'

function createPostElement(postTitle, postText) {
  return `<div id="post" class="post">
  <h1 class="post__title">${postTitle}</h1>
  <p class="post__text">${postText}</p>
  <b class="post__comments-text">Комментарии</b>
  <div class="post__comments">
  </div>
</div>`
}

function createCommentElement(commentAuthor, commmentText) {
  return `<div class="post-comment">
      <span class="post-comment__author">${commentAuthor}</span>
      <span class="post-comment__text">
        ${commmentText}
      </span>
    </div>`
}

async function renderPost(postId) {
  try {
    const postResponse = await fetch(`${POSTS_URL}/${postId}`)
    if (!postResponse.ok) {
      throw new Error('Ошибка в получении данных о посте')
    }
    const post = await postResponse.json()
    document.body.insertAdjacentHTML(
      'beforeend',
      createPostElement(post.title, post.body)
    )
    const commentsResponse = await fetch(`${COMMENTS_URL}?postId=${postId}`)
    if (!commentsResponse.ok) {
      throw new Error('Ошибка в получении данных о комментариях')
    }
    const comments = await commentsResponse.json()
    comments.forEach(comment => {
      const commentsHTML = document.querySelector('.post__comments')
      commentsHTML.insertAdjacentHTML(
        'beforeend',
        createCommentElement(comment.email, comment.body)
      )
    })
  } catch (error) {
    console.error(error)
  }
}

renderPost(1)
