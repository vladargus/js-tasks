const myName = 'Влад Ямалиев'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Владилен Минин'
const reasonText = 'хочу изменить свою жизнь к лучшему'
const numberOfMonth = '1'

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} у ${courseCreatorName.replace(
  'Владилен Минин',
  'Владилена Минина'
)}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяц. Я уверен, что пройду данный курс до конца!`

myInfoText = myInfoText.replaceAll(
  programmingLanguage,
  programmingLanguage.toLowerCase()
)
myInfoText = myInfoText.replaceAll('курс', 'КУРС')

console.log(myInfoText)
console.log(myInfoText.length)
console.log(myInfoText[0], myInfoText[myInfoText.length - 1])
