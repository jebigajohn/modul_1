import userListe from "./data/userData"
import { IAdress } from "./interfaces/IAdress"
import IUser from "./interfaces/IUser"
import { IMovie } from "./interfaces/IMovie"
import Car from "./classes/Car"

// console.log(userListe)

const ichSucheNachKeys = Object.keys(userListe)

// forEach() => um irgendwas sehen zu können brauchen wir console.log und kein return
// map() => um irgendwas sehen zu können brauchen wir unbedingt return und console.log() ist optional

const alleKeysinObj = userListe.map((user: IUser) => {
  return Object.keys(user)
})

// console.log(alleKeysinObj)

userListe.forEach((user: IUser) => {
  const divElement = document.createElement("div") as HTMLDivElement
  let content = `<h3>Username: ${user.username}</h3>`
  const ObjToArray = Object.entries(user)
  console.log("ObjToArray", ObjToArray)
  ObjToArray.forEach(([key, value]: [string, string | IAdress | IMovie]) => {
    content += `<ul>
    <li>${key} : ${typeof value === "string" ? value : ObjToArrayFunction(value)}</li></ul>`
  })

  document.body.appendChild(divElement)
})

function ObjToArrayFunction(valueParameter: IAdress | IMovie): HTMLDivElement | string | undefined {
  if (Array.isArray(valueParameter)) {
    const divMovieElement = document.createElement("div") as HTMLDivElement

    const newMovieArrayValue = valueParameter.map((movie: IMovie) => {
      const myValue = (divMovieElement.innerHTML = `<h6>${movie.title}</h6>
      <p>${movie.rate}</p>`)
      return myValue
    })
    return newMovieArrayValue.join("")
  }
}

enum ColorPlattes {
  Red = "#c1121f",
  Brown = "#bc6c25",
  Yellow = "#ffd60a",
  BabyBlue = "#cae9ff",
}

console.log(ColorPlattes)

const enumToArray = Object.entries(ColorPlattes)

console.log(enumToArray)

enumToArray.forEach(([key, value]) => {
  console.log([key, value])
  const btn = document.createElement("button") as HTMLButtonElement

  btn.textContent = key
  btn.style.backgroundColor = value
  document.body.appendChild(btn)
  btn.addEventListener("click", () => {
    document.body.style.backgroundColor = value
  })
})

// ! static

const car1 = new Car("Tesla", "X5")

console.log(car1)

Car.howManyCars()

Car.updateOrder()

Car.isAvailable("BMW")
