function meineFunktion() {
  const input = document.getElementById("baujahr")

  const geburtsjahr = Number(input.value)
  const aktuellesJahr = new Date().getFullYear()
  const alter = aktuellesJahr - geburtsjahr

  const input2 = document.getElementById("baujahr2")
  const geburtsjahr2 = Number(input2.value)
  const aktuellesJahr2 = new Date().getFullYear()
  const alter2 = aktuellesJahr2 - geburtsjahr2

  const differenz = Math.abs(alter - alter2)

  const ergebnis = document.getElementById("ergebnis")

  ergebnis.textContent = differenz
}
