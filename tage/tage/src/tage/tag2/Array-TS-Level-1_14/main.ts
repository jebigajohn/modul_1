const oldHollywoodActors = [
  "Marlon Brando",
  "Audrey Hepburn",
  "Elizabeth Taylor",
  "Cary Grant",
  "Paul Newman",
  "Doris Day",
]

const actorsReference = oldHollywoodActors

console.log(actorsReference)

actorsReference.push("Marilyn Monroe")

const oldHollywoodActorsKopie = oldHollywoodActors.concat()

const oldHollywoodActorsSlice = oldHollywoodActors.slice(0, 7)

const oldHollywoodActorsSpread = [...oldHollywoodActors]

console.log("oldHollywoodActors:", oldHollywoodActors)
console.log("oldHollywoodActorsKopie - concat:", oldHollywoodActorsKopie)
console.log("oldHollywoodActorsSlice - slice:", oldHollywoodActorsSlice)
console.log("oldHollywoodActorsSpread- spread-operator:", oldHollywoodActorsSpread)

oldHollywoodActorsKopie.pop()
console.log("oldHollywoodActorsKopie - concat:", oldHollywoodActorsKopie)

oldHollywoodActorsSlice.unshift("Charlie Chaplin")
console.log("oldHollywoodActorsSlice - slice:", oldHollywoodActorsSlice)

oldHollywoodActorsSpread.shift()
console.log("oldHollywoodActorsSpread- spread-operator:", oldHollywoodActorsSpread)
