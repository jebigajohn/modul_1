class Person {
  firstName: string
  lastName: string
  private _email: string = ""
  private _birthday: Date

  constructor(firstName: string, lastName: string, birthday: Date) {
    this.firstName = firstName
    this.lastName = lastName
    this._birthday = birthday
  }
}

export default Person
