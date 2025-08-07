const bucketList = ["Japan", "Amerika", "Sibirien"]
const luckyNumbers = [23, 12, 48]
const favoritePeople = ["Pipit", "Nina", "Johann", "Kasmuri"]

console.log(bucketList)
console.log(luckyNumbers)
luckyNumbers.length
console.log(favoritePeople)

let lastValue = favoritePeople.shift()

console.log(lastValue)

console.log(favoritePeople)

bucketList.unshift("Südafrika", "Finnland")

console.log(bucketList)
