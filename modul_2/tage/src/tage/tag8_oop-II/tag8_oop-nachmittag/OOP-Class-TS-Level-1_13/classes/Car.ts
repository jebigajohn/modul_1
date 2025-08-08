import { CarType } from "../enums/CarType"

class Car {
  private _brand: string
  private _constructionYear: number
  private _currentSpeed: number
  private _carType: CarType

  constructor(brand: string, constructionYear: number, currentSpeed: number = 0, carType: CarType = CarType.Unknown) {
    this._brand = brand
    this._constructionYear = constructionYear
    this._currentSpeed = currentSpeed
    this._carType = carType
  }

  get brand(): string {
    return this._brand
  }

  get constructionYear(): number {
    return this._constructionYear
  }

  get currentSpeed(): number {
    return this._currentSpeed
  }

  set currentSpeed(speed: number) {
    this._currentSpeed = speed
  }

  get carType(): CarType {
    return this._carType
  }

  set carType(type: CarType) {
    this._carType = type
  }

  getSpeedInfo(): string {
    const s = this._currentSpeed
    if (s <= 40) return "Driving slowly"
    if (s <= 70) return "Driving normally"
    if (s <= 120) return "Driving fast"
    if (s <= 190) return "Driving really fast"
    return "WTF"
  }
}

export default Car
