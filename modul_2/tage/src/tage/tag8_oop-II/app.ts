import Dog from "./classes/Dog"
import LibraryBook from "./classes/LibraryBook"
import Owner from "./classes/Owner"
import Person from "./classes/Person"

const ownerVariable = new Owner("Joe", "Musterstraße", 10111, new Date(2002, 3, 25))

console.log(ownerVariable)
const myDog = new Dog("sunny", 30, ownerVariable, "2024.06.02")

// myDog.age = 38

console.log(myDog.dogInGerman)
console.log(myDog.age)

console.log(myDog.name)
console.log(myDog)

const myInputElement = document.getElementById("myInput") as HTMLInputElement

document.querySelector("form")?.addEventListener("submit", (e: Event) => {
  e.preventDefault()
  myDog.name = myInputElement.value
  console.log(myDog)
})

myDog.sleep()
myDog.bark("wuf wuf wuf")

myDog.eat()
myDog.eat()
// myDog.eat()
// myDog.eat()
// myDog.eat()

console.log(myDog.isHungry())

const andre = new Person("Andre", "Schmidt", new Date("2004-01-01"))

console.clear()

const goodGirlBook = new LibraryBook("Good Girl", "Aria Daba")

console.log(goodGirlBook)

goodGirlBook.borrowBook("Malte")
goodGirlBook.returnBook()
goodGirlBook.borrowBook("Farid")
goodGirlBook.borrowBook("Malte")
