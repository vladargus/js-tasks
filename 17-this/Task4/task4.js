const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,
  checkChancesToWin(defenderObject) {
    let chances = 0
    const attackerArmy = Object.values(this).filter(el => !isNaN(el))
    const defenderArmy = Object.values(defenderObject).filter(el => !isNaN(el))
    attackerArmy.forEach(el => {
      if (el > defenderArmy[attackerArmy.indexOf(el)]) {
        chances++
      }
    })
    return [chances, Object.keys(defenderObject).length]
  },
  improveArmy() {
    for (const key in this) {
      if (!isNaN(this[key])) {
        this[key] += 5
      }
    }
  },
  attack(defenderObject) {
    let [ourArmyChances, maximumChances] =
      this.checkChancesToWin(defenderObject)
    if (ourArmyChances < maximumChances * 0.7) {
      this.improveArmy()
      alert(
        `Наши шансы равны ${ourArmyChances}/${maximumChances}. Необходимо укрепление!`
      )
    } else {
      alert('Мы усилились! Мы несомненно победим! Наши шансы высоки!')
    }
  },
}

const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10,
}

attacker.attack(defender) // Наши шансы равны 1/4. Необходимо укрепление!
attacker.attack(defender) // Наши шансы равны 2/4. Необходимо укрепление!
attacker.attack(defender) // Мы усилились! Мы несомненно победим! Наши шансы высоки!
