import Animal from "./classes/Animal"
import Person from "./classes/Person"
import { Gender } from "./enums/Gender"

const tiger = new Animal("Tiger", 4, "orange")
console.log(tiger.species) // Tiger
tiger.age = 5
console.log(tiger.age) // 5

const john = new Person("John", Gender.Male, new Date("1996-05-20"))
console.log(john.name) // John
john.name = "Jonathan"
console.log(john.name) // Jonathan
console.log(john.birthday) // 1996-05-20
