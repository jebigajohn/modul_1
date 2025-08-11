class Actor {
  _firstName: string
  _lastName: string
  _birthday: Date
  _gender: string

  constructor(firstName: string, lastName: string, birthday: Date, gender: string) {
    this._firstName = firstName
    this._lastName = lastName
    this._birthday = birthday
    this._gender = gender
  }
}

export default Actor
