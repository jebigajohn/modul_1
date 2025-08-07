// ! ====== unedfined, null, any ======

// * ==== undefined ====
// * klassischer Fall: Variable wurde deklariert, aber es wurde ihr kei Wert zugewiesen

let sum20: number

// console.log(sum20);

// ! Hinter dem undefined versteckt sich ein true/false
// if (sum20) {
//     console.log("Due Zahl wurde gefunden");
// }

// * weiterer Fall: Wenn eine function kein expliziten Rückgabenwert hat, gibt uns eine undefined zurück

// function myFunc() { }
// console.log(myFunc());

// * ein letzter Fall: Der Zugriff auf nicht existierende Eigenschaften eines Objects

// let myObj = {

// }
// console.log(myObj.userName);

// * Mit Array

type TPlantsSchema = {
  name: string
  color: string
}

const plants: TPlantsSchema[] = [
  { name: "rose", color: "red" },
  { name: "Ivy", color: "green" },
  { name: "Lavander", color: "purple" },
]

// ! Sobald ihr mit geschweiften Klammern arbeitet, denkt bitte dran dass ihr mit return arbeiten solltet
const ichSuchNachKaktus = plants.find((plant: TPlantsSchema) => {
  return plant.name.includes("rose")
})

console.log(ichSuchNachKaktus)

// * ==== null ==== wenn etwas nicht im Vorhanden ist/ nicht exitiert

const myBtn = document.getElementById("mein-btn")
console.log(myBtn)

// ? undefined bedeutet in TS, dass eine Variable wurde bereits deklariert, aber wurde nicht zugwiesen
// ? Elvis Operator kann nur bei zuweisung und ausgaben verwendet werden kurz gesagt => auf der rechte Seite
const someText = myBtn?.textContent
console.log(someText)

// ? man kann null verwenden, um eine Variable zuzuweisen, die später ein Objectwert erhalten soll.

type TmyUser = {
  id?: number
  name: string
  age?: number
}

let user: null | TmyUser = null

// Das ist meine Simulation vom Backend

user = {
  name: "Joe",
  age: 20,
}

const userCollection: TmyUser[] = [
  { id: 1, name: "Andre" },
  { id: 2, name: "Riya" },
  { id: 3, name: "Malte" },
]

function findUserById(id: number): TmyUser | null {
  for (let user of userCollection) {
    if (user.id === id) {
      return user
    }
  }
  // Kein User wurde gefunden, weil es exitiert nicht
  return null
}

const user2 = findUserById(10)

console.log(user2)

if (user2 === null) {
  console.log("Diesen User, den du danach suchst, wurde nicht gefunden")
}

// * ======= any =========
// ! das sollte sehr sehr sehr selten verwendet werden

const iAmSomeThing: any = "dsadasda"

function returnAnyThing(): any {
  return 39322313
}

returnAnyThing()
