const oldPainters = ["Caspar David Friedrich", "Mary Cassatt", "Rosa Bonheur", "Francisco de Goya", "Édouard Manet"]

const newerPainters = ["Pablo Picasso", "Salvador Dalí", "Frida Kahlo", "Georgia O'Keeffe"]

const femalePaintersConcat = ["Mary Cassatt", "Rosa Bonheur"].concat(["Frida Kahlo", "Georgia O'Keeffe"])

const femalePaintersSpread = [..."Mary Cassatt,Rosa Bonheur".split(","), ..."Frida Kahlo,Georgia O'Keeffe".split(",")]

const malePaintersConcat = ["Caspar David Friedrich", "Francisco de Goya", "Édouard Manet"].concat([
  "Pablo Picasso",
  "Salvador Dalí",
])

const malePaintersSpread = [
  ..."Caspar David Friedrich,Francisco de Goya,Édouard Manet".split(","),
  ..."Pablo Picasso,Salvador Dalí".split(","),
]

console.log("femalePainters (concat):", femalePaintersConcat)
console.log("femalePainters (spread):", femalePaintersSpread)
console.log("malePainters (concat):", malePaintersConcat)
console.log("malePainters (spread):", malePaintersSpread)
