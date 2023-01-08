import './index.css'
import MY_IMAGE from './assets/javascript.png'

console.log('Hello World!')

const header = document.createElement('h1')
header.className = 'header'
header.innerText = 'I love JavaScript'
document.body.append(header)

const img = document.createElement('img')
img.className = 'my-image'
img.src = MY_IMAGE
document.body.append(img)
