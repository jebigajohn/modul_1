function meineFunktion() {
  const input = document.getElementById("double")
  const ergebnis = document.getElementById("ergebnis")
  const wert = Number(input.value)
  const verdoppelt = wert * 2

  ergebnis.textContent = verdoppelt
}
