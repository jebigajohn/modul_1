function myAge(birthYear: Date): number {
  const heute = new Date()
  const geburtsJahr = birthYear.getFullYear()
  const aktuellesJahr = heute.getFullYear()
  let alter = aktuellesJahr - geburtsJahr
  return alter
}

console.log(myAge(new Date("1996-08-05")))

function alterVergleichen(meinAlter: number, anderesAlter: number): number {
  const altersDifferenz = Math.abs(meinAlter - anderesAlter)
  return altersDifferenz
}

const differenz = alterVergleichen(29, 34)

console.log(differenz)
