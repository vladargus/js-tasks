function getKiller(suspectInfo, deadPeople) {
  let killer = ''
  Object.entries(suspectInfo).forEach(([key, value]) => {
    if (deadPeople.every(person => value.includes(person))) {
      killer = key
    }
  })
  return killer
}

console.log(
  getKiller(
    {
      James: ['Jacob', 'Bill', 'Lucas'],
      Johnny: ['David', 'Kyle', 'Lucas'],
      Peter: ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill']
  )
) // Убийца James

console.log(
  getKiller(
    {
      Brad: [],
      Megan: ['Ben', 'Kevin'],
      Finn: [],
    },
    ['Ben']
  )
) // Убийца Megan
