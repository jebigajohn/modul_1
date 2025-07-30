function showHero(heroName: string, heroPower: string, heroEnemy: string): void {
  const nameOutput = `Mein:e Lieblingsheld:in ist: ${heroName}`
  const powerOutput = `Er:sie hat die Fähigkeit: ${heroPower}`
  const enemyOutput = `Sein:ihr größte:r Gegner:in ist: ${heroEnemy}`

  console.log(nameOutput)
  console.log(powerOutput)
  console.log(enemyOutput)
}

// Funktionsaufruf mit Argumenten
showHero("Batman", "Detektiv-Skills und Technik", "Joker")
