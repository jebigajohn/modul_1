import SchoolClass from "./classes/SchoolClass"

const classA = new SchoolClass(1, "Mathematik")
const classB = new SchoolClass(2, "Biologie")
const classC = new SchoolClass(3, "Englisch")

classA._name = "Mathe Leistungskurs"
classC._name = "Advanced English"

console.log(classA)
console.log(classC)
