const users = [
  {
    username: 'David',
    status: 'online',
    lastActivity: 10,
  },
  {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22,
  },
  {
    username: 'Bob',
    status: 'online',
    lastActivity: 104,
  },
]

const onlineUsers = users.filter(user => user.status === 'online')

let usersOnlineNames = []
onlineUsers.forEach(user => usersOnlineNames.push(user.username))
usersOnlineNames = usersOnlineNames.join(', ')
// P.S. Object.values проходили позже

alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`)
