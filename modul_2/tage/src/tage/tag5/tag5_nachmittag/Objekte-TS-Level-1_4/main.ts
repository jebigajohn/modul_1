type Pet = {
  tiertyp: string
  namen: string[]
}

const unsereHaustiere: Pet[] = [
  {
    tiertyp: "Katze",
    namen: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    namen: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
]

console.log(unsereHaustiere[0].namen[1]) // "Nala"
console.log(unsereHaustiere[1].namen[2]) // "Droopy"

console.log(unsereHaustiere[0].namen)
console.log(unsereHaustiere[1].namen)

unsereHaustiere[0].namen[2] = "Pinky" // Dinky → Pinky
unsereHaustiere[1].namen[2] = "Snoppy" // Droopy → Snoppy

console.log(unsereHaustiere[0].namen)
console.log(unsereHaustiere[1].namen)

const Hamster: Pet[] = [
  {
    tiertyp: "Hamster",
    namen: ["Tick", "Trick", "Track"],
  },
]

unsereHaustiere.push(Hamster[0])

console.log(unsereHaustiere)
