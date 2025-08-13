// # BOM

// => Browser Object Model ist eine Schnittstelle, die vom Browser bereit gestellt wird.
// => Wir können mit Ts mit dem Browserfenster und den Browserdaten integrieren

// ? Wondow.screen.height

console.log("Aktuelle Bildschirmhöhe in PX", window.screen.height)
console.log("Aktuelle Bildschirmbreite in PX", window.screen.width)

// ? Verfügbare Bildschirmgröße

console.log("Verfügbare Bildschirmhöhe in PX", window.screen.availHeight)
console.log("Verfügbare Bildschirmbreite in PX", window.screen.availWidth)

// ? Farbtiefe

console.log(`Farbtiefe`, window.screen.colorDepth)

// Browserfenster selbst
console.log("Innere Höhe des Browserfensters", window.innerHeight)
console.log("Innere breite des Browserfensters", window.innerWidth)

// ? Eventlistener, wie sich die größe des Fensters ändert
window.addEventListener("resize", () => {
  console.log(`Fenstergröße wurde geändert auf ${window.innerWidth} ${window.innerHeight}`)
})

// # Info zur aktuellen URL
console.log(window.location.href)
console.log("Port:", window.location.port)

// ? Verlauf der Aufrufe => window.history

console.log("Länge der History", window.history.length)

// Seite zurück navigieren
document.getElementById("back-button")?.addEventListener("click", () => {
  window.history.back()
})

// Seite reloaden
document.getElementById("reload")?.addEventListener("click", () => {
  window.location.reload()
})
// zu Seite umleiten/öffnen
document.getElementById("open")?.addEventListener("click", () => {
  window.open("http://app.reportcube.de/", "_blank")
})

// # Ich kann auch die Info bekommen, welchen Browser User gerade nutzt
console.log("Browser INFO", window.navigator.userAgent)

if (window.navigator.userAgent.includes("Chrome")) {
  console.log("Du bist cool")
} else {
  console.log("Brother awwwww")
}

// ? Welche Browsersprache ist eingestellt
console.log(window.navigator.language)

if (window.navigator.language.startsWith("de")) {
  console.log("Deutsche sprache schwere Sprache")
}

// ? Normale oder klassische function
// function greetToUser(): void{}

// ?

const greetToUser = (): void => {
  const languageBrowser = window.navigator.language

  switch (languageBrowser) {
    case "de-DE":
      console.log("Hallo guten Morgen")
      break
    case "en-US":
      console.log("Hello good morning")
      break
    default:
      console.log("Irgendwas stimmt nicht")
      break
  }
}

greetToUser()

console.log("IsOnline", window.navigator.onLine)

// # Cookies

if (window.navigator.cookieEnabled) {
  console.log("Cookies sind aktiv")
} else {
  console.log("Cookies wurden blockiert")
}

document.cookie = "username=joedoe"

// => JSON.parse & JSON.stringify =====

// JSON ist ein leichtes Datenformat, das hauptsächlich zum Austausch von Daten zwischen Server und Client verwendet wird.
// kann leicht auch von verschiedenen Sprachen vearbeitet werden.
// JSON => JavaScript Object Notation

// JSON.stringify => nimmt ein JS-Object und wandelt es in einen JSONString um
const user = {
  email: "andre@gmail.de",
  password: "123456",
}

console.log(user)

// ! um im Local Storage speichern zu können, müssen wir das User Obj unbedingt in das JSON Format umwandeln
// => Div Tools (Untersuchen), Application, Local Storage
const objToJSON = JSON.stringify(user)

console.log(objToJSON)

localStorage.setItem("currentUser", objToJSON)

// JSON.parse zurückumwandeln in ein Object

const userFromLocalStorage = localStorage.getItem("currentUser")

console.log(userFromLocalStorage)

if (userFromLocalStorage) {
  const stringToObj = JSON.parse(userFromLocalStorage)
  console.log(stringToObj)
}

const langSettings = {
  language: "German",
  subTitles: "English",
}

console.log(langSettings)

const objToJSON2 = JSON.stringify(langSettings)
console.log(objToJSON2)

localStorage.setItem("languageSetting", objToJSON2)

// => ICE CREAM EXAMPLE
const iceCreamFlavorsArr = [
  {
    name: "Vanilla",
    price: 2.5,
    isPopular: true,
  },
  {
    name: "Chocolate",
    price: 3.0,
    isPopular: true,
  },
  {
    name: "Strawberry",
    price: 2.8,
    isPopular: false,
  },
  {
    name: "Mint Chocolate Chip",
    price: 3.2,
    isPopular: true,
  },
  {
    name: "Cookie Dough",
    price: 3.5,
    isPopular: false,
  },
]

const myArrayToJSON = JSON.stringify(iceCreamFlavorsArr)
console.log(iceCreamFlavorsArr)
console.log(myArrayToJSON)

localStorage.setItem("iceCreamSorten", myArrayToJSON)

// # ==== try catch ====

// für Fälle, in denen ich nicht genau weiß was zurückkommt oder ob ein Fehler auftreten wird, arbeite ich mit try catch block
// das wäre wie ein Sicherheitsnetz, dass ich in meinem Code spanne.
// sprich mit try-catch kann man Code Abschnitte umschließen, die pontiell fehlerhaften Code enthalten

const myInput = document.getElementById("someI") as HTMLInputElement

try {
  console.log(myInput.value)
} catch (error) {
  console.error("Wir haben den fehler abgefangen", error)
  const errorMessage = (error as Error).message
  console.log(errorMessage)
  const myParagraph = document.createElement("p") as HTMLParagraphElement
  myParagraph.innerText = errorMessage
  document.body.appendChild(myParagraph)
}

// # throw new Error
const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Division by 0 is not allowed")
  }
  return a / b
}

console.log(divide(10, 0))
