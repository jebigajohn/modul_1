import SchoolClass from "./classes/SchoolClass"
import Person from "./classes/Person"

const classA = new SchoolClass(1, "Mathematik")

// Personen per Schleife hinzufügen (z. B. mit Array von Namen)
const personData = [
  { id: 1, firstName: "Anna", lastName: "Meier", birthday: "2005-03-21" },
  { id: 2, firstName: "Ben", lastName: "Schulz", birthday: "2006-07-14" },
  { id: 3, firstName: "Clara", lastName: "Fischer", birthday: "2005-11-02" },
]

personData.forEach((data) => {
  const person = new Person(data.id, data.firstName, data.lastName, data.birthday)
  classA.addPerson(person)
})

classA.listPersons()

console.log(classA.listPersons())
