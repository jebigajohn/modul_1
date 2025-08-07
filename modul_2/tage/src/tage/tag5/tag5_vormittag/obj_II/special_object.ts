// Das ist ein string Array

const cocktails: string[] = ["Pina Colada", "Mojito", "Long Island Ice Tea", "Mojito", "Cuba Libre", "Pina Colada"]

console.log(cocktails.length)

// Set verhält sich irgendwie wie Array, lässt aber nur eindeutigen Werte zu
// Dazu kommen einigen Methoden und zwar add, size usw...

// * Set Methode

const cocktailWithSet = new Set<string>()

// $ add
cocktailWithSet.add("Pina Colada")
cocktailWithSet.add("Mojito")
cocktailWithSet.add("Long Island Ice Tea")

console.log(cocktailWithSet)

// ! Kein Indexzugriff möglich
// console.log(cocktailWithSet[0]);

// $ size
console.log(cocktailWithSet.size)

// $ has
if (cocktailWithSet.has("Mojito")) {
  console.log("Es gibt Mojito auf der Karte")
}

const kostenMitSetMethode = new Set<number>()
kostenMitSetMethode.add(100)
kostenMitSetMethode.add(22)
kostenMitSetMethode.add(4)
kostenMitSetMethode.add(320)

console.log(kostenMitSetMethode)

// Es gibt eine kleine Gemeinsamkeit zwischen Array uns Set Methode => forEach()

kostenMitSetMethode.forEach((number: number) => {
  console.log(number)
})

const setA = new Set([1, 3, 7])
const setB = new Set([3, 6, 9])

const union = new Set([...setA, ...setB])
// ! Set ist eine super Möglichkeit, um doppelte Werte in einem Array zu entfernen

console.log(union)

const clearCockTailVariable = new Set(cocktails)
console.log(clearCockTailVariable)

// ! V1.
const meinArrayVomCocktailsSet = [...clearCockTailVariable]
console.log(meinArrayVomCocktailsSet)

// ! V2.

// ? dann wandle ich das Set wieder in ein Array um
// ? das kann ich mit Array.from machen

const myArrayVomCocktailSetVarianteZwei = Array.from(clearCockTailVariable)
console.log(myArrayVomCocktailSetVarianteZwei)

// * Map Methode ist ein spezielles object, dass man wie ein Nachschlagewerk oder Lexion sehen kann

// wenn ich mit Map arbeite dann soll ich deren Methode demenstprechend benutzen
// => set, get

const germanEnglishDictionary = new Map<string, string>()

// ! Bsp1

// * set kann ich einzelnes Einträge im Wörterbuch anlegen
//                            key    value
germanEnglishDictionary.set("Tier", "Animal")
germanEnglishDictionary.set("froh", "happy")
germanEnglishDictionary.set("Montag", "Monday")

console.log(germanEnglishDictionary)

germanEnglishDictionary.forEach((value, key) => {
  console.log(`${key} heißt übersetzt ${value}`)
})

// * get
// mit get kann ich mit einen Wert aus der Variable germanEnglishDictionary herausholen

console.log(germanEnglishDictionary.get("Tier"))

// ! Bsp2

const italianMenu = new Map<number, string>()
console.log(italianMenu)
italianMenu.set(20.0, "Pizza Margherita")
italianMenu.set(14.0, "Pizza Funghi")
italianMenu.set(7.0, "Bruscetta")

console.log(italianMenu)

console.log(italianMenu.get(14.0))

// ! Bsp3

const iceMenu = new Map<number, string>()
iceMenu.set(10, "Himbeere")
iceMenu.set(11, "Erdbeere")
iceMenu.set(12, "Mandel")

console.log(iceMenu)

// ! Bsp4

const iceMenu2 = new Map<number, string>()

const flavors = ["Himbeere", "Erdbeere", "Mandel"]

flavors.forEach((flavor, index) => {
  iceMenu2.set(index, flavor)
})

console.log(iceMenu2)

// * Tuple => eingeschränktes Array mit verschieden Datentypen

const customer5: [string, number, number] = ["Annie", 22, 1.73]

// ? leider kann ich mit push weitere Elemente zum Tuple hinzufügen, obwohl ich oben gesagt habe,
// ? dass das Tuple nur aus drei Werten besteht. Das ist ein großer Nachteil des Tuples.

customer5[0] = "Lisa"
customer5[1] = 21314

// ! für unseren Fall wäre es besser einen Type anzulegen, der hat festgelegte, eindeutig benannte Eigenschaften
type TSimplePerson = {
  name: string
  age: number
  height: number
}

const person: TSimplePerson = {
  name: "Annie",
  age: 22,
  height: 1.73,
}

console.log(person)
