function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function showMessage(name, health) {
  alert(`${name} победил! У него осталось ${health} здоровья`)
}

function startGame(heroPlayer, enemyPlayer) {
  while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
    const move = getRandomNumberInRange(0, 1)
    move ? enemyPlayer.hitHero(heroPlayer) : heroPlayer.hitEnemy(enemyPlayer)
  }
  heroPlayer.health <= 0
    ? showMessage(enemyPlayer.name, enemyPlayer.health)
    : showMessage(heroPlayer.name, heroPlayer.health)
}

const hero = {
  name: 'Batman',
  health: 100,
  hitEnemy(enemy) {
    enemy.health -= 10
  },
}
const enemy = {
  name: 'Joker',
  health: 100,
  hitHero(hero) {
    hero.health -= 10
  },
}

startGame(hero, enemy)
