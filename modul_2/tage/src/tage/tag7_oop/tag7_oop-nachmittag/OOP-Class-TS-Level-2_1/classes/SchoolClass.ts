import Person from "./Person"

class SchoolClass {
  _id: number | string
  _name: string
  _endDate?: string
  private _persons: Person[] = []

  addPerson(person: Person) {
    this._persons.push(person)
  }

  listPersons() {
    return this._persons
  }

  constructor(id: number | string, name: string) {
    this._id = id
    this._name = name
    console.log("School class creation successful")
  }
}

export default SchoolClass
