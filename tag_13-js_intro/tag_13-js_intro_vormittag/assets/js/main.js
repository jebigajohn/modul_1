// # Dadurch testen wir ob unsere JS Datei erfolgreich eingebunden ist
// ? WAS IST console.log()
// * Damit können wir Sachen (texte bzw Variablen) in der Konsole ausgeben lassen will, das benutzen wir sehr oft wenn wir unseren Code debugen (testen) wollen

console.log("Die Verbindung ist da")

// # -------- VARIABLEN --------

// ! const => die Variablen sollten für Werte verwendet werden die sich nicht mehr verändern
// meinName = "joe" => main.js:12 Uncaught TypeError: Assignment to constant variable
const meinName = "John"

console.log(meinName)

// ! let => die Variablen werden für Werte verwendet, die sich später auch ändern können

let alter = 29
console.log(alter)

alter = 30
console.log(alter)

//  ! var => hat man vor ECMASscript 6 benutzt => benutzen wir aber NICHT mehr
// var street = "musterStraße"
// console.log(street)

// # ++++++ Datentypen +++++

// ! 1. string, number, boolean

// strings => Text der in Anführungszeichen steht
// z.B. ⤵️
console.log("Hallo ich bin ein string")

// ! 2. number => die Zahlen werden in der Konsole lila ausgegeben

const number1 = 17
console.log(number1)

console.log(number1 + 3)

// Sobald man einen string mit einer number kombiniert, wird am Ende ein string ausgegeben
console.log(number1 + "3")

// ! 3. boolean => gibt true/false bzw 0 oder 1, das können wir für Vergleiche benutzen

console.log(true)
console.log(false)

// ! Konventionen bei Variabelbennung
// ? Aussagekräftig sein
// ? nicht zu kurz und auch nicht zu lang
// ? Namen dürfen nicht mit Zahlen beginnen
// ? Keine Leerzeichen
// ? JS ist case-sensitive
// ❌ let 0_apfel =
// ❌ let kiwi apfel = 200
// ❌ let heiteisteinschönertag = true

// hier zwei verschiedene Variablen die einmal groß und einmal klein geschrieben wurden
// ⤵️ klein oder groß geschriebene Variabeln sind zwei verschiedene Variablen
let apfel = 15

console.log(apfel)

let Apfel = 20

console.log(Apfel)

// ! camelCase

let vorName = "joe"
let nachName = "doe"

console.log(vorName)
console.log(nachName)

// ! snake_case

let meine_erste_variable = "heute ist richtig warm"

console.log(meine_erste_variable)

// ! PascalCase

let MeineErsteVariable = "Andre sieht heute sehr schön aus"

console.log(MeineErsteVariable)

// ! Auf gar KEINEN FALL

// ❌ let $meineErsteVariable
// ❌ let meineerstevarbianle

// # ******** string miteinander verbinden *******

const firstName = "Marco"
const lastName = "Orlandi"

let city = "München"

const fullName = firstName + lastName

console.log(fullName)

// mehrere Textelemente miteinander Verbinden direkt in console.log()

// ! ACHTUNG => JS beachtet keine Zeilenumbrüche

console.log("Ich heiße " + firstName + " " + lastName + " " + "und ich wohne in " + city)

// Das können wir mit Anführungszeichen nicht kombinieren
// Template Literals => schreiben wir in die Backticks + $ + {}
// Hier werden Zeilenumbrüche, Leerzeichen und Einrückungen beachtet
// z.B. ⤵️
console.log(`ich bin ${firstName} ${lastName} und wohne in ${city}`)

// mit dem Zuweisungs Operator += können wir den Satz "hello wassup" nach dem Satz "hallo was geht" anhängen
let message = "hallo was geht"
message += "hello wassup"

console.log(message)

// ! ++++++ Arithmetische Operatoren

let x = 5
let y = 10
let z = 3

// Addition
console.log(x + y)

// Subtrahieren
console.log(y - z)

// Muliplikation
console.log(x * y)

// Division
console.log(y / 5)

// Modulo gibt Restwert zurück
console.log(y % 2)

let a = 1
// Wie können wir zur Variable x 1 addieren ?

const summe = x + 1

console.log(summe)

// Hier wird ebenfalls 1 addiert, dies ist aber eine kurze Schreibweise
a++
console.log(a)

let b = 10
b--
console.log(b)

// ! SEHR VERALTET
// ! Hier können wir Text in unser HTML einfügen
document.write("Hallo, heute ist sehr warm")

document.write("<h2> Ich bin eine Überschrift</h2>")

// Es öffnet sich ein Pop-Up Fenster, jedes mal wenn die Seite neu geladen wird
window.alert("irgendwas blabla")

// confirm => öffnet ein Dialog Pop-Up Fenster, mit der eingegebenen Nachricht und wartet darauf dass der Benutzer den Dialog bestätigt oder abbricht

let confirmElement = window.confirm("Stimmen sie den Cookies zu?")
console.log(confirmElement)

// wie deklarieren wir eine Variable richtig?

let myStreet = "musterStraße"

let myCity = "Berlin"

console.log(myStreet + " " + myCity)

let actor = "ben aflek"

console.log(`${actor} ist gerade in ${myCity}`)

myStreet = "sesamStaße"

console.log(myStreet)

const result = (myStreet += "10")

console.log(result)
