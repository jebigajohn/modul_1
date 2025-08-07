// ****** Object ********

// ? wie schreibt man Obj ?
// * Obj werden immer mit Geschweiften Klammern geschrieben
// * sie bestehen aus Eigenschaften und deren Werte => key und values
// * zuerst kommt der Name der Eigenschaft dann ein Doppelpunkt und der der Wert

const user = {
  vorName: "Joe",
  nachName: "Doe",
  age: 30,
  address: "main Street",
}

console.log(user)

console.log("Vorname", user.vorName)

user.vorName = "Lisa"

console.log("vorname nach Referenz:", user.vorName)

// ! Eigenschaften eines Objs können auch Array oder wieder ein Obj sein

const user2 = {
  vorName: "Marc",
  nachName: "mustermann",
  age: 42,
  beruf: "trainer",
  address: {
    stadt: "Berlin",
    strasse: "musterstraße",
    plz: 10111,
  },
  hobbies: ["soccer", "tennis", "play Piano"],
}

// const user3 = {
//     username: "Malte"
// }

console.log(user2.nachName)
console.log(user2.address.strasse)

// ! Type => wir defienieren uns einen eigenen Datentype names TMovie und legen die pflichteigenschaften und Datentypen fest

type TMovie = {
  title: string
  year: number
  mainCharacter: string
  categories: string[]
}

const movie1: TMovie = {
  title: "The Godfather",
  year: 1972,
  mainCharacter: "Don Vito",
  categories: ["action"],
}

console.log(movie1)
movie1.categories.push("drama")

const movie2: TMovie = {
  title: "Batman Begins",
  year: 2005,
  mainCharacter: "Batman",
  categories: ["Adventure", "Drama", "Fantasy"],
}

const movie3: TMovie = {
  title: "The Lord of the Rings: The Two Towers",
  year: 2002,
  mainCharacter: "Gollum",
  categories: ["Adventure", "Drama", "Fantasy"],
}

const moviesCollection: TMovie[] = [movie1, movie2, movie3]

// ! forEach(),map(), die ganze Arrays Methoden werden immer mit einem CallBack Function geschrieben

// ? ich kann das Array von dem Object dann in einer Schleife durchlaufen und jeweils einzelne Eigenschaften ausgeben
moviesCollection.forEach((movie: TMovie) => {
  console.log(movie.title)
})

// ? movies nach Erscheinungsjahr sortieren

moviesCollection.sort((movieA: TMovie, movieB: TMovie) => {
  return movieA.year - movieB.year
})

console.log(moviesCollection)

const movie4: TMovie = {
  title: "Hulk",
  year: 2010,
  mainCharacter: "Hulk",
  categories: ["Action", "Fantasy"],
}

moviesCollection.push(movie4)

// for In ist für Obj zuständig

// ! V1. Alt
// Key
for (const pizza in movie4) {
  console.log(pizza)
}

// Values
// for (const value in movie4) {
//     console.log(movie4[value]);
// }

// ! V2. Neu
console.log(Object.keys(movie4))
console.log(Object.values(movie4))
