const woerter: string[] = [
  "Banane",
  "Kaktus",
  "Flausch",
  "Ente",
  "Apfel",
  "Auto",
  "Giraffe",
  "Schmetterling",
  "Krokodil",
  "Lampe",
]

function filterShortWords(arr: string[]): string[] {
  return arr.filter((word) => word.length <= 6)
}

function filterWordsWithE(arr: string[]): string[] {
  return arr.filter((word) => word.includes("e") || word.includes("E"))
}

console.log("Wörter mit maximal 6 Zeichen:", filterShortWords(woerter))
console.log("Wörter mit 'e' oder 'E':", filterWordsWithE(woerter))
