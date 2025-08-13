import { OrderStatus } from "../enums/OrderStatus"
import { ICar } from "../interfaces/ICar"

class Car implements ICar {
  _brand: string
  _model: string

  static status: OrderStatus = OrderStatus.Created

  static availableTypes = ["BMW", "BENZ", "TESLA", "VW"]

  static isAvailable(typeParameter: string): void {
    if (Car.availableTypes.includes(typeParameter)) {
      console.log(`Diese Marke ${typeParameter} ist im vorhanden`)
    } else {
      console.log(`Diese Marke ${typeParameter} ist nicht im vorhanden`)
    }
  }

  // Was ist static?
  // Gehört der Klasse selbst an und nicht einer Instanz
  // man greift mit KlassenName.Eigenschaften oder Klassenname.Methoden
  // ! Dafür braucht man keine neue Instanz oder erzeugtes Objekt
  static numberOfCars: number = 0

  constructor(brand: string, model: string) {
    this._brand = brand
    this._model = model
    Car.numberOfCars++
  }

  static howManyCars(): void {
    console.log(`Es gibt ${Car.numberOfCars} Autos in der Garage`)
  }

  startEngine(): void {
    throw new Error("Method not implemented.")
  }

  static updateOrder(): void {
    if (Car.status === OrderStatus.Created) {
      Car.status = OrderStatus.Ready
    }
    if (Car.status === 1) {
      console.log("Das Auto ist bereit zum Verkauf")
    }
  }
}

export default Car
