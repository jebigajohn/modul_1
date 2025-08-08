import Car from "./classes/Car"
import Driver from "./classes/Driver"
import { CarType } from "./enums/CarType"

const car1 = new Car("BMW", 2018, 50, CarType.Sedan)
const car2 = new Car("Tesla", 2022, 110, CarType.Coupe)
const car3 = new Car("Volkswagen", 2015, 195, CarType.Hatchback)

const driver1 = new Driver("Anna", "Schmidt", 29, car1, 2012)
const driver2 = new Driver("Ben", "Müller", 35, car2, 2008)
const driver3 = new Driver("Clara", "Fischer", 41, car3, 2000)

console.log(`${driver1.firstName} fährt einen ${driver1.getCarType()}`)
console.log(`${driver2.firstName} fährt einen ${driver2.getCarType()}`)

console.log(`Speed Info für ${car1.brand}: ${car1.getSpeedInfo()}`)
console.log(`Speed Info für ${car2.brand}: ${car2.getSpeedInfo()}`)
console.log(`Speed Info für ${car3.brand}: ${car3.getSpeedInfo()}`)
