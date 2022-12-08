const bodyElement = document.querySelector('body')

// Через innerHTML
/* bodyElement.innerHTML = `<form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form>` */

// Через document.createElement()
const newForm = document.createElement('form')
newForm.className = 'create-user-form'
bodyElement.append(newForm)

const newLabelName = document.createElement('label')
newLabelName.textContent = 'Имя'
newForm.append(newLabelName)

const newInputName = document.createElement('input')
newInputName.type = 'text'
newInputName.name = 'userName'
newInputName.placeholder = 'Введите ваше имя'
newLabelName.append(newInputName)

const newLabelPassword = document.createElement('label')
newLabelPassword.textContent = 'Пароль'
newForm.append(newLabelPassword)

const newInputPassword = document.createElement('input')
newInputPassword.type = 'password'
newInputPassword.name = 'password'
newInputPassword.placeholder = 'Придумайте Пароль'
newLabelPassword.append(newInputPassword)

const newButton = document.createElement('button')
newButton.type = 'submit'
newButton.textContent = 'Подтвердить'
newForm.append(newButton)
