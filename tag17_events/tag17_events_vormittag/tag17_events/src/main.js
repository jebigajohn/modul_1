// Beispiel 1

// ? Variante 1
// window.loginFunction = function () {
//   const usernameInput = document.querySelector("#username").value
//   document.querySelector("p").innerText = `$Hallo ${usernameInput}`
// }

// ? Variante 2
const usernameInputElement = document.querySelector("#username")

console.log(usernameInputElement)
console.dir(usernameInputElement)

const passwordInputElement = document.querySelector("#password")

const result = document.querySelector("p")

let userNameVomBackend = "Joe"
let passwordVomBackend = "12345"

// function --> nur ein Platzhalter()
document.querySelector("#login").addEventListener("submit", function (pizza) {
  pizza.preventDefault()

  const usernameInputValue = usernameInputElement.value
  const passwordInputValue = passwordInputElement.value

  if (usernameInputValue === userNameVomBackend && passwordInputValue === passwordVomBackend) {
    result.innerText = `Guten Morgen ${usernameInputValue}, du bist eingeloggt`
  } else {
    result.innerText = "Password oder Username ist falsch"
  }
})

// Beispiel 2

document.querySelector("#live-input").addEventListener("input", function (event) {
  const inputValue = event.target.value
  console.log("Das ist die Eingabe", inputValue.toUpperCase())
  document.querySelector("#live-input").style.color = "red"
})

// --------------------------------------------------

console.dir(document.querySelector("#agree-checkbox"))
document.querySelector("#agree-checkbox").addEventListener("change", function (event) {
  const checkBoxValue = event.target.checked
  console.log("Checkbox is active", checkBoxValue)
})

// Beispiel 3
console.dir(document.querySelector("#color-picker"))
document.querySelector("#color-picker").addEventListener("input", function (event) {
  const inputElementValue = event.target.value
  document.body.style.backgroundColor = inputElementValue
})

// Beispiel 4

const myBtn = document.querySelector("#say-hi-btn")
const helloOutputElement = document.querySelector("#hello-output")

myBtn.addEventListener("click", function () {
  helloOutputElement.innerText = `Hallo vom AddEventListener`
})

// Beispiel 5

const textInputElement = document.querySelector("#text-input")

textInputElement.addEventListener("mouseover", function () {
  console.log("Die maus wird über mich gehovert")
  textInputElement.style.border = "2px solid red"
})

textInputElement.addEventListener("mouseout", function () {
  console.log("Die maus wird raus gehovert")
  textInputElement.style.border = "2px solid blue"
})

// Beispiel 6

const selectInputElement = document.querySelector("#select-input")
const selectOutputElement = document.querySelector("#select-output")

selectInputElement.addEventListener("change", function () {
  console.log("Ich wurde verändert")
  const selectInputValue = selectInputElement.value
  selectOutputElement.innerText = `Your Oder is ${selectInputValue}`
})

// Beispiel 7

const hacker = document.querySelector("#hacker")
const log = document.querySelector("#log")

hacker.addEventListener("keyup", function (event) {
  console.log(event.code)
})
