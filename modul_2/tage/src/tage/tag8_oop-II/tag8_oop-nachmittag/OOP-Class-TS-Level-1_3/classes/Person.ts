import { Gender } from "../enums/Gender"

class Person {
  private _name: string
  private _gender: Gender
  private readonly _birthday: Date

  constructor(name: string, gender: Gender, birthday: Date) {
    this._name = name
    this._gender = gender
    this._birthday = birthday
  }

  // Getter & Setter für name
  get name(): string {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

  // Getter & Setter für gender
  get gender(): Gender {
    return this._gender
  }

  set gender(value: Gender) {
    this._gender = value
  }

  // Nur Getter für birthday
  get birthday(): Date {
    return this._birthday
  }
}

export default Person
