function meineFunktion() {
  const input = document.getElementById("baujahr")
  const ergebnis = document.getElementById("ergebnis")
  const geburtsjahr = Number(input.value)
  const aktuellesJahr = new Date().getFullYear()
  const alter = aktuellesJahr - geburtsjahr

  ergebnis.textContent = alter
}
