import './index.css'

const buttonHTML = document.querySelector('.cookie-consent__button')
const cookieConsentHTML = document.querySelector('.cookie-consent')

if (localStorage.getItem('cookiesAreAccepted') === 'true') {
  cookieConsentHTML.remove()
}

buttonHTML.addEventListener('click', () => {
  localStorage.setItem('cookiesAreAccepted', 'true')
  cookieConsentHTML.remove()
})
