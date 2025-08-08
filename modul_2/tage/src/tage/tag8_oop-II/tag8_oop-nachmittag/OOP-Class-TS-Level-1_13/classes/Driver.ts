import { CarType } from "../enums/CarType"
import Car from "./Car"

class Driver {
  private _firstName: string
  private _lastName: string
  private _age: number
  private _car: Car
  private _licenseFromYear: number

  constructor(firstName: string, lastName: string, age: number, car: Car, licenseFromYear: number) {
    this._firstName = firstName
    this._lastName = lastName
    this._age = age
    this._car = car
    this._licenseFromYear = licenseFromYear
  }
  get firstName(): string {
    return this._firstName
  }

  get licenseFromYear(): number {
    return this._licenseFromYear
  }

  getCarType(): CarType {
    return this._car.carType
  }
}

export default Driver
