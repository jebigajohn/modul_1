import Validator from "./Validator"

class Customer {
  private _name: string = ""
  private _email: string = ""
  private _address: string = ""
  private _postalCode: string = ""
  private _city: string = ""

  get name(): string {
    return this._name
  }

  set name(value: string) {
    if (value.length > 60) {
      console.error("Der Name darf maximal 60 Zeichen lang sein.")
      return
    }
    this._name = value
  }

  get email(): string {
    return this._email
  }

  set email(value: string) {
    if (!Validator.validateEmail(value)) {
      console.error("Ungültige E-Mail-Adresse")
      return
    }
    this._email = value
  }

  get address(): string {
    return this._address
  }

  set address(value: string) {
    this._address = value
  }

  get postalCode(): string {
    return this._postalCode
  }

  set postalCode(value: string) {
    const numeric = Number(value)

    if (isNaN(numeric) || numeric < 0 || numeric > 99999) {
      console.error("Die Postleitzahl muss eine Zahl zwischen 00000 und 99999 sein.")
      return
    }

    this._postalCode = value
  }

  get city(): string {
    return this._city
  }

  set city(value: string) {
    this._city = value
  }
}

export default Customer
