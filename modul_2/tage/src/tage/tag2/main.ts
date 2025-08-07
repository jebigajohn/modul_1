const item1: string = "Tomatensuppe"
const item2: string = "Zwiebelsuppe"

// * Arrays sind Listen aus anderen Werten. Sie werden mit [] gebildet, die einzelnen Werte werden durch Kommas getrennt
// * Aus JS Sicht, dürfen die Werte unterschiedliche Typen haben
const einkaufsListe = ["Tomatensuppe", "Zwiebelsuppe", "Gemüsebrühe", "Pilzsuppe"]
// Andere Möglichkeiten Notation für den Typ: Array<string> (Array aus strings)

//* Mit .length können wir auf die Zahl der Elemente im Array zugreifen
einkaufsListe.length // => 4

// Mit .push können wir neue Einträge an das Ende des Arrays anfügen. Der alte Array selbst wird dabei verändert.
// Als Rückgabewert erhalten wir die neue Länge des Arrays.
einkaufsListe.push("Vogelfutter")

// Wir können auch mehrere Werte aufeinmal pushen
einkaufsListe.push("Erbseneintopf", "Kartoffelsuppe")

// Mit .pop können wir den letzten Eintrag des Arrays "platzen lassen" - wir bekommen seinen Inhalt als Rückgabewert, und er wird aus dem Array entfernt
einkaufsListe.pop()

// * Da wir den Wert zurückgeben bekommen, können wir ihn z.B. in der Konsole loggen.
console.log(einkaufsListe.pop())

const lastItem = einkaufsListe.pop()

// * .shift entspricht .pop, agiert aber auf dem ersten Element des Arrays, und entfernt dieses (und gibt dieses zurück)
einkaufsListe.shift()

// * .unshift entspricht .push, und fügt ein Element zum Anfang des Arrays hinzu
// * Wie auch .push, gibt es die neue Länge des Arrays zurück
einkaufsListe.unshift("Tofu")

// * Mit eckigen Klammern und dem gewünschten Index, können wir auf beliebige Element Werte des Arrays zugreifen
console.log(einkaufsListe[2]) // =>  Element mit Index 2, "Gemüsebrühe"

// * Wir können diese Syntax auch nutzen um den Array zu verändern
einkaufsListe[1] = "Knoblauchsuppe" // Das Element mit Index 1 ist von nun an "Knoblauchsuppe"

console.log(einkaufsListe)

// # SLICE

const animals = ["ant", "bison", "camel", "duck", "elephant"]

console.log(animals.slice(2))
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4))
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5))
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2))
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1))
// Expected output: Array ["camel", "duck"]

console.log(animals.slice())
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// # SPLICE
// * Mit Splice können wir an beliebigen Stellen im Array Elemente hinzufügen und/oder bestehende überschreiben oder löschen

const months = ["Jan", "March", "April", "June"]
months.splice(1, 2, "Feb")

months.splice(4, 1, "June", "July", "August")
console.log(months)

//* .reverse => Überraschung, der Array wird umgedreht
// Obacht, auch hier wird der Array mutiert
const numbers: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
numbers.reverse()
console.log(numbers)

// * Um .reverse auf einen String anwenden zu können, müssen wir diesen erst zu einem Array umwandeln
// * bzw. aufspalten, dann umdrehen, und dann wieder zusammenführen
const string = "nafetS"
const characters = string.split("")
characters.reverse()
const reversedString = characters.join("")
console.log(characters)
console.log(reversedString)

//* .sort
// sort sortiert arrays, und mutiert diese dabei
// wir können sort eine custom Sortierfunktion übergeben, ansonsten wird alphabetisch sortiert
// Ja, auch bei Zahlen

const monthsAgain = ["March", "Jan", "Feb", "Dec"]
months.sort() //=> ["Dec", "Feb", "Jan", "March"]

// Aber:

const numbersAgain = [11, 2, 1, 0, 9]
numbersAgain.sort() // => [0,1,11,2,9]
// ! Bald lernen wir, wie wir das Sortierverhalten konfigurieren können

// * Arrays kombinieren
const obst = ["Blaubeeren", "Birnen", "Melone", "Mango", "Himbeeren"]
const gemüse = ["Brokkoli", "Lauch", "Möhren", "Spinat"]

// *concat kombiniert Arrays (beliebig viele)
const combinedArray = obst.concat(gemüse)
console.log(combinedArray)

const combinedArray2 = [...obst, ...gemüse]
console.log(combinedArray2)

// das hier ist keine echte Kopiem beide Variablen verweisen auf den gleichen Speicher
// d.h. wenn ich naiveObstKopie veränderem ändert sich auch der Wert hinter obst
const naiveObstKopie = obst

// das hier ist eine echte Kopie, kann getrennt vom Original mutiert werden
const obstKopie = [...obst]
// andere Möglichkeiten:
const obstKopie2 = obst.concat()

//* Higher Order Functions

// * .forEach
// Wir können forEach auf jedem Array aufrufen, und ihm eine Funktion als Argument übergeben
// Diese Funktion wird
