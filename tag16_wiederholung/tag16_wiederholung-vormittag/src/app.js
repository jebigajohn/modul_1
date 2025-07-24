// # Wiederholung

// ? odd or even

let zahl = 7

// Wir benötigen den Operator "%" modulo um

if (zahl % 2 === 0) {
  console.log("Die Zahl ist gerade")
} else {
  console.log("Die Zahl ist ungerade")
}

switch (true) {
  case zahl % 2 === 0:
    console.log("Die Zahl ist gerade")
    break
  case zahl % 2 !== 0:
    console.log("Die Zahl ist ungerade")
    break
  default:
    console.log("ungültige Zahl")
}

// !V2.

switch (zahl % 2) {
  case 0:
    console.log("Die Zahl ist gerade")
    break
  default:
    console.log("Die Zahl ist ungerade")
}

zahl % 2 === 0 ? console.log("Die Zahl ist gerade") : console.log("Die Zahl ist ungerade")

const result = zahl % 2 === 0 ? "Die Zahl ist gerade" : "Die Zahl ist ungerade"

console.log(result)

const today = new Date()

console.log(today.getDay())

const donnerstag = today.getDay()

console.log(donnerstag)

const output_div = document.querySelector(".output")
const tag_element = document.querySelector(".tag")

console.log(output_div)
console.log(tag_element)

switch (today.getDay()) {
  case 0:
    output_div.innerHTML = "<p>Sonntag</p>"
    break
  case 1:
    output_div.innerHTML = "<p>Montag</p>"
    break
  case 2:
    output_div.innerHTML = "<p>Dienstag</p>"
    break
  case 3:
    output_div.innerHTML = "<p>Mittwoch</p>"
    break
  case 4:
    output_div.innerHTML = "<p>Donnerstag</p>"
    break
  case 5:
    output_div.innerHTML = "<p>Freitag</p>"
    break
  case 6:
    output_div.innerHTML = "<p>Samstag</p>"
    break
  default:
    output_div.innerHTML = "<p>Kein Gültiger Input</p>"
    break
}

// # &&

let istEingeloggt = true
let istAdmin = true

// bei && ist wichtig dass alle Bedingungen true oder false sein sollen, ansonsten schmeißt uns immer false aus

if (istEingeloggt && istAdmin) {
  console.log("Willkommen, admin!")
} else {
  console.log("Zugriff verweigert!")
}

//

let hatGutschein = false
let istHappyHour = true

if (hatGutschein || istHappyHour) {
  console.log("Du kriegst Rabatt!")
} else {
  console.log("leider kein Rabatt!")
}

// || &&

let alter = 17
let mitEinwilligung = false
if (alter >= 18 || (alter < 18 && mitEinwilligung)) {
  console.log("Zugang erlaubt")
} else {
  console.log("geh nach hause")
}

// ! ===== undefined and null =====

// ? undefined heißt das irgendwas existiert aber wir haben darauf noch keinen Zugang

// ? null heißt es existiert noch nicht
