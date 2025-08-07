class Car {
  _brand: string
  _constructionYear: number
  _currentSpeed: number

  constructor(brand: string, constructionYear: number, currentSpeed: number = 0) {
    this._brand = brand
    this._constructionYear = constructionYear
    this._currentSpeed = currentSpeed
  }
}

export default Car
