function bewertungBerechnen(punkte: number[]): string {
  // Durchschnitt berechnen
  const summe = punkte.reduce((acc, curr) => acc + curr, 0)
  const durchschnitt = summe / punkte.length

  // Bewertung basierend auf Durchschnitt
  if (durchschnitt < 50) return "Ungenügend"
  else if (durchschnitt < 60) return "Mangelhaft"
  else if (durchschnitt < 70) return "Ausreichend"
  else if (durchschnitt < 80) return "Befriedigend"
  else if (durchschnitt < 90) return "Gut"
  else return "Sehr gut"
}

const noten1 = [44, 11, 70, 80, 52, 88, 42, 3, 25, 46]
const noten2 = [91, 95, 89, 93, 87]
const noten3 = [55, 58, 52, 54]
const noten4 = [65, 60, 68, 62, 66]
const noten5 = [83, 86, 82, 82, 76]
const noten6 = [77, 76, 72, 72, 76]

console.log(bewertungBerechnen(noten1)) // → Ungenügend
console.log(bewertungBerechnen(noten2)) // → Sehr gut
console.log(bewertungBerechnen(noten3)) // → Mangelhaft
console.log(bewertungBerechnen(noten4)) // → Ausreichend
console.log(bewertungBerechnen(noten5)) // → Gut
console.log(bewertungBerechnen(noten6)) // → Befriedigend
