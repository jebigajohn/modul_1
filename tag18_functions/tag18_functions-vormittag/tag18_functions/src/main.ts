import "./style.css"
import typescriptLogo from "./typescript.svg"
import viteLogo from "/vite.svg"
// import { setupCounter } from "./counter.ts"

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!)

// Funktionsdeklaration, da mit function Keyword am Anfang der Zeile definiert

// * Deklarierte Funktionen dürfen auch in Zeilen vor ihrer Deklaration aufgerufen werden
// * Das nennt sich "Hoisting"
printMessages()

function printMessages(): void {
  // * Dinge die während Funktionsausführung passieren und mit der Außenwelt interagieren
  // * => Seiteneffekte / Side effects
  console.log("Guten Morgen")
  console.log("Guten Mittag")
  console.log("Guten Abend")
}

function addTwenty(num: number): number {
  return num + 20
}

addTwenty(20) // hier soll 40
addTwenty(100) // und hier soll 120 rauskommen

// Soll bis zu 5 Zahlen addieren
// * mit dem gleichzeichen nach dem parametertyp können wir einen defaultwert für diesen Paramter festlegen
// * in diesem Beispiel werden zahlen nicht übergeben, werden sie = 0 übergeben
function addABunchOfNumbers(num1: number, num2: number = 0, num3: number = 0, num4: number = 0, num5: number = 0) {
  return num1 + num2 + num3 + num4 + num5
}

addABunchOfNumbers(10, 30, 20) // => 60
addABunchOfNumbers(10, 30, 20, 4)
addABunchOfNumbers(10, 30, 20, 5, 6)

// * mit ? können wir ausdrücken, dass ein bestimmter Wert nicht übergeben werden muss.
// * er darf also undefined sein
// * das "wirkt" nur bei den Parametern am ende einer
function getGreetingMessage(name: string, customGreeting?: string) {
  const greeting = customGreeting || "Hallo"
  return greeting + name
}

getGreetingMessage("John")
getGreetingMessage("John", "Guten Abend")

const getMehrwertsteuer = function (wert: number, steurSatz: number = 19) {
  return (wert / 100) * steurSatz
}

console.log(getMehrwertsteuer(200, 7)) // 14

const steuerSatzMarried = 0.3
const steuerSatzUnmarried = 0.35

function calculateEinkommssteuer(einkommen: number, isMarried: boolean): number {
  let steuerSatz: number
  if (isMarried) {
    //? wir sind hier in einem Codeblock der ein Child-scope von calculateEinkommenssteuer ist,
    //? haben also zugriff auf variablen die dort definiert wurden
    let kinder = 4
    steuerSatz = steuerSatzMarried
  } else {
    steuerSatz = steuerSatzUnmarried
  }
  return einkommen * steuerSatz
}

//! Das hier geht nicht, da steuerSatz im Scope der Funktioniert definiert wurde
// console.log(steuerSatz);

console.log("Steuern für 30000, unverheiratet: ", calculateEinkommssteuer(30000, false))
console.log("Steuern für 40000, verheiratet: ", calculateEinkommssteuer(40000, true))
